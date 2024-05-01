const a = 5; // const a: 5
let b: number = 4;
const z = <number>45;


const c: number[] = [1, 2, 3];
c.push(4);
const arr: Array<string> = ['w', 'a', 's', 'd'];


let d: any = 5; // avoid it, removes advantage of TS
d = "5";


const person: { name: string, age: number, isProgrammer?: boolean } = {
  name: "Aayushmaan",
  age: 19
}; //isProgrammer is optional type


type PersonDetail  = { name: string, age: number, isProgrammer?: boolean } // type name should be PascalCase & mainly defined at top of file
const person2: PersonDetail = {
  name: "Aayush",
  age: 19
};


interface PersonDetails {  // same as type but usually used with object type and also have features like inheritance and merging
  name: string, 
  age: number, 
  friends: [],
  address: {
    street: string
  }
}


function printName(name: string, name1: string): string { // string is return type, not necessary to type cuz TS is samrt enough to know type
  console.log("Hello, " + name + " & " + name1 );
  return "Hello, " + name + " & " + name1;
}


function print(person: {name: string}) {
  console.log(person.name);
}
const person3 = {name: "Aayush", age: 19}
print(person3) // works
// print({name: "Aayush", age: 19}) dont work


type Options = { debugMode?: boolean }
function prints(name: string, {debugMode = false}: Options) { // object destructuring with a default value and a type annotation.
  console.log(name, debugMode);
}


function wasd ( ...a: number[] ) {
  console.log(a);
  return;
}
wasd(1, 2, 3)


function sumCallBack(a: number, b: number, cb: (sum: number) => void) {
  cb(a + b)
}
sumCallBack(1, 2, (sum) => {console.log(sum)})


let id: string | number | boolean = 7; // union type
type wsdd = {
  isProgrammer: boolean | undefined; // same as isProgrammer?: boolean
}
// interface dont support union


interface Person {
  name: string;
  age: number;
}
interface Employee {
  employeeId: string;
  department: string;
}
type WorkingPerson = Person & Employee;


interface Person2 {
  readonly id: number; // id cannot re-assign
  name: string;
}
type NumberArray = readonly number[]
const nums: NumberArray = [1, 2, 3] // cannot modify this


function getVal(key: keyof Person, person: Person) {
  return person[key]
}
const naame = getVal("name", {name: "Aayush", age: 19})


function sayHi(name: string) {
  console.log(name);
}
type FuncType = typeof sayHi


class Player {
  private height: number;
  public weight: number;
  constructor(height: number, weight: number) {
    this.height = height;
    this.weight = weight;
  }
  getHeight() {
    console.log(this.height);
  }
}
const aayush = new Player(100, 150);
console.log(aayush.weight + " " + aayush.getHeight());
// OR
class Players {
  constructor(private height: number, public weight: number) {
    this.height = height;
    this.weight = weight;
  }
  getHeight() {
    console.log(this.height);
  }
}
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}
class Car implements Vehicle {
  constructor(
    public make: string,
    public model: string,
    public year: number
  ) {}
  start(): void {
    console.log(`Starting ${this.make} ${this.model} (${this.year})`);
  }
}
const myCar = new Car("Toyota", "Camry", 2022);
myCar.start();


type Personss = {
  name: string,
  skillLevel: "Beginner" | "Intermediate" | "Expert"
}
const wasddd: Personss["skillLevel"] = "Beginner";
type level = {
  // [index: string]: Person[] key is string value is from person array type
  // [index: Person["skillLevel"]]: Person[] error cuz index signature parameter type must be 'string', 'number', 'symbol', or a template literal type
  [index in Personss["skillLevel"]]: Personss[] //  keys are the possible values of the "skillLevel" property 
}


const arr22 = ["easd", "es", true];
type A = (typeof arr22)[0]; // string
type B = (typeof arr22)[number]; // all type of value union

const arar = {
  name: "ams",
  age: 19
}
type C = (typeof arar)[keyof typeof arar] // string | number


const persn = {
  name: "John",
  age: 30,
}; // const persn: {name: string;age: number;}
const personLiteral = {
  name: "John",
  age: 30,
} as const; // const personLiteral: {readonly name: "John"; readonly age: 30};


type Tuple = [string, boolean];
const h: Tuple = ["water", true];


function getSecond(arr: number[]) {
  return arr[1];
} 
getSecond([1, 2, 3]);
// getSecond(['w', 'a', 's', 'd']);  Error
function get2nd<ArrayType>(arr: ArrayType[]) {
  return arr[1];
}
get2nd([1, 2, 3]);
get2nd(['w', 'a', 's', 'd']); // OR get2nd<string>(['w', 'a', 's', 'd']); 


type ApiRes<TData> = {
  data: TData;
  isError: boolean;
};
type userRes = ApiRes<{ name: string, age: number }>;
const j: userRes = {
  data: {
    name: "ams",
    age: 12
  },
  isError: false
}
// <TData extends Object> or <TData extends string> we can only pass additional params as obj or string


type wasd = Pick<Person, 'name' | 'age' >;
type ww = Omit<Person, 'age'>;
type yy = Partial<Car>;
type rr = Required<Options>; // doesnot make deep nested optional
type form = Required<Pick<Car, 'make' | 'model'>> & Omit<Car, 'make'> // make make & model required and is ommiting make to resolve conflict in required as in code it may be optional
function anyFunc(a: number) {
  return a + 1;
} 
type ReturnofFunct = ReturnType<typeof anyFunc>
type ParamType = Parameters<typeof anyFunc>
type grouped = Record<string, Person[]>


enum Roles {
  user = 'user',
  admin = 'admin'
}
const usr = {
  email: 'ams@gmail.com',
  passwd: '123',
  role: Roles.admin
}


type Async = Promise<string>
type value = Awaited<Async>


// let date: Date;
// if(date instanceof Date) {
//   console.log("Date");
// } else {
//   console.log("Number");
// }


const g: any = 2;
(g as string).length // use it as last resort


type Todo = {
  title: string,
  dueDate: string | Date,
  isCompleted: boolean
}

const todos: Todo = {
  title: "Wasd",
  dueDate: new Date(),
  isCompleted: true
}

// todos.dueDate.setDate(4)  error confuse b/w string and date so to fix this use 
const todo = {
  title: "Wasd",
  dueDate: new Date(),
  isCompleted: true
} satisfies Todo // here it look at todo see its date and use it as date
todo.dueDate.setDate(4);