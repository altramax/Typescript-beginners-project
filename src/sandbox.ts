// interface 
interface IsPerson {
  name : string,
  age : number,
  speak(a: string) : void,
  spend(a: number) : number;
}

const me: IsPerson = {
  name : "James",
  age: 23,
  speak(text: string): void{
    console.log(text);
  },
  spend(amount: number): number{
      console.log(`I spent`, amount);
      return amount
  }
}

console.log(me);


const greetPerson = (a: IsPerson) =>{
  console.log('Hello', a.name);
}

greetPerson(me)



// module
import { Invoice} from "./classes/classes.js"

const inVo1 = new Invoice("mario", "repair of bicycles", 200)
const inVo2 = new Invoice("mariolavi", "repair of cars", 3000)

const invoices : Invoice[] = [];
invoices.push(inVo2);
invoices.push(inVo1);

console.log(invoices);

invoices.forEach(inv=>{
  console.log(inv.client, inv.amount, inv.format());
})



const button = document.getElementById("button") as HTMLElement;
const type = document.getElementById("type") as HTMLSelectElement;
const toFrom = document.getElementById("tofrom") as HTMLInputElement;
const details = document.getElementById("details") as HTMLInputElement;
const amount = document.getElementById("amount") as HTMLInputElement;


button.addEventListener("click", (e: Event)=>{
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.value);
})




// //  aliasis
// type strornum = string | number;

// let g: number[] = [];

// g.push(20);
// // g.push("fr")
// console.log(g);

// // define object stucture
// let w: {
//   fry: any;
//   g: strornum;
//   k: string[];
// };

// w = {
//   fry: "g",
//   g: "f",
//   k: ["y"],
// };

// console.log(w);

// let can = () => console.log("hello");

// // can = 2;

// let test = (a: number, b: number = 10) => {
//   return a + b;
// };
// test(4);
// let t = test(3, 2);
// console.log(t);

// let wq = "ght";

