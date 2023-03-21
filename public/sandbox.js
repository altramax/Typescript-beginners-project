"use strict";
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
class invoice {
    //  public client : string;
    //  private details: string;
    //  readonly amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const inVo1 = new invoice("mario", "repair of bicycles", 200);
const inVo2 = new invoice("mariolavi", "repair of cars", 3000);
const invoices = [];
invoices.push(inVo2);
invoices.push(inVo1);
console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
// default modifiers public, private, readonly
const button = document.getElementById("button");
const type = document.getElementById("type");
const toFrom = document.getElementById("tofrom");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.value);
});
