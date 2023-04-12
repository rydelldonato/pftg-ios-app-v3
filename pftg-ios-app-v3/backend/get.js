import { DoorDashClient } from "@doordash/sdk";
import "dotenv/config";

const client = new DoorDashClient({
    developer_id: process.env.DEVELOPER_ID,
    key_id: process.env.KEY_ID,
    signing_secret: process.env.SIGNING_SECRET,
  })

export async function getDelivery(props) { await client
  .getDelivery(props.deliveryId)
  .then(getDelivery => {
    console.log(getDelivery.data)
  })
  .catch(err => {
    console.log(err)
  })
}
'a12c6ef9-0f15-4484-be8b-02acd3ec1281'