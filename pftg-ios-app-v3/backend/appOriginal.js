import express from "express";
const app = express();
const port = 3000;
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import "dotenv/config";
import { DoorDashClient } from "@doordash/sdk";
import jwt from 'jsonwebtoken';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.sendFile(path.join(_dirname, "index.html"));
});

app.listen(port, (err) => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`App listening on port ${port}`);
});

app.post("/get-delivery-rate", async (req, res) => {
  const client = new DoorDashClient({
    developer_id: process.env.DEVELOPER_ID,
    key_id: process.env.KEY_ID,
    signing_secret: process.env.SIGNING_SECRET,
  });

  const response = await client.deliveryQuote({
    external_delivery_id: uuidv4(),
    pickup_address: "1000 4th Ave, Seattle, WA, 98104",
    pickup_phone_number: "+1(650)5555555",
    dropoff_address: "1201 3rd Ave, Seattle, WA, 98101",
    dropoff_phone_number: "+1(650)5555555",
  });

  res.send(response);
  console.log("response", response)
});

app.post("/accept-delivery", async (req, res) => {
  const client = new DoorDashClient({
    developer_id: process.env.DEVELOPER_ID,
    key_id: process.env.KEY_ID,
    signing_secret: process.env.SIGNING_SECRET
  });

  const response = await client.deliveryQuoteAccept(
    "5c2e1a11-e44d-4797-aff3-4dfa120a180f"
  );

  res.send(response)
  console.log("ACCEPT", response)
});

// const accessKey = {
//   developer_id: process.env.DEVELOPER_ID,
//   key_id: process.env.KEY_ID,
//   signing_secret: process.env.SIGNING_SECRET,
// }

// const data = {
//   aud: 'doordash',
//   iss: accessKey.developer_id,
//   kid: accessKey.key_id,
//   exp: Math.floor(Date.now() / 1000 + 60),
//   iat: Math.floor(Date.now() / 1000),
// }

// const headers = { algorithm: 'HS256', header: { 'dd-ver': 'DD-JWT-V1' } }

// const token = jwt.sign(
//   data,
//   Buffer.from(accessKey.signing_secret, 'base64'),
//   headers,
// )

// console.log(token)


const jwt = import('jsonwebtoken')

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
}

const headers = { algorithm: 'HS256', header: { 'dd-ver': 'DD-JWT-V1' } }

const token = jwt.sign(
  data,
  Buffer.from(accessKey.signing_secret, 'base64'),
  headers,
)

console.log(token)