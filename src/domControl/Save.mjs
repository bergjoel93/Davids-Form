/**
 * 1. Retrieve the current data from local storage
 * 2. parse the tretrieved data into a JS object.
 * 3. Generate a new objec with a unique ID
 * 4. Add the new object to the array.
 * 5. Save the updated array back to local storage.
 */

/**
 * Returns an object called 'forms' that contains all of the saved form data as an array of objects.
 */
function getStoredData() {
  let storedData = localStorage.getItem('F-Form-Gandy');
  if (storedData) {
    return JSON.parse(storedData);
  } else {
    return { forms: [] }; // Initialize an empty array if no data is found.
  }
}

/**
 * Returns a new Id that will be the length of the array.
 */
function generateUniqueID(forms) {
  return forms.length;
}

function addFormToStorage(newFormData) {
  let storedData = getStoredData();
  let newID = generateUniqueID(storedData.forms);
  let newFormObject = {};
  newFormObject[`Note-${newID}`] = newFormData;
  storedData.forms.push(newFormObject);
  // save the updated array back to local storage
  localStorage.setItem('F-Form-Gandy', JSON.stringify(storedData));
}

function formatNoteObject(noteObject) {
  let formattedString = '';

  for (let noteKey in noteObject) {
    if (noteObject.hasOwnProperty(noteKey)) {
      let note = noteObject[noteKey];
      formattedString += `${noteKey}\n--------------------------------\n`;

      for (let key in note) {
        if (note.hasOwnProperty(key)) {
          if (key === 'Verification' || key === 'Interaction-Model') {
            formattedString += `${key}: ${note[key].join(', ')}\n`;
          } else if (key === 'Transactions') {
            formattedString +=
              '\nTransactions\n--------------------------------\n';
            for (let transactionKey in note[key]) {
              if (note[key].hasOwnProperty(transactionKey)) {
                let transaction = note[key][transactionKey];
                formattedString += `* ${transactionKey}:\n`;
                // Handling the nested object within the transaction
                let innerTransaction = transaction[transactionKey];
                for (let tKey in innerTransaction) {
                  if (innerTransaction.hasOwnProperty(tKey)) {
                    formattedString += `       ${tKey}: ${innerTransaction[tKey]}\n`;
                  }
                }
                formattedString += '\n';
              }
            }
          } else {
            formattedString += `${key}: ${
              note[key] !== null ? note[key] : ''
            }\n`;
          }
        }
      }

      formattedString += '\n';
    }
  }

  return formattedString;
}

export { addFormToStorage, getStoredData, formatNoteObject };
