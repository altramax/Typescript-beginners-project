import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
const button = document.getElementById("button");
const type = document.getElementById("type");
const toFrom = document.getElementById("tofrom");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
button.addEventListener("click", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice("Yoshi", "for books", 50);
    }
    else if (type.value === "payment") {
        doc = new Payment("Yoshi", "food", 250);
    }
    console.log(doc);
});
