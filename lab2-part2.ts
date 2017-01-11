class SavingsAccount {

    private balance:number;
    private ownerName:String;
    private withdrawals:number;

    constructor(initialBalance:number, ownerName:String) {
        this.balance = initialBalance;
        this.ownerName = ownerName;
        this.withdrawals = 3;
    }

    deposit(addTo:number) {
        this.balance = this.balance + addTo;
    }

    withdraw(subFrom:number) {
       if (this.withdrawals > 0) {
           this.balance = this.balance - subFrom;
           this.withdrawals--;
       } else {
           console.log('You have exceeded your withdrawal limits');
       }
    }

    checkBalance() {
        console.log(`${this.ownerName}: $${this.balance}`);
    }
}