import jwt from 'jsonwebtoken';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";

const accessKey = {
  developer_id: 'e1ddfb9d-cba8-49d8-afa9-4d87fe1394a4',
  key_id: '1abf145e-3d0e-475a-97f7-5375fcf0ce1d',
  signing_secret: 'aXmi5rltACOrOLWbnFLeqaQg-ICaShh4VDJNBwlE6-Y',
};

const data = {
  aud: 'doordash',
  iss: accessKey.developer_id,
  kid: accessKey.key_id,
  exp: Math.floor(Date.now() / 1000 + 300),
  iat: Math.floor(Date.now() / 1000),
};

const headers = { algorithm: 'HS256', header: { 'dd-ver': 'DD-JWT-V1' } };

const token = jwt.sign(
  data,
  Buffer.from(accessKey.signing_secret, 'base64'),
  headers,
);

const body = JSON.stringify({
  external_delivery_id: uuidv4(),
  pickup_address: '1600 Ethan Way Ste 30, Sacramento, CA 95825',
  pickup_phone_number: '+16505555555',
  dropoff_address: '2929 Edison Ave, Sacramento, CA 95821',
  dropoff_phone_number: '+16505555555',
});

axios
  .post('https://openapi.doordash.com/drive/v2/quotes', body, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
