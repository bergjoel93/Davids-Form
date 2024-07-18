import "./styles/style.css";
import {
  addFormToStorage,
  getStoredData,
  formatNoteObject,
} from "./domControl/Save.mjs";
import { dataManager } from "./domControl/DataManager.mjs";
import SavedTab from "./domControl/SavedTab.mjs";

dataManager;

// let formData = getStoredData();
// let note = formData.forms[0];
// let noteTitle = Object.keys(note)[0];
// let date = note[noteTitle].Date;
// let name = note[noteTitle]["Client-Name"];
// //console.log(note);
// let title = noteTitle + " " + date + " " + name;
// //console.log(title);

// let printPretty = formatNoteObject(note);
let savedTab = new SavedTab();

savedTab.renderList();

/**
 * Create event handlers on the main-form-container only. Including the Notes.
 */

/**
 * Notes:
 * What if we removed the form tag. Then we added event handlers to all of the inputs that automatically updated an object for the section 1 stuff.
 * Then, when user clicks add transaction and adds one, it will generate a form that also implements all of the event listeners. This will then create a new data object with a unique ID.
 */
