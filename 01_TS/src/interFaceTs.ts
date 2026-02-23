function makeChai(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}

function serveChai(order: { type: string; sugar: number; strong: number }) {
  console.log(order);
}

type ChaiOrder = {
  type: string;
  sugar: number;
  strong: number;
};

function makerChai(order: ChaiOrder) {
  console.log(order);
}

function serverChai(order: ChaiOrder) {
  console.log(order);
}

interface TeaRecipe {
  water: number;
  milk: number;
}

class masalaChai implements TeaRecipe {
  water = 100;
  milk = 300;
}

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

// type Response = { ok: true } | { ok: false };
// class myRes implements Response {
//   ok: boolean = true;

// }

type TeaType = "masala" | "Ginger" | "Lemon";

function orderChai(t: TeaType) {
  console.log(t);
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type masalaChai2 = BaseChai & Extra;

const cup: masalaChai2 = {
  teaLeaves: 2,
  masala: 1,
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "Alok" };
const u2: User = { username: "Alok", bio: "Alok.ai" };

type Config = {
  readonly appNaame: string;
  varsion: number;
};

const cfg: Config = {
  appNaame: "Masterji",
  varsion: 1,
};
// cfg.appNaame = "ChaiCode";
