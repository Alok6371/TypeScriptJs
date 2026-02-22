let subs: number | string = 10; //union

let apirequestStatus: "pending" | "success" | "error" = "pending";

apirequestStatus = "success";

let airLineSeat: "aisle" | "window" | "middle" = "aisle";

airLineSeat = "aisle";

const orders = ["12", "23", "34", "32"];

let currentOrder: string | undefined;

for (let order of orders) {
  if (order === "23") {
    currentOrder = order;
    break;
  }
  currentOrder = "11";
}
// currentOrder = 43;
console.log(currentOrder);
