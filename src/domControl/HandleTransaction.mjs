import { dataManager } from './DataManager.mjs';
import ActionComponents from '../components/actionComponents.mjs';
/**
 * This module is responsible for handling the different options
 */

function handleTransaction(card) {
  // handle close button is within AddTransaction. handleTransaction()
  const transactionType = formatType(card.id);
  const cardId = card.id;
  //console.log(transactionType);
  // select card on document
  const cardElement = document.querySelector(`#${cardId}`);
  //console.log(cardElement);
  switch (transactionType) {
    case 'Moving-Money':
      handleMovingMoney(cardElement, cardId);
      break;
    case 'Mutual-Fund-Trade':
      handleMutualFundTrade(cardElement, cardId);
      break;
    case 'Equity-Trade':
      handleEquityTrade(cardElement, cardId);
      break;
    case 'Options-Trade':
      handleOptionsTrade(cardElement, cardId);
      break;
    case 'Managed-Accounts':
      //handleManagedAccounts(cardElement, cardId);
      break;
    case 'Other':
      handleOther(cardElement, cardId);
      break;
    default:
      error.log('Invalid type of Transaction for handling.');
      break;
  }
}

// Create a universal function that will handle the individual cards input by making a new object and appending it to the data object.

function getCardData(cardId) {
  const card = document.querySelector(`#${cardId}`);
  const inputs = card.querySelectorAll('input, textarea, select');

  card.addEventListener('focusin', () => {
    card.classList.add('focused');
  });

  card.addEventListener('focusout', (event) => {
    if (!card.contains(event.relatedTarget)) {
      const data = {};

      inputs.forEach((input) => {
        if (input.type === 'checkbox') {
          data[input.name] = input.checked ? 'yes' : 'no';
        } else if (input.type === 'radio') {
          if (input.checked) {
            data[input.name] = input.value;
          }
        } else if (input.tagName.toLowerCase() === 'select') {
          data[input.name] = input.value;
        } else {
          data[input.name] = input.value;
        }
      });

      const cardData = {
        [card.querySelector('.transaction-title').value]: data,
      };

      // console.log('Collected Data', cardData);

      card.classList.remove('focused');
      dataManager.addTransaction(cardId, cardData);
      //console.log(dataManager.data);
    }
  });
}

function handleOther(cardElement, cardId) {
  const cardData = getCardData(cardElement, cardId);
  //console.log('Collected Data for Other:', cardData);
}

function handleOptionsTrade(cardElement, cardId) {
  // we need to handle the showing of reason text box for comission.
  // TODO You left off here! You need to handle what happens with the comission option select. If you select Waived then you show the reason text box.
  // Next, you need to handle the number of legs option container. It's still called 'action-container' so you can call that. Then add the action forms to it. build them in actionComonents.
  const actionComponents = new ActionComponents(cardId);
  const actionContainer = cardElement.querySelector('.action-container');
  const comission = cardElement.querySelector(`#${cardId}-comission`);
  const reasonTextBox = cardElement.querySelector(`#reason-text-box`);
  // select #oflegs
  const numLegs = cardElement.querySelector(`#${cardId}-num-of-legs`);

  comission.addEventListener('change', () => {
    let comissionValue = comission.value;
    if (comissionValue === 'waived') {
      reasonTextBox.style.display = 'grid';
    } else {
      reasonTextBox.style.display = 'none';
    }
    // get card data
    getCardData(cardId);
  });

  numLegs.addEventListener('change', () => {
    let numLegsValue = numLegs.value;
    if (numLegsValue === 'single-leg') {
      actionContainer.innerHTML = ``;
      actionContainer.insertAdjacentHTML(
        'beforeend',
        actionComponents.optionsSingleLeg()
      );
    } else if (numLegsValue === 'multi-leg') {
      actionContainer.innerHTML = ``;
      actionContainer.insertAdjacentHTML(
        'beforeend',
        actionComponents.optionsMultiLeg()
      );
    } else {
      actionContainer.innerHTML = ``;
    }
    // get card data
    getCardData(cardId);
  });

  // get card data
  getCardData(cardId);
}

function handleEquityTrade(cardElement, cardId) {
  const actionComponents = new ActionComponents(cardId);
  const actionContainer = cardElement.querySelector('.action-container');
  const action = cardElement.querySelector(`#${cardId}-action`);

  action.addEventListener('change', () => {
    let actionValue = action.value;
    //console.log(actionValue);

    if (actionValue === 'buy') {
      actionContainer.innerHTML = ``;
      actionContainer.insertAdjacentHTML(
        'beforeend',
        actionComponents.equityActionBuy()
      );
    } else if (actionValue === 'sell') {
      actionContainer.innerHTML = ``;
      actionContainer.insertAdjacentHTML(
        'beforeend',
        actionComponents.equityActionSell()
      );
    } else if (actionValue === 'buy-to-cover') {
      actionContainer.innerHTML = ``;
      actionContainer.insertAdjacentHTML(
        'beforeend',
        actionComponents.equityActionBuyToCover()
      );
    } else if (actionValue === 'sell-short') {
      actionContainer.innerHTML = ``;
      actionContainer.insertAdjacentHTML(
        'beforeend',
        actionComponents.equityActionSellShort()
      );
    }
    // get card data
    getCardData(cardId);
  });
  // get card data
  getCardData(cardId);
}

function handleMutualFundTrade(cardElement, cardId) {
  const actionComponents = new ActionComponents(cardId);
  const actionContainer = cardElement.querySelector('.action-container');
  const action = cardElement.querySelector(`#${cardId}-action`);

  action.addEventListener('change', () => {
    let actionValue = action.value;
    //console.log(actionValue);

    if (actionValue === 'buy') {
      actionContainer.innerHTML = ``;
      actionContainer.insertAdjacentHTML(
        'beforeend',
        actionComponents.actionBuy()
      );
    } else if (actionValue === 'sell') {
      actionContainer.innerHTML = ``;
      actionContainer.insertAdjacentHTML(
        'beforeend',
        actionComponents.actionSell()
      );
    } else if (actionValue === 'exchange') {
      actionContainer.innerHTML = ``;
      actionContainer.insertAdjacentHTML(
        'beforeend',
        actionComponents.actionExchange()
      );
    } else if (actionValue === 'sell-to-buy') {
      actionContainer.innerHTML = ``;
      actionContainer.insertAdjacentHTML(
        'beforeend',
        actionComponents.actionSellToBuy()
      );
    }
    // get card data
    getCardData(cardId);
  });
  // get card data
  getCardData(cardId);
}

/**
 * This Transaction card only has 3 different scenarios based on the Action field. If action is deposit then the difference is between a retirement and non-retirement account.
 * @param {*} cardElement
 * @param {*} cardId
 */
function handleMovingMoney(cardElement, cardId) {
  handleAction1(cardElement, cardId);
  // TODO Once the form is ready, add event handler to handle saving the data as an object to then append to data.
  // get card data
  getCardData(cardId);
}

function handleAction1(cardElement, cardId) {
  const actionComponents = new ActionComponents(cardId);
  const actionContainer = cardElement.querySelector('.action-container');
  const action1 = cardElement.querySelector(`#${cardId}-action`);
  const accountType = cardElement.querySelector(`#${cardId}-account-type`);

  accountType.addEventListener('change', () => {
    let actionValue = action1.value;
    let accountTypeValue = accountType.value;

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
    } else if (actionValue === 'journal') {
      if (accountTypeValue === 'retirement') {
        actionContainer.innerHTML = ``;
        actionContainer.insertAdjacentHTML(
          'beforeend',
          actionComponents.actionJournalRetirement()
        );
      } else if (accountTypeValue === 'non-retirement') {
        actionContainer.innerHTML = ``;
        actionContainer.insertAdjacentHTML(
          'beforeend',
          actionComponents.actionJournalNonRetirement()
        );
      }
    } else {
      actionContainer.innerHTML = ``;
    }
    // get card data
    getCardData(cardId);
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
