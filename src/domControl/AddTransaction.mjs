import { generateCard } from "./forms.mjs";
import { dataManager } from "./DataManager.mjs";
import {
  MovingMoney,
  MutualFundTrade,
  EquityTrade,
  OptionsTrade,
  ManagedAccounts,
  Other,
} from "./Transaction.mjs";
/**
 * This module is responsible for setting up all handlers. Instantiate the object then call the methods for handling certain things.
 */

class AddTransaction {
  constructor() {
    this.buttonsContainer = document.querySelector(".buttons-container");
    this.options = {
      "Moving-Money": { count: 0 },
      "Mutual-Fund-Trade": { count: 0 },
      "Equity-Trade": { count: 0 },
      "Options-Trade": { count: 0 },
      "Managed-Accounts": { count: 0 },
      Other: { count: 0 },
    };
  }

  resetTransactions() {
    this.options = {};
    this.options = {
      "Moving-Money": { count: 0 },
      "Mutual-Fund-Trade": { count: 0 },
      "Equity-Trade": { count: 0 },
      "Options-Trade": { count: 0 },
      "Managed-Accounts": { count: 0 },
      Other: { count: 0 },
    };

    const transactionContainer = document.querySelector(
      "#transaction-container"
    );
    transactionContainer.innerHTML = "";
  }

  // make handlers for the form page
  handleTransactions() {
    // select add-transaction button
    const addTransaction = document.querySelector(
      "button.add-transaction-button"
    );
    // add event listener for add-transaction
    addTransaction.addEventListener("click", () => {
      // Clear existing buttons before adding new ones
      this.buttonsContainer.innerHTML = "";
      // Generate buttons for options that haven't been clicked yet
      for (let option in this.options) {
        let button = document.createElement("button");
        button.id = option;
        button.innerHTML = this.formatString(option);
        button.setAttribute("type", "button");
        this.buttonsContainer.appendChild(button);
      }
      //console.log(this.options);
      this.addButtonHandlers();
    });
  }

  /**
   * When the user selects an add transaction option, it needs to generate a new object that is then appended to the data object. How can we do that?
   */

  /**
   * Add's event handlers to the generated add transaction buttons.
   */
  addButtonHandlers() {
    const buttons = this.buttonsContainer.querySelectorAll("button");
    const transactionContainer = document.querySelector(
      "#transaction-container"
    );

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        let choice = button.getAttribute("id");
        let count = this.options[choice].count;
        let title = `${choice}-${count}`;
        let card = generateCard(choice, count, title);
        console.log(card);
        console.log(`${choice} clicked`);
        if (card) {
          transactionContainer.appendChild(card);
          // increase count on option
          this.options[choice].count++;
          this.buttonsContainer.innerHTML = ``;
        }
        // initialize empty object that will be the new transaction object that will later be added to dataManager.data.Transactions.push(newTransactionObject);
        const newTransactionObjectName = `${choice}-${count}`;
        //console.log(newTransactionObjectName);
        // add the newTransactionObject to Transactions
        dataManager.addTransaction(newTransactionObjectName);
        // Selects all the text inputs.
        let textInputs = card.querySelectorAll('input[type= "text"]');
        if (textInputs) {
          textInputs.forEach((input) => {
            // dataManager.data.Transactions[newTransactionObjectName][
            //   input.name
            // ] = null;
            input.addEventListener("input", () => {
              // get the object key
              let key = input.name;
              // get the object value
              let value = input.value;
              // update the object.
              dataManager.data.Transactions[newTransactionObjectName][key] =
                value;
            });
          });
        }
        // Handle radio buttons
        let radioButtons = card.querySelectorAll('input[type="radio"]');
        if (radioButtons) {
          radioButtons.forEach((radio) => {
            radio.addEventListener("change", () => {
              if (radio.checked) {
                let key = radio.name;
                let value = radio.value;
                dataManager.data.Transactions[newTransactionObjectName][key] =
                  value;
              }
            });
          });
        }

        // Handle select dropdowns
        let selects = card.querySelectorAll("select");
        if (selects) {
          selects.forEach((select) => {
            select.addEventListener("change", () => {
              let key = select.name;
              let value = select.value;
              dataManager.data.Transactions[newTransactionObjectName][key] =
                value;
            });
          });
        }

        // Event Handler to close the card.
        card.querySelector(".close-card").addEventListener("click", () => {
          card.remove();
          // remove options count
          this.options[choice].count--;
          // TODO - Remove the object from the data.
          delete dataManager.data.Transactions[newTransactionObjectName]; // Remove the object from the data
          dataManager.decrementTransactionCount();
        });
      });
    });
  }
  // responsible for setting up new event handlers on inputs of new transaction form, and updating the new transaction object nested in the data object.
  handleNewTransaction(transactionId) {
    const transactionForm = document.querySelector(`#${transactionId}`);
  }

  createTransactionObject(choice, count) {
    let newTransaction = {};
    switch (choice) {
      case "Moving-Money":
        newTransaction = new MovingMoney(count);
        break;
      case "Mutual-Fund-Trade":
        newTransaction = new MutualFundTrade(count);
        break;
      case "Equity-Trade":
        newTransaction = new EquityTrade(count);
        break;
      case "Options-Trade":
        newTransaction = new OptionsTrade(count);
        break;
      case "Managed-Accounts":
        newTransaction = new ManagedAccounts(count);
        break;
      case "Other":
        newTransaction = new Other(count);
        break;
      default:
        break;
    }
    return newTransaction;
  }

  formatString(input) {
    return input.split("-").join(" ");
  }
}

let addTransactions = new AddTransaction();
export { addTransactions };

// generate a new object with a unique id and update it as the form is being filled out.
// const newTransaction = this.createTransactionObject(
//   choice,
//   this.options[choice].count
// );
//console.log("newTransaction:", newTransaction);
// Add newTransaction to data object.
//dataManager.data.Transactions.push(newTransaction);
// update the dom controller so that new event handlers are added to all of the fields and that they update the dataManager object when new inputs are added.

/**
 * A new idea. So instead of instantiating the transaction objects, simply add a new empty object to the data.Transactions, then add all the event listeners. Then the event listener will update all of the keys and add them based on what the form value is.
 */

//
