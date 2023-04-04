import { DoorDashClient } from "@doordash/sdk";
import "dotenv/config";

const client = new DoorDashClient({
    developer_id: process.env.DEVELOPER_ID,
    key_id: process.env.KEY_ID,
    signing_secret: process.env.SIGNING_SECRET,
  })

const response = client
  .getDelivery('a12c6ef9-0f15-4484-be8b-02acd3ec1281')
  .then(response => {
    console.log(response.data)
  })
  .catch(err => {
    console.log(err)
  })

  console.log(response)