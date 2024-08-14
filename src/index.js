import './styles/style.css';

import { dataManager } from './domControl/DataManager.mjs';

import NoteGenerator from './domControl/GenerateNotes.mjs';

dataManager;

// handle the generateNotes for salesforce notes.
const noteGenerate = new NoteGenerator();
