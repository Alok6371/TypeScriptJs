"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = 10; //union
let apirequestStatus = "pending";
apirequestStatus = "success";
let airLineSeat = "aisle";
airLineSeat = "aisle";
const orders = ["12", "23", "34", "32"];
let currentOrder;
for (let order of orders) {
    if (order === "23") {
        currentOrder = order;
        break;
    }
    currentOrder = "11";
}
// currentOrder = 43;
console.log(currentOrder);
//# sourceMappingURL=unionAndany.js.map