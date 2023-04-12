import { DoorDashClient } from "@doordash/sdk";
import { v4 as uuidv4 } from "uuid";
import "dotenv/config";

const client = new DoorDashClient({
  developer_id: process.env.DEVELOPER_ID,
  key_id: process.env.KEY_ID,
  signing_secret: process.env.SIGNING_SECRET,
});

export async function createDelivery() {
  await client
    .createDelivery({
      external_delivery_id: uuidv4(),
      pickup_address: "1000 4th Ave, Seattle, WA, 98104",
      pickup_phone_number: "+1(650)5555555",
      dropoff_address: "1201 3rd Ave, Seattle, WA, 98101",
      dropoff_phone_number: "+1(650)5555555",
    })
    .then(data =>{
      let deliveryId = data.data.external_delivery_id
      console.log(deliveryId)
    })
    .catch((err) => {
      console.log(err);
    });
}
