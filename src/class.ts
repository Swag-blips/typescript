// classes

class Invoice {
  //   readonly client: string;
  //   private details: string;
  //   private amount: number;
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("ben", "sold balls", 20);

const invTwo = new Invoice("mario", "sold bas", 2032);

console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne, invTwo);

invoices.forEach((inv) => console.log(inv.client, inv.amount, inv.format()));

console.log(invoices);
