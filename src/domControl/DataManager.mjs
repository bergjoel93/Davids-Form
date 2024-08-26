import { format } from 'date-fns';
import { addFormToStorage, getStoredData } from './Save.mjs';
import { addTransactions } from './AddTransaction.mjs';
import SavedTab from './SavedTab.mjs';
/**
 * Resonsible for managing all of the data. Adds handlers and event listeners to the page. Creates the data object which is used for saving and displaying the data.
 */

class DataManager {
  constructor() {
    this.handleMain();
    this.currentDate = this.formatDate(new Date());
    this.data = {
      Date: this.currentDate,
      'Cosmo-Whisper': null,
      'Client-Name': null,
      'Additional-Callers': null,
      'Internal-FC': null,
      Verification: [],
      'Account-Number': null,
      Restrictions: 'no',
      MID: null,
      'Interaction-Model': [],
      Transactions: {},
      Notes: null,
    };
    this.transactionCount = 0;
    this.addTransactions = addTransactions;
    this.addTransactions.handleAddTransactionButton();
    this.handlePersistantNotes();
  }

  handlePersistantNotes() {
    this.populatePersistantNotes();
    const save = document.querySelector('#save-persistent-button');
    save.addEventListener('click', () => {
      const note = document.querySelector('#persistent-notes').value;
      this.savePersistentNotes(note);
    });
    const reset = document.querySelector('#reset-persistent-button');
    reset.addEventListener('click', () => {
      const note = document.querySelector('#persistent-notes');
      note.value = '';
      localStorage.setItem('PersistentNote', '');
    });
  }

  populatePersistantNotes() {
    const note = document.querySelector('#persistent-notes');
    if (localStorage.getItem('PersistentNote') !== null) {
      const persistentNote = localStorage.getItem('PersistentNote');
      note.value = persistentNote;
    } else {
      note.value = '';
    }
  }

  savePersistentNotes(note) {
    localStorage.setItem('PersistentNote', note);
    return 'PersistentNote';
  }

  getTransactionCount() {
    return this.transactionCount;
  }

  deleteTransaction(transactionName) {
    if (this.data.Transactions && this.data.Transactions[transactionName]) {
      delete this.data.Transactions[transactionName];
      this.decrementTransactionCount();
      console.log(`Transaction ${transactionName} deleted.`);
    } else {
      console.log(`Transaction ${transactionName} not found.`);
    }
  }

  decrementTransactionCount() {
    this.transactionCount--;
    if (this.transactionCount <= 0) this.transactionCount = 0;
  }

  addTransaction(transactionName, cardData) {
    // Ensure Transactions is initialized as an object
    if (!this.data.Transactions) {
      this.data.Transactions = {};
    }

    // Add the cardData to Transactions using transactionName as the key
    this.data.Transactions[transactionName] = cardData;
    this.transactionCount++; // Increment the transaction counter
  }

  handleMain() {
    // select all of the inputs in main container
    const cosmo = document.querySelector('#cosmo-whisper');
    const name = document.querySelector('#client-name');
    const additionalCallers = document.querySelector('#additional-callers');
    const internal = document.querySelector('#internal-FC');
    // selecting for verification only
    const verificationBox = document.querySelector('.section-2');
    const verification = verificationBox.querySelectorAll(
      '.checkbox input[type="checkbox"]'
    );
    const accountNum = document.querySelector('#account-number');
    const restrictions = document.querySelector('input[name="restrictions"]');
    const mid = document.querySelector('#MID');
    const interactionModelBox = document.querySelector('.section-4');
    const interactionModel = interactionModelBox.querySelectorAll(
      '.checkbox input[type="checkbox"]'
    );

    const notes = document.querySelector('#notes');

    // add event handlers to all those in main container
    cosmo.addEventListener('input', () => {
      let value = cosmo.value;
      this.data['Cosmo-Whisper'] = value;
      //console.log(data);
    });
    name.addEventListener('input', () => {
      this.data['Client-Name'] = name.value;
    });
    additionalCallers.addEventListener('input', () => {
      this.data['Additional-Callers'] = additionalCallers.value;
    });
    internal.addEventListener('input', () => {
      this.data['Internal-FC'] = internal.value;
    });
    verification.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          this.data.Verification.push(checkbox.id);
        } else {
          const index = this.data.Verification.indexOf(checkbox.id);
          if (index > -1) {
            this.data.Verification.splice(index, 1);
          }
        }
      });
    });

    interactionModel.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          this.data['Interaction-Model'].push(checkbox.id);
        } else {
          const index = this.data['Interaction-Model'].indexOf(checkbox.id);
          if (index > -1) {
            this.data['Interaction-Model'].splice(index, 1);
          }
        }
      });
    });

    accountNum.addEventListener('input', () => {
      this.data['Account-Number'] = accountNum.value;
    });

    restrictions.addEventListener('change', () => {
      restrictions.checked
        ? (this.data.Restrictions = 'yes')
        : (this.data.Restrictions = 'no');
    });

    mid.addEventListener('input', () => {
      this.data.MID = mid.value;
    });

    notes.addEventListener('input', () => {
      this.data.Notes = notes.value;
    });

    const resetBtn = document.querySelector('#reset-button');
    resetBtn.addEventListener('click', () => {
      this.resetForm();
    });

    const saveBtn = document.querySelector('#submit-button');
    saveBtn.addEventListener('click', () => {
      console.log(this.data);
      const notesElement = document.querySelector('#notes');
      this.data.notes = notesElement.value;
      addFormToStorage(this.data);
      this.resetForm();
    });

    const savedTab = document.querySelector('#to-saved');
    savedTab.addEventListener('click', () => {
      // render the saved data and then add it as an overlay on top of window.
      let savedTab = new SavedTab();
      savedTab.renderList();
      // TODO
      //   const savedContainer = renderSaved();
      const savedPage = document.querySelector('#overlay');
      savedPage.style.display = 'block';
      //   savedPage.appendChild(savedContainer);
    });

    const formTab = document.querySelector('#to-form');
    formTab.addEventListener('click', () => {
      const savedPage = document.querySelector('#overlay');
      savedPage.style.display = 'none';
    });
  }

  generateDataId() {
    let maxId = -1;

    // Iterate over all keys in local storage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const match = key.match(/(\d+)$/); // Match any digits at the end of the key
      if (match) {
        const id = parseInt(match[0], 10); // Convert the matched digits to an integer
        if (id > maxId) {
          maxId = id;
        }
      }
    }

    return maxId + 1;
  }

  /**
   * Resets the form and page entirely. Deletes any data in the data object.
   */
  resetForm() {
    this.data = {};
    this.data = {
      Date: this.currentDate,
      'Cosmo-Whisper': null,
      'Client-Name': null,
      'Additional-Callers': null,
      'Internal-FC': null,
      Verification: [],
      'Account-Number': null,
      Restrictions: 'no',
      MID: null,
      'Interaction-Model': [],
      Transactions: {},
      Notes: null,
    };
    // Clear all text input fields
    document.querySelectorAll('input[type="text"]').forEach((input) => {
      input.value = '';
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
    document.querySelectorAll('textarea').forEach((textarea) => {
      textarea.value = '';
    });
    console.log('Form and data object have been reset');
    this.handlePersistantNotes();

    // reset the transaction stuff and clear forms.
    this.addTransactions.resetTransactions();
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
    const month = format(date, 'MMM');
    const day = getDayWithSuffix(format(date, 'd'));
    const year = format(date, 'yyyy');
    const time = format(date, 'h:mmaaa').toUpperCase();

    // Combine parts into desired format
    return `${month} ${day} ${year} - ${time}`;
  }
}
let dataManager = new DataManager();

export { dataManager };
