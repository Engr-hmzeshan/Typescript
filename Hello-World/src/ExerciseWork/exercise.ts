// Exercises
// For each of these values, what type will the TypeScript compiler infer?
// number
let a = 100;
// string
let b = "Coffee";
// boolean[]
let c = [true, false, false];
// number[]
let e = [3];
// any[]
let f = [];
// any
let g;

// What are the compilation errors in each of the following code snippets?

// Property 'releaseYear' is missing in type '{ title: string; }' but required in type '{ title: string; releaseYear: number; }'
let song: {
  title: string;
  releaseYear: number;
} = { title: "My song", releaseYear: 19 };

let prices: [string, number, number] = ["100", 200, 300];
// Type 'string' is not assignable to type 'number'
prices[0] = "$100";
function myFunc(a: number, b: number): number {
  return a + b;
}

// Make a aliases
type User = {
  name: string;
  age: number;
  occupation?: string;
};
let users: User[] = [
  {
    name: "John Smith",
    age: 30,
    occupation: "Software engineer",
  },
  {
    name: "Kate Müller",
    age: 28,
  },
  {
    name: "Zeshan",
    age: 24,
  },
];
users[3] = {
  name: "Irfan",
  age: 25,
};
console.log(users);
// Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these
type Birds = {
  fly: () => void;
};
type Fish = {
  swim: () => void;
};
type Pet = Birds | Fish;
// Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type DaysofWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Satureday"
  | "Sunday";
// let users1 = getUsers1();
// console.log(users1?.address?.street);

// let x;
// x = "foo" ?? bar();
let value: unknown = "a";
if (typeof value === "string") console.log(value.toUpperCase());
