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