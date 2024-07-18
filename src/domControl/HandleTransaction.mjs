import { dataManager } from './DataManager.mjs';
import ActionComponents from '../components/actionComponents.mjs';
/**
 * This module is responsible for handling the different options
 */

function handleTransaction(card) {
  // handle close button is within AddTransaction. handleTransaction()
  const transactionType = formatType(card.id);
  const cardId = card.id;
  console.log(transactionType);
  // select card on document
  const cardElement = document.querySelector(`#${cardId}`);
  //console.log(cardElement);
  switch (transactionType) {
    case 'Moving-Money':
      handleMovingMoney(cardElement, cardId);
      break;
    case 'Mutual-Fund-Trade':
      break;
    case 'Equity-Trade':
      break;
    case 'Options-Trade':
      break;
    case 'Managed-Accounts':
      break;
    case 'Other':
      break;
    default:
      error.log('Invalid type of Transaction for handling.');
      break;
  }
}
/**
 * This Transaction card only has 3 different scenarios based on the Action field. If action is deposit then the difference is between a retirement and non-retirement account.
 * @param {*} cardElement
 * @param {*} cardId
 */
function handleMovingMoney(cardElement, cardId) {
  // add event handlers to all of the fields.
  // handle fields
  handleAccountNumber(cardElement, cardId);
  handleAlertsAndRestrictions(cardElement, cardId);
  handleAuthorizedToTrade(cardElement, cardId);
  handleAutoInvestments(cardElement, cardId);
  handleAction1(cardElement, cardId);
}

function handleAction1(cardElement, cardId) {
  const actionComponents = new ActionComponents(cardId);
  const actionContainer = cardElement.querySelector('.action-container');
  const action1 = cardElement.querySelector(`#${cardId}-action`);
  const accountType = cardElement.querySelector(`#${cardId}-account-type`);

  accountType.addEventListener('change', () => {
    let actionValue = action1.value;
    let accountTypeValue = accountType.value;
    console.log(actionValue);
    console.log(accountTypeValue);
    // If user selects Deposit on Action 1
    if (actionValue === 'deposit') {
      actionContainer.innerHTML = ``;
      if (accountTypeValue === 'retirement') {
        actionContainer.insertAdjacentHTML(
          'beforeend',
          actionComponents.actionDepositRetirement()
        );
      } else if (accountTypeValue === 'non-retirement') {
        actionContainer.insertAdjacentHTML(
          'beforeend',
          actionComponents.actionDepositNonRetirement()
        );
      } else {
        actionContainer.innerHTML = ``;
      }
    } else if (actionValue === 'withdrawal') {
      actionContainer.innerHTML = ``;
      if (accountTypeValue === 'retirement') {
        actionContainer.insertAdjacentHTML(
          'beforeend',
          actionComponents.actionWithdrawlRetirement()
        );
      } else if (accountTypeValue === 'non-retirement') {
        actionContainer.insertAdjacentHTML(
          'beforeend',
          actionComponents.actionWithdrawlNonRetirement()
        );
      }
    } else {
      actionContainer.innerHTML = ``;
    }
  });
}

function handleAutoInvestments(cardElement, cardId) {
  const autoInvestments = cardElement.querySelector(
    `#${cardId}-auto-investments`
  );
  let key = autoInvestments.name;
  dataManager.data.Transactions[cardId][key] = ``;
  autoInvestments.addEventListener('change', () => {
    let value = autoInvestments.value;
    dataManager.data.Transactions[cardId][key] = value;
    console.log(dataManager.data);
  });
}

function handleAuthorizedToTrade(cardElement, cardId) {
  const authorizedToTrade = cardElement.querySelector(
    `#${cardId}-authorized-to-trade`
  );
  let key = authorizedToTrade.name; // create key
  dataManager.data.Transactions[cardId][key] = 'No'; // by default add object to data.
  authorizedToTrade.addEventListener('change', (e) => {
    if (e.target.checked) {
      dataManager.data.Transactions[cardId][key] = 'Yes';
    } else {
      //console.log("checkbox is unchecked");
      dataManager.data.Transactions[cardId][key] = 'No';
    }
    console.log(dataManager.data);
  });
}

function handleAlertsAndRestrictions(cardElement, cardId) {
  const alertsAndRestrictions = cardElement.querySelector(
    `#${cardId}-alerts-and-restrictions`
  );
  let key = alertsAndRestrictions.name; // create key
  dataManager.data.Transactions[cardId][key] = 'No'; // by default add object to data.
  alertsAndRestrictions.addEventListener('change', (e) => {
    if (e.target.checked) {
      //console.log("checkbox is checked.");
      dataManager.data.Transactions[cardId][key] = 'Yes';
    } else {
      //console.log("checkbox is unchecked");
      dataManager.data.Transactions[cardId][key] = 'No';
    }
  });
}

function handleAccountNumber(cardElement, cardId) {
  const accountNum = cardElement.querySelector(`#${cardId}-accountNum`);
  // update the object that will be updated to the data object.
  // get the object key
  let key = accountNum.name;
  dataManager.data.Transactions[cardId][key] = ``;
  accountNum.addEventListener('input', () => {
    // get the object value
    let value = accountNum.value;
    // update the object.
    dataManager.data.Transactions[cardId][key] = value;
  });
}

/**
 *
 * @param {String} input
 * @returns Formatted type without the end "-[number]"
 */
function formatType(input) {
  // Use a regular expression to match and remove the dash followed by one or more digits at the end of the string
  return input.replace(/-\d+$/, '');
}

export { handleTransaction };
