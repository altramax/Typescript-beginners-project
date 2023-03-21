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



class invoice{
  //  public client : string;
  //  private details: string;
  //  readonly amount: number;

   constructor(
    public client : string,
    private details: string,
    readonly amount: number
   ){
  
   }

   format(){
    return `${this.client} owes ${this.amount} for ${this.details}`
   }
}

const inVo1 = new invoice("mario", "repair of bicycles", 200)
const inVo2 = new invoice("mariolavi", "repair of cars", 3000)

const invoices : invoice[] = [];
invoices.push(inVo2);
invoices.push(inVo1);

console.log(invoices);

invoices.forEach(inv=>{
  console.log(inv.client, inv.amount, inv.format());
})

// default modifiers public, private, readonly






const button = document.getElementById("button") as HTMLElement;
const type = document.getElementById("type") as HTMLSelectElement;
const toFrom = document.getElementById("tofrom") as HTMLInputElement;
const details = document.getElementById("details") as HTMLInputElement;
const amount = document.getElementById("amount") as HTMLInputElement;


button.addEventListener("click", (e: Event)=>{
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.value);
})
