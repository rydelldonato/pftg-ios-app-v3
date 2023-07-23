// // import jwt from 'jsonwebtoken';
// import axios from 'axios';
// import { v4 as uuidv4 } from "uuid";
// import base64 from 'js-base64';
// import jwtDecode from 'jwt-decode';


// const accessKey = {
//   developer_id: 'e1ddfb9d-cba8-49d8-afa9-4d87fe1394a4',
//   key_id: '1abf145e-3d0e-475a-97f7-5375fcf0ce1d',
//   signing_secret: 'aXmi5rltACOrOLWbnFLeqaQg-ICaShh4VDJNBwlE6-Y',
// };

// async function getQuoteFunction(){
//   const data = {
//     aud: 'doordash',
//     iss: accessKey.developer_id,
//     kid: accessKey.key_id,
//     exp: Math.floor(Date.now() / 1000 + 300),
//     iat: Math.floor(Date.now() / 1000),
//   };

//     // Generate the JWT token manually (not using jwt.sign())
//   const header = base64.encode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
//   const payload = base64.encode(JSON.stringify(data));
//   const signature = jwtDecode(accessKey.signing_secret);

//   const token = `${header}.${payload}.${signature}`;

//   const body = JSON.stringify({
//     external_delivery_id: uuidv4(),
//     pickup_address: '1600 Ethan Way Ste 30, Sacramento, CA 95825',
//     pickup_phone_number: '+16505555555',
//     dropoff_address: '2929 Edison Ave, Sacramento, CA 95821',
//     dropoff_phone_number: '+16505555555',
//   });

//   try {
//     const response = await axios.post('https://openapi.doordash.com/drive/v2/quotes', body, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     });
//     console.log(response.data);
//     return response.data; // Return the response data to be used in your React Native app.
//   } catch (error) {
//     console.log(error);
//     throw error; // Throw the error to handle it in your React Native app.
//   }
// }


// export default getQuoteFunction;

import axios from 'axios';
import { v4 as uuidv4 } from "uuid";

async function getQuoteFunction(quoteData) {

  const body = JSON.stringify(quoteData);
  // {
  //   external_delivery_id: uuidv4(),
  //   pickup_address: '110 N El Dorado St, Stockton, CA 95202, USA',
  //   pickup_phone_number: '+16505555555',
  //   dropoff_address: '3129 English Oak Cir, Stockton, CA 95209, USA',
  //   dropoff_phone_number: '+16505555555',
  // }
  try {
    // Make a request to your secure backend endpoint to get the JWT token
    const tokenResponse = await axios.get('https://jwt-pftg-ios-app-v3-kdd2h08wy-rydelldonato.vercel.app/api/generateToken');

    // Access the token from the response data
    const token = tokenResponse.data.token;

    // Make the request to DoorDash's API with the received token
    const response = await axios.post('https://openapi.doordash.com/drive/v2/quotes', body, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    return response.data; // Return the response data to be used in your React Native app.
  } catch (error) {
    console.log(error);
    throw error; // Throw the error to handle it in your React Native app.
  }
}

export default getQuoteFunction;

