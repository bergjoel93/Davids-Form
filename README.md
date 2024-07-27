# webpack-starter

Frontend environment for building JavaScript applications.

## things left to do

- style the Saved tab better. Add buttons, make the UI better by having a clickable button title that will produce a popup modal with a text area inside. Then make it so if you click outside it will close.

- change the local storage so that it's an array and not individual objects being saved to local.

- make it print the object prettier. Make it print it as a list.

- add a delete button so that the data objects can be deleted.

- make everything on the form UI smaller.

- Add the persisten notes. this will be a new object that is saved to local storage separtely.

## Things left to do.

Get the list item generator working.
You have some consle .log that show it counting the i's but it seems like there's an issue with accessing the objects data.

## Things to do 7/7/24

- Gandy will give list of all of field inputs for each transaction type.
- Pressing save button will reset the form.
- Redesign
- SF - sales force
- Change COTM to checkbox.
- Make generate button under Notes textArea where user can click 'Generate' and it will print particular fields of the current form object and transaction objects.
- Saved Tab will show everything in a table.
- table column headers will include all fields from main section.
- Change each field into an injectable component on the transaction form.

## RoadMap

1. Form data is collected from local storage.
2. dataManager is called, but instantiated in DataManager.mjs.
3. Function in dataManager handleMain() is called. Adds event handlers to all main form stuff. Also handles Form and Saved Tab.
4. current date is initialized.
5. data is is initialized. This is a new form data object.
6. addTransactions is instaniated in AddTransactions but called in constructor of dataManager.
7. addTransactions.handleAddTransactionButton() is called. This function handles the the addTransaction button. When clicked, it shows the transaction type buttons.
8. addTransactions initializes all of the options (object)

------- ## next stage

1. When add transaction button is clicked, the transaction buttons are generated.
2. Then within the last function, handleTransactionButtons() is called which adds event handlers to all the transaction type buttons.
3. When a transaction button is clicked, a transaction container is created. The button choice is recorded, the count for that choice in the options object is increased (for keeping track of transactions), and then the title and card is generated. The buttons container is emptied.
4. Then the transaction object name is generated with the name and count.
5. Then the transaction object is added to the data object.
6. This is the part I might need to alter. Within handleTransactionButtons, after the form is created, event handlers are placed on all of the inputs.
   \*\* a better way to do this might be to generate a transaction card, then immediately add the event handlers to that specific card. Maybe i create a function that accepts the transaction name (choice variable) and then handles it accordingly?

How do we handle Moving Money?
So we could have a function called handleMovingMoney. Let's work on that...

This is turning out to be really complicated... Adding the event listener to each input is very tedious and taking literally forever.

Therefore, i'm thinking up a new strategy. The strategy is, to have some kind of focus button or a save button on each transaction form. The user will have to click save on each one. Once save is clicked, it builds an object for the transaction form, and then that object is appended to the Transactions spot in the main data object.
We can place a check for save check on the main save button. That way, if the user forgets to click save, maybe the program can highlight which ones were'nt saved.

I guess the hard part will be knowing where to branch the object.
Or maybe I can build the object based on focus. If the transaction container is in focus, then an event lister will listen for when the box goes out of focus. This will construct the object and then apply it.

So how do we do this?

Well, we'll start by making the transaction forms first. Then we'll add an event listener to listern for when the user focuses, then we'll add an event listener insdie of that one to wait for unfocus. When unfocus happens, then we'll scan all the inputs, checkboxes, and radio buttons to gather the data as one single object called cardId. Good plan.

Fix ordering for the Transaction title (if one is deleted in the middle it starts from length of array.)

TODO when you close out a transaction card you need to delete that object from the data object.

The transaction card is named due to the current count. Therefore, before the count is made and is used to name the card, create a check that looks to see what the latest count was, and use that.

We got the generate notes button working. Now we need to change the saved tab.
Do the following:
When you click the "Saved" Tab, re render the stuff.
Instead of rendering a list, make it a nice and neat table inside a table container that has a y-scroll. Include most of the information in the demographics section. Also, in Form tab, when you press save, it should reset everything!
