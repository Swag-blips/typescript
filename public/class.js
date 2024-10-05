"use strict";
// classes
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("ben", "sold balls", 20);
const invTwo = new Invoice("mario", "sold bas", 2032);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne, invTwo);
console.log(invoices);
