class CheckingsAccount {

    private balance:number;
    private ownerName:String;

    constructor(initialBalance:number, ownerName:String) {
        this.balance = initialBalance;
        this.ownerName = ownerName;
    }

    deposit(addTo:number) {
        this.balance = this.balance + addTo;
    }

    withdraw(subFrom:number) {
        this.balance = this.balance - subFrom;
    }

    checkBalance() {
        console.log(`${this.ownerName}: $${this.balance}`);
    }
}