//explicitly setting the variable type
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

// don't always have to annotate variables
// implicitly setting the variable type
let sales2 = 123_456_789;
let course2 = 'TypeScript';
let is_published2 = true;

// Avoid using anytype as much as possible
let level;
level = 'string';
level = 2;

function render(document: any) {
  console.log(document);
}

let numbers = [1, 2, 3]; //implicitly setting the variable type to numbers
let numbers2: number[] = [1, 2, 3]; //explicitly setting the variable type to numbers
let numbers3 = []; //implicit any

numbers.forEach((n) => n.toFixed); //shows code completion for the parameter, as vscode knows it's type

// Tuple: fixed length array with a particular type
let user: [number, string] = [1, 'Sam'];
user.push(1);
// user[1].lastIndexOf

// const small = 1;
// const medium = 2;
// const large = 3;

// ENUMS

// By default, enums are numeric. Numeric enum members have auto-incrementing values if they are not manually set
// essentially creating a type with different values
const enum Size {
  Small = 1,
  Medium,
  Large,
}

//:Size is the type of variable here.
let mySize: Size = Size.Medium;
console.log(mySize);

// FUNCTIONS
// OPTIONAL PARAMETER     ?: number
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }

  return income * 1.3;
}

calculateTax(10_000, 2022);

//OBJECTS
let employee: { readonly id: number; name: string; retire: (date: Date) => void } = {
  id: 1,
  name: '',
  retire: (date: Date) => {
    console.log(date);
  },
};
employee.name = 'Sam';
// employee.id = 0; //this should not be allowed

// The brackets ([]) are used to denote an index signature (Index Signatures for Objects) in TypeScript. It's a way to specify that an object can have multiple properties, and this syntax defines the type of the keys of these properties.
let stringValues: { [index: number]: string } = {
  0: 'hello',
  1: 'world',
};

//TYPE ALIASES: shape of an employee2 obj, helps to make code clear and dry
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee2: Employee = {
  id: 1,
  name: 'Mosh',
  retire: (date: Date) => {
    console.log(date);
  },
};

// UNION TYPES
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number') {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs('10');

// INTERSECTION TYPES
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

// Combine types into 1 new type
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal (exact, specific)
type Quantity = 50 | 100; //Literal type, instead something like number or string, it says 50 or 100
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch'; //Literal types don't have to be numbers, they can be strings
