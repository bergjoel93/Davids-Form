import { addFormToStorage, getStoredData, formatNoteObject } from "./Save.mjs";
/**
 * This module is responsible for populating the saved tab.
 */

export default class SavedTab {
  constructor() {
    this.formsData = getStoredData();
  }

  renderList() {
    //console.log("Test");
    // loop through the forms to get every object inside.
    for (let i = this.formsData.forms.length - 1; i >= 0; i--) {
      let note = this.formsData.forms[i];
      let noteTitle = Object.keys(note)[0];
      let date = note[noteTitle].Date;
      let name = note[noteTitle]["Client-Name"];
      let printPretty = formatNoteObject(note);
      let title = noteTitle + " " + date + " " + name;
      //console.log(title);

      let ulElement = document.querySelector("ul.append-note");

      let liElement = document.createElement("li");
      liElement.innerHTML = `
            <div class="overlay-note" >
              <div class="note-title">
              <div>${title}</div>
                <button id="expand-modal-${noteTitle}" class = "expand-modal-btn">Show</button>
              </div>
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
      //console.log(liElement);
      ulElement.appendChild(liElement);
      // add event handlers
      // first select the note modal
      const modal = document.querySelector(`#${noteTitle}`);
      // select the button and add event listener.
      const expandBtn = document.querySelector(`#expand-modal-${noteTitle}`);
      // add event handler
      expandBtn.addEventListener("click", () => {
        // toggle the modal to have show.
        modal.classList.toggle("show");
        document.querySelector(".backdrop").classList.toggle("show");
      });
      // add close button
      const closeBtn = document.querySelector(`#close-modal-${noteTitle}`);
      closeBtn.addEventListener("click", () => {
        console.log("close btn pressed");
        modal.classList.toggle("show");
        document.querySelector(".backdrop").classList.toggle("show");
      });
    }
  }

  addModalHandlers(id) {
    let expandBtns = document.querySelectorAll("#expand-modal");
    expandBtns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        // we want to select the closest
        const modalDiv = document.modalDiv.classList.toggle("show");
        // add the event listener to close the modal.
        let closeNote = document.querySelector("#close-modal");
        closeNote.addEventListener("click", this.toggleModal);
      });
    });
  }

  toggleModal() {
    const modalDiv = document.querySelector("#note-modal");
    const backdrop = document.querySelector(".backdrop");
    modalDiv.classList.toggle("show");
    backdrop.classList.toggle("show");
  }
}

/**
 * We get the stored forms. Now we need to generate the list items with all of the information inside.
 */
