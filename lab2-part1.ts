class CheckingsAccount extends Account {
    
    constructor(initialBalance:number, ownerName:string) {
        super(initialBalance, ownerName);
    }

    withdraw(subFrom:number) {
        this.balance = this.balance - subFrom;
    }
}