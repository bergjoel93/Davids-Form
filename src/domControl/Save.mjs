function renderSaved() {
  const savedContainer = document.createElement("div");
  savedContainer.className = "saved-container";

  const objectsArray = getAllObjectsFromLocalStorage();

  objectsArray.forEach((obj) => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = `Client Name: ${obj["Client-Name"]} - Date: ${obj["Date"]}`;
    card.appendChild(title);

    const textArea = document.createElement("textarea");
    textArea.readOnly = true;
    textArea.value = JSON.stringify(obj, null, 2); // Pretty print the JSON object
    card.appendChild(textArea);

    savedContainer.appendChild(card);
  });

  document.body.appendChild(savedContainer);
  return savedContainer;
}

function getAllObjectsFromLocalStorage() {
  const objectsArray = [];

  // Iterate over all keys in local storage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    try {
      const parsedValue = JSON.parse(value);
      // Check if the value is an object (and not null)
      if (parsedValue && typeof parsedValue === "object") {
        objectsArray.push(parsedValue);
      }
    } catch (e) {
      // Handle JSON parsing error, if any
      console.error(`Error parsing value for key "${key}":`, e);
    }
  }

  return objectsArray;
}

function printObject(obj, indent = 0) {
  let result = "";
  const padding = " ".repeat(indent);

  if (typeof obj !== "object" || obj === null) {
    result += `${padding}${obj}\n`;
    return result;
  }

  if (Array.isArray(obj)) {
    result += `${padding}[\n`;
    obj.forEach((item) => {
      result += printObject(item, indent + 2);
    });
    result += `${padding}]\n`;
    return result;
  }

  result += `${padding}{\n`;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result += `${padding}  "${key}": `;
      result += printObject(obj[key], indent + 2);
    }
  }
  result += `${padding}}\n`;
  return result;
}

function saveToLocal(key, object) {
  // Convert the object to a JSON string
  const jsonString = JSON.stringify(object);
  // Save the JSON string to local storage
  localStorage.setItem(key, jsonString);
  console.log("Save to local storage");
}

function deleteFromLocal(key) {
  // Remove the item from local storage
  localStorage.removeItem(key);
}

export { renderSaved, saveToLocal, deleteFromLocal };
