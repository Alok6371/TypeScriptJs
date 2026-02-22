function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `making ${kind} chai....`;
  }
  return `Chai order: ${kind}`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai ${msg}`;
}

function orderChai(size: "small" | "medium" | "large") {
  if (size === "small") {
    return "Small Cutting Chai...";
  }
  if (size === "medium" || size === "large") {
    return "make extra chai";
  }
  return `chai order #${size}`;
}

// console.log(orderChai("medium"));

class kulahchai {
  serve() {
    return `Serving KUlad vhai`;
  }
}

class CuttingChai {
  serve() {
    return `Serving KUlad vhai`;
  }
}

function server(chai: kulahchai | CuttingChai) {
  if (chai instanceof kulahchai) {
    return chai.serve();
  }
}
// console.log(server);

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.type === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar}`;
  }
  return `Serving Custom Chai`;
}
