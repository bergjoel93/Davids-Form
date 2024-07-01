import { generateCard } from "./forms.mjs";
/**
 * This module is responsible for setting up all handlers. Instantiate the object then call the methods for handling certain things.
 */

export default class Handle {
  constructor() {
    this.buttonsContainer = document.querySelector(".buttons-container");
  }

  // make handlers for the form page
  handleFormPage() {
    // add transaction button

    let options = [
      "Moving-Money",
      "Mutual-Fund-Trade",
      "Equity-Trade",
      "Options-Trade",
      "Managed-Accounts",
      "Other",
    ];

    const addTransaction = document.querySelector(
      "button.add-transaction-button"
    );
    addTransaction.addEventListener("click", () => {
      // when this button is clicked, 6 buttons will appear for 6 different options. Each option will add. After what type of option is clicked, then a new "Add Transaction" box will appear underneath the previous one.
      for (let i = 0; i < options.length; i++) {
        let button = document.createElement("button");
        button.id = `${options[i]}`;
        button.innerHTML = `${this.formatString(options[i])}`;
        this.buttonsContainer.appendChild(button);
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
        let card;
        card = generateCard(choice);
        console.log(`${choice} clicked`);
        if (card) {
          transactionContainer.appendChild(card);
          this.buttonsContainer.innerHTML = ``;
        }
      });
    });
  }

  formatString(input) {
    return input.split("-").join(" ");
  }
}
