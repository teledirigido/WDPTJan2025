class BankAccount {
  // Private property
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  // Private method to log transactions
  #logTransaction(amount) {
    console.log(`Deposited ${amount}. Current balance: ${this.#balance}`);
  }

  // Public method to deposit monay
  deposit(amount) {
    this.#balance += amount;
    this.#logTransaction(amount);
  }

  // Public "getter" method to get the current balance
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount('Luke');

account.deposit(100);
console.log(account.getBalance());

//Trying to access the private property or method directly will throw an error
console.log(account.#balance); //Error
console.log(account.#logTransaction(100)); //Error
