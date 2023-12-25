//explicitly setting the variable type
let sales:number = 123_456_789;
let course:string = 'TypeScript';
let is_published:boolean = true;

// don't always have to annotate variables
// implicitly setting the variable type
let sales2 = 123_456_789;
let course2 = 'TypeScript';
let is_published2 = true;

// Avoid using anytype as much as possible
let level;
level = 'string';
level = 2;

function render(document:any){
  console.log(document);
}

let numbers = [1,2,3]; //implicitly setting the variable type to numbers
let numbers2: number[] = [1,2,3]; //explicitly setting the variable type to numbers
let numbers3 = []; //implicit any
 
numbers.forEach((n)=> n.toFixed); //shows code completion for the parameter, as vscode knows it's type

// Tuple: fixed length array with a particular type
let user: [number, string] = [1, 'Mosh'];
user.push(1);
// user[1].lastIndexOf

// const small = 1;
// const medium = 2;
// const large = 3;


// By default, enums are numeric. Numeric enum members have auto-incrementing values if they are not manually set

// essentially creating a type with different values
const enum Size {Small=1, Medium, Large};

//:Size is the type of variable here.
let mySize: Size = Size.Medium;
console.log(mySize);