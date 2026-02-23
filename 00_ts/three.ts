type masalachai = { type: "masala"; aroma: number };
type GingerChai = { type: "Ginger"; aroma: number };
type ElachiChai = { type: "Elachi"; aroma: number };

type Chai = masalachai | GingerChai | ElachiChai;

function makeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      console.log("Masala Chai");
      break;
    case "Elachi":
      console.log("Elachi Chai");
      break;
    case "Ginger":
      console.log("Ginger Chai");
      break;
  }
}
