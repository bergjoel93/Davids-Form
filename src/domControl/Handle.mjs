import { generateCard } from "./forms.mjs";
/**
 * This module is responsible for setting up all handlers. Instantiate the object then call the methods for handling certain things.
 */

export default class Handle {
  constructor() {
    this.buttonsContainer = document.querySelector(".buttons-container");
    this.options = {
      "Moving-Money": false,
      "Mutual-Fund-Trade": false,
      "Equity-Trade": false,
      "Options-Trade": false,
      "Managed-Accounts": false,
      Other: false,
    };
  }

  // make handlers for the form page
  generateAddTransactionButtons() {
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
        if (!this.options[option]) {
          let button = document.createElement("button");
          button.id = option;
          button.innerHTML = this.formatString(option);
          button.setAttribute("type", "button");
          this.buttonsContainer.appendChild(button);
        }
      }
      this.addButtonHandlers();
    });
  }

  addButtonHandlers() {
    const buttons = this.buttonsContainer.querySelectorAll("button");
    const transactionContainer = document.querySelector(
      "#transaction-container"
    );

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        let choice = button.getAttribute("id");
        let card = generateCard(choice);
        console.log(`${choice} clicked`);
        if (card) {
          transactionContainer.appendChild(card);
          this.options[choice] = true; // Update the option to true
          this.buttonsContainer.innerHTML = ``;
        }
      });
    });
  }

  formatString(input) {
    return input.split("-").join(" ");
  }
}
