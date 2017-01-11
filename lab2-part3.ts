class Account {

    balance:number;
    ownerName:String;

    constructor(initialBalance:number, ownerName:String) {
        this.balance = initialBalance;
        this.ownerName = ownerName;
    }

    deposit(addTo:number) {
        this.balance = this.balance + addTo;
    }

    checkBalance() {
        console.log(`${this.ownerName}: $${this.balance}`);
    }
}