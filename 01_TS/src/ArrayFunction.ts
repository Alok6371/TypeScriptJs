const chaiFlavour: string[] = ["masala", "adrak"];
const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 5.6];

type Chai = {
  name: string;
  price: number;
};
const menu: Chai[] = [
  {
    name: "masala",
    price: 23,
  },
  {
    name: "Adarak",
    price: 234,
  },
];

menu.push({ name: "kiran", price: 123 });
console.log(menu);

const cities: readonly string[] = ["delhi", "Odisha"];

// cities.push("pune");

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let chaiTuple: [string, number];

chaiTuple = ["masla", 30];
// chaiTuple = [34, "30"];

let userInfo: [string, number, boolean?];

userInfo = ["alok", 22];
userInfo = ["alok", 22, true];
userInfo = ["alok", 22, true];

const location: readonly [number, number] = [28.66, 43.33];
const chaiItem: [name: string, price: number] = ["masala", 24];

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;

enum Status {
  PENDING = 100,
  SERVED, //101
  CANCELLED, //102
}

let s = Status.CANCELLED;
console.log(s);

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: ChaiType) {
  console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER);

enum RandomeEnum {
  ID = 1,
  NAME = "chai",
}

const enum Sugar {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}
const su = Sugar.HIGH;
console.log(su);

let t: [String, number] = ["chai", 10];

t.push("extra");

// 2.48.00