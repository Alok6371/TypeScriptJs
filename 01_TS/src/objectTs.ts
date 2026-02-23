const Chai = {
  name: "Malsala Chai",
  price: 20,
  isHot: true,
};

// {
//   name: string;
//   price: number;
//   isHot: boolean;
// }

let tea: {
  name: string;
  price: number;
  isHot: true;
};

tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredients: ["ginger", "tea leaves"],
};

type Cup = {
  size: string;
};
let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "500ml", materail: "steel" };

smallCup = bigCup;
type Brew = { brewTime: number };

const coffee = { brewTime: 5, beans: "Arabic" };
const chaiBrew: Brew = coffee;

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "chai air code",
  password: "124",
};

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  console.log("updating chai with ", updates);
};

updateChai({ price: 123 });
updateChai({ isHot: true });
updateChai({});

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({ name: "Alok", quantity: 43 });

type Chaipani = {
  name: string;
  price: number;
  isHot: boolean;
  indegrients: string[];
};

type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "Lemon",
  price: 34,
};

type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretindegrients: string[];
};

type PublicChai = Omit<ChaiNew, "secretindegrients">;

const ChaiAllFor: PublicChai = {
  name: "masala",
  price: 32,
  isHot: true,
};
