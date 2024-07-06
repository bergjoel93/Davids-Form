import { format } from "date-fns";
/**
 * Resonsible for managing all of the data. Adds handlers and event listeners to the page. Creates the data object which is used for saving and displaying the data.
 */

class DataManager {
  constructor() {
    this.handleMain();
    this.currentDate = this.formatDate(new Date());
    this.data = {
      Date: this.currentDate,
      "Cosmo-Whisper": null,
      "Client-Name": null,
      "Additional-Callers": null,
      "Internal-FC": null,
      Verification: [],
      "Account-Number": null,
      Restrictions: null,
      MID: null,
      COTM: null,
      Notes: null,
      "SF-Notes": null,
      Transactions: {},
    };
    this.transactionCount = 0;
  }

  decrementTransactionCount() {
    this.transactionCount--;
    if (this.transactionCount <= 0) this.transactionCount = 0;
  }

  addTransaction(transactionName) {
    this.data.Transactions[transactionName] = {};
    this.transactionCount++; // Increment the transaction counter
  }

  handleMain() {
    // select all of the inputs in main container
    const cosmo = document.querySelector("#cosmo-whisper");
    const name = document.querySelector("#client-name");
    const additionalCallers = document.querySelector("#additional-callers");
    const internal = document.querySelector("#internal-FC");
    const verification = document.querySelectorAll(
      '.checkbox input[type="checkbox"]'
    );
    const accountNum = document.querySelector("#account-number");
    const restrictions = document.querySelectorAll(
      'input[name="restrictions"]'
    );
    const mid = document.querySelector("#MID");
    const cotm = document.querySelector("#COTM");
    const notes = document.querySelector("#notes");
    const sfNotes = document.querySelector("#SF-notes");

    // add event handlers to all those in main container
    cosmo.addEventListener("input", () => {
      let value = cosmo.value;
      this.data["Cosmo-Whisper"] = value;
      //console.log(data);
    });
    name.addEventListener("input", () => {
      this.data["Client-Name"] = name.value;
    });
    additionalCallers.addEventListener("input", () => {
      this.data["Additional-Callers"] = additionalCallers.value;
    });
    internal.addEventListener("input", () => {
      this.data["Input-FC"] = internal.value;
    });
    verification.forEach((checkbox) => {
      // if there is a change to any of the checkboxes update.
      checkbox.addEventListener("change", () => {
        // first clear the verifaction array.
        this.data.Verification = [];
        // recapture all the checkboxes to check if they're checked or unchecked.
        const checkboxes = document.querySelectorAll(
          '.checkbox input[type="checkbox"]'
        );
        checkboxes.forEach((check) => {
          if (check.checked) {
            this.data.Verification.push(checkbox.id);
          }
        });
      });
    });
    accountNum.addEventListener("input", () => {
      this.data["Account-Number"] = accountNum.value;
    });
    restrictions.forEach((radio) => {
      //detect a change to any of those radio buttons.
      radio.addEventListener("change", () => {
        // select only the button that has been checked.
        const selectedRadio = document.querySelector(
          'input[name="restrictions"]:checked'
        );
        if (selectedRadio) {
          this.data.Restrictions = selectedRadio.value;
        }
        console.log(this.data);
      });
    });
    mid.addEventListener("input", () => {
      this.data.MID = mid.value;
    });
    cotm.addEventListener("input", () => {
      this.data.COTM = cotm.value;
    });
    notes.addEventListener("input", () => {
      this.data.Notes = notes.value;
    });
    sfNotes.addEventListener("input", () => {
      this.data["SF-Notes"] = sfNotes.value;
    });

    const resetBtn = document.querySelector("#reset-button");
    resetBtn.addEventListener("click", () => {
      this.resetForm();
    });

    const saveBtn = document.querySelector("#submit-button");
    saveBtn.addEventListener("click", () => {
      console.log(this.data);
    });
  }
  /**
   * Resets the form and page entirely. Deletes any data in the data object.
   */
  resetForm() {
    this.data = {};
    this.data = {
      "Cosmo-Whisper": null,
      "Client-Name": null,
      "Additional-Callers": null,
      "Internal-FC": null,
      Verification: [],
      "Account-Number": null,
      Restrictions: null,
      MID: null,
      COTM: null,
      Notes: null,
      "SF-Notes": null,
    };
    // Clear all text input fields
    document.querySelectorAll('input[type="text"]').forEach((input) => {
      input.value = "";
    });
    // Clear all checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });

    // Clear all radio buttons
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.checked = false;
    });

    // Clear all textareas
    document.querySelectorAll("textarea").forEach((textarea) => {
      textarea.value = "";
    });
    console.log("Form and data object have been reset");
  }
  // Method to format the date
  formatDate(date) {
    // Create suffixes for day
    const getDayWithSuffix = (day) => {
      if (day > 3 && day < 21) return `${day}th`;
      switch (day % 10) {
        case 1:
          return `${day}st`;
        case 2:
          return `${day}nd`;
        case 3:
          return `${day}rd`;
        default:
          return `${day}th`;
      }
    };

    // Format parts of the date
    const month = format(date, "MMM");
    const day = getDayWithSuffix(format(date, "d"));
    const year = format(date, "yyyy");
    const time = format(date, "h:mmaaa").toUpperCase();

    // Combine parts into desired format
    return `${month} ${day} ${year} - ${time}`;
  }
}
let dataManager = new DataManager();

export { dataManager };
