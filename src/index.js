import "./styles/style.css";
import AddTransaction from "./domControl/AddTransaction.mjs";
import { dataMangager } from "./domControl/DataManager.mjs";

const handle = new AddTransaction();
handle.generateAddTransactionButtons();

dataMangager;

/**
 * Create event handlers on the main-form-container only. Including the Notes.
 */

/**
 * Notes:
 * What if we removed the form tag. Then we added event handlers to all of the inputs that automatically updated an object for the section 1 stuff.
 * Then, when user clicks add transaction and adds one, it will generate a form that also implements all of the event listeners. This will then create a new data object with a unique ID.
 */
