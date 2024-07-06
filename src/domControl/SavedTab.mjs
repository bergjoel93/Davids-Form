import { addFormToStorage, getStoredData, formatNoteObject } from "./Save.mjs";
/**
 * This module is responsible for populating the saved tab.
 */

export default class SavedTab {
  constructor() {
    this.formsData = getStoredData();
  }

  renderList() {
    console.log("Test");
    // loop through the forms to get every object inside.
    for (let i = this.formsData.forms.length - 1; i >= 0; i--) {
      console.log(i);
      let note = this.formsData.forms[i];
      let noteTitle = Object.keys(note)[0];
      let date = note[noteTitle].date;
      let name = note[noteTitle]["Client-Name"];
      let printPretty = formatNoteObject(note);
      let title = noteTitle + " " + date + name;

      let ulElement = document.createElement("ul");

      let liElement = document.createElement("li");
      liElement.innerHTML = `
            <div class="overlay-note">
              <div class="note-title">
              <div>${title}</div>
                <button id="expand-modal">Show</button>
              </div>
              <div id="note-modal" class="">
                <button id="close-modal">x</button>
                <label for="Note-0">Note-0</label>
                <textarea
                  class="note-print"
                  name="Note-0"
                  id="Note-0"
                  wrap="hard"
                >${printPretty}
                </textarea>
              </div>
            </div>
      `;
      ulElement.appendChild(liElement);
    }
  }
}

/**
 * We get the stored forms. Now we need to generate the list items with all of the information inside.
 */
