class SavingsAccount extends Account {

    private withdrawals:number;
    
    constructor(initialBalance:number, ownerName:String) {
        super(initialBalance, ownerName);
        this.withdrawals = 3;
    }

    withdraw(subFrom:number) {
       if (this.withdrawals > 0) {
           this.balance = this.balance - subFrom;
           this.withdrawals--;
       } else {
           console.log('You have exceeded your withdrawal limits');
       }
    }
}