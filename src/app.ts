import { Invoice } from "./classes/Invoice.js"
import { Payment } from "./classes/Payment.js"
import { Hasformatter } from "./interface/Hasformatter.js"



const button = document.getElementById("button") as HTMLElement;
const type = document.getElementById("type") as HTMLSelectElement;
const toFrom = document.getElementById("tofrom") as HTMLInputElement;
const details = document.getElementById("details") as HTMLInputElement;
const amount = document.getElementById("amount") as HTMLInputElement;


button.addEventListener("click", (e: Event)=>{
  e.preventDefault();
  let doc : Hasformatter;

 if(type.value === "invoice"){
  doc = new Invoice("Yoshi", "for books", 50);
 }else if(type.value === "payment"){
  doc = new Payment("Yoshi", "food", 250);
 }
 console.log(doc);
})


