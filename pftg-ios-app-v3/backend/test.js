import { createDelivery } from "./create.js";
import { getDelivery } from "./get.js";

let deliveryId = createDelivery()
console.log(deliveryId)

// console.log("get delivery",getDelivery({deliveryId : deliveryId}))