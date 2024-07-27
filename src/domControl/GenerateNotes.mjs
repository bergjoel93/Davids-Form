/**
 * This module is responsible for handling what happens when the user clicks the "Generate Notes" Button. If the user clicks this button, all of the inputs from the page are taken and printed.
 */

export default class NoteGenerator {
  constructor() {
    this.generateNotesBtn = document.querySelector('button.generate-notes');
    this.handleGenerateNotesBtn();
    this.salesForceNote = {};
    this.notesElement = document.querySelector('#notes');
  }
  handleGenerateNotesBtn() {
    this.generateNotesBtn.addEventListener('click', () => {
      console.log('note generator button clicked!');
      // query select all of the stuff that has a Data Label, then make a big ass string of it.
      const dataLabels = document.querySelectorAll('[data-label]'); // selects all of the elements with a data label

      let result = `\n\nGenerated Notes \n---------------------------\n\n`;

      dataLabels.forEach((element) => {
        let key = element.getAttribute('data-label'); // Correctly access the data-label attribute
        let value;

        if (element.type === 'checkbox') {
          value = element.checked ? 'Yes' : 'No';
        } else {
          if (element.type === 'radio' && !element.checked) {
            key = 'SKIP';
          }
          value = element.value;
        }

        if (key.includes('Transaction')) {
          result += `\n`;
        }

        result += `${key}: ${value} \n`;

        //   // check if its a transaction type. If it is, add the object to the transactions property as a new object.

        //   if(key.includes("Transaction")){
        //     currentTransaction = element.value;
        //     this.salesForceNote["Transaction"] = {element.value:{}}
        //   }

        //   if (element.type === 'checkbox') {
        //     value = element.checked ? 'Yes' : 'No';
        //   } else {
        //     value = element.value;
        //   }

        //   if (key) {
        //     this.salesForceNote[key] = value;
        //   }
      });
      this.notesElement.value += result;
      // console.log(this.salesForceNote);
      // // print pretty into the notes section.
      // this.notesElement.value = ``;
      // this.notesElement.value = this.printObjectToString(this.salesForceNote);
    });
  }

  printObjectToString(obj) {
    let result = '';

    for (const [key, value] of Object.entries(obj)) {
      if (key.includes('Transaction')) {
        result += `\n`;
      }
      result += `${key}: ${value}\n`;
    }

    return result;
  }
}
