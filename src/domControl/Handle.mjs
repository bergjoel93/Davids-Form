/**
 * This module is responsible for setting up all handlers. Instantiate the object then call the methods for handling certain things.
 */

export default class Handle {
  constructor() {}

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

    const secondContainer = document.querySelector(".second-container");

    const buttonsContainer = document.querySelector(".buttons-container"); //clear by default

    const addTransaction = document.querySelector(
      "button.add-transaction-button"
    );
    addTransaction.addEventListener("click", () => {
      // when this button is clicked, 6 buttons will appear for 6 different options. Each option will add. After what type of option is clicked, then a new "Add Transaction" box will appear underneath the previous one.
      for (let i = 0; i < options.length; i++) {
        let button = document.createElement("button");
        button.id = `${options[i]}`;
        button.innerHTML = `${this.formatString(options[i])}`;
        buttonsContainer.appendChild(button);
      }
      secondContainer.appendChild(buttonsContainer);
    });
  }

  addButtonHandlers() {
    let buttonsContainer = document.querySelector(".buttons-container");
    let buttons = buttonsContainer.querySelectorAll("button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        let choice = button.getAttribute("id");
        // generate and render form based off option chosen.
      });
    });
  }

  formatString(input) {
    return input.split("-").join(" ");
  }
}
