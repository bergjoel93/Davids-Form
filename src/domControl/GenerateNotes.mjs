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
      //console.log('note generator button clicked!');
      // query select all of the stuff that has a Data Label, then make a big ass string of it.
      const dataLabels = document.querySelectorAll('[data-label]'); // selects all of the elements with a data label

      let result = `\n\nGenerated Notes \n--------------------------------------`;
      console.log(dataLabels);

      dataLabels.forEach((element) => {
        let key = element.getAttribute('data-label'); // Correctly access the data-label attribute
        console.log(key);
        console.log('value:', element.value);
        if (
          element.value !== null &&
          element.value !== '' &&
          (element.type !== 'checkbox' || element.checked) &&
          (element.type !== 'radio' || element.checked) &&
          element.value !== 'none'
        ) {
          if (key.includes('Verification')) {
            console.log('test');
            result += `\n Verification:`;
          } else if (
            key.includes('MyVoice') ||
            key.includes('Outbound Verified') ||
            key.includes('Green Checkmark') ||
            key.includes('Internal Verified') ||
            key.includes('Manual Verified') ||
            key.includes('Enrolled MyVoice') ||
            key.includes('OTP Verified') ||
            key.includes('HRT Verefied')
          ) {
            result += `\n\t${key}`;
          } else {
            let value = element.value;
            if (key.includes('Transaction')) {
              result += `\n`;
            }
            if (element.type === 'checkbox') {
              value = 'Yes';
            }
            if (key.includes('Fed') || key.includes('State')) {
              value += '%';
            }

            result += `\n${key}: ${value}`;
          }
        }
      });
      this.notesElement.value += result;
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
