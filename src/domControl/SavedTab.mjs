import { addFormToStorage, getStoredData, formatNoteObject } from './Save.mjs';
/**
 * This module is responsible for populating the saved tab.
 */

export default class SavedTab {
  constructor() {
    this.formsData = getStoredData();
    this.table = document.querySelector('table');
  }

  renderList() {
    //console.log("Test");
    // loop through the forms to get every object inside.
    //create the table headers.

    for (let i = this.formsData.forms.length - 1; i >= 0; i--) {
      let note = this.formsData.forms[i];
      let noteTitle = Object.keys(note)[0];
      let date = note[noteTitle].Date;
      let cosmo = note[noteTitle]['Cosmo-Whisper'];
      let name = note[noteTitle]['Client-Name'];
      let additionalCallers = note[noteTitle]['Additional-Callers'];
      let internalFC = note[noteTitle]['Internal-FC'];
      let verification = this.arrayToString(note[noteTitle]['Verification']);
      let accountNum = note[noteTitle]['Account-Number'];
      let restrictions = note[noteTitle]['Restrictions'];
      let mid = note[noteTitle]['MID'];
      let cotm = note[noteTitle]['COTM'];
      let printPretty = formatNoteObject(note);
      let show = document.createElement('div');

      show.innerHTML = `
        <div class="overlay-note" >

            <button id="expand-modal-${noteTitle}" class = "expand-modal-btn">Show</button>

          <div id="${noteTitle}" class="note-modal">
            <button id="close-modal-${noteTitle}" class = "close-modal-btn">x</button>
            <label for="text-area-${noteTitle}"></label>
            <textarea
              class="note-print"
              id="text-area-${noteTitle}"
              wrap="hard"
            >${printPretty}
            </textarea>
          </div>
        </div>
      `;
      const dataArray = [
        noteTitle,
        date,
        cosmo,
        name,
        additionalCallers,
        internalFC,
        verification,
        accountNum,
        restrictions,
        mid,
        cotm,
        show,
      ];
      // first create a tr
      const tr = document.createElement('tr');
      // then create all of the td elements. and append them to tr.
      // Create `td` elements for each item in `dataArray`
      for (let j = 0; j < dataArray.length; j++) {
        const td = document.createElement('td');

        // Check if the current item is a DOM element
        if (dataArray[j] instanceof HTMLElement) {
          // If it's an HTMLElement, append it directly
          td.appendChild(dataArray[j]);
        } else {
          // Otherwise, set it as innerHTML
          td.innerHTML = dataArray[j];
        }

        tr.appendChild(td);
      }
      this.table.appendChild(tr);
      // add event handlers
      // first select the note modal

      /////
      const modal = document.querySelector(`#${noteTitle}`);
      // select the button and add event listener.
      const expandBtn = document.querySelector(`#expand-modal-${noteTitle}`);
      // add event handler
      expandBtn.addEventListener('click', () => {
        // toggle the modal to have show.
        modal.classList.toggle('show');
        document.querySelector('.backdrop').classList.toggle('show');
      });
      // add close button
      const closeBtn = document.querySelector(`#close-modal-${noteTitle}`);
      closeBtn.addEventListener('click', () => {
        console.log('close btn pressed');
        modal.classList.toggle('show');
        document.querySelector('.backdrop').classList.toggle('show');
      });
    }
  }

  arrayToString(arr) {
    if (Array.isArray(arr)) {
      return arr.join(', ');
    } else {
      return '';
    }
  }

  addModalHandlers(id) {
    let expandBtns = document.querySelectorAll('#expand-modal');
    expandBtns.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        // we want to select the closest
        const modalDiv = document.modalDiv.classList.toggle('show');
        // add the event listener to close the modal.
        let closeNote = document.querySelector('#close-modal');
        closeNote.addEventListener('click', this.toggleModal);
      });
    });
  }

  toggleModal() {
    const modalDiv = document.querySelector('#note-modal');
    const backdrop = document.querySelector('.backdrop');
    modalDiv.classList.toggle('show');
    backdrop.classList.toggle('show');
  }
}

/**
 * We get the stored forms. Now we need to generate the list items with all of the information inside.
 */
