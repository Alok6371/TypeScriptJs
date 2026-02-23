let response: any = "42";
///Force fully assoction
let numricLength: number = (response as string).length;

type Book = {
  name: string;
};
let bookString = '{"name":"who moved my cheese"}';

let bookObject = JSON.parse(bookString) as Book;
console.log(typeof bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;

value = "chai";
value = [1, 2, 3];

value = 2.4;

value.toUpperCase();

let newvalue: unknown;

newvalue = "chai";
newvalue = [1, 2, 3];

newvalue = 2.4;

if (typeof newvalue === "string") {
  newvalue.toUpperCase();
}

try {
} catch (error) {
  //   console.log(error.message);

  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

const data: unknown = "chai aur code";

const strData: string = data as string;

type Role = "admin" | "user" | "superadmin";

function redirectOnRole(role: Role): void {
  if (role === "admin") {
    console.log("rediecting to dashboard");
    return;
  }
  if (role === "user") {
    console.log("Rediecting to user dashboard");
    return;
  }
  role;
}
function neverReturn(): never {
  while (true) {}
}
