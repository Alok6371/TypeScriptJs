function makeChai(type: string, cups: number) {
  console.log(`making ${cups} cups of ${type}`);
}

makeChai("masala", 23);

function getChaiPrice(): number {
  return 25;
}

function makeOrder(order: string) {
  if (!order) return null;

  return order;
}

function logChai(): void {
  console.log("Chai is ready");
}

// function orderChai(type?:string){

// }
// function orderChai(type:string="masala"){

// }

function createChai(order: {
  type: string;
  sugar: string;
  size: "larze" | "small";
}): number {
  return 4;
}
