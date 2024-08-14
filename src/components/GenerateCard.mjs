import TransactionComponent from './TransactionComponents.mjs';
/**
 *
 * @param {*} cardId The title which is just the choice + the count in this format "Moving-Money-0"
 * @returns The card html element with the id being the title.
 */

export default class GenerateCard {
  constructor(cardId, choice) {
    this.cardId = cardId;
    this.choice = choice;
    this.transactionComponent = new TransactionComponent(this.cardId);
  }
  generate() {
    const card = document.createElement('div');
    card.className = 'transaction-card';
    card.id = `${this.cardId}`;
    let content = ``;

    switch (this.choice) {
      case 'Moving-Money':
        content += this.injectMovingMoney();
        break;
      case 'Mutual-Fund-Trade':
        content += this.injectMutualFundTrade();
        break;
      case 'Equity-Trade':
        content += this.injectEquityTrade();
        break;
      case 'Options-Trade':
        content += this.injectOptionsTrade();
        break;
      case 'Managed-Accounts':
        content += injectManagedAccount();
        break;
      case 'Other':
        content += this.injectOther();
        break;
      default:
        break;
    }
    card.innerHTML = content;
    return card;
  }

  injectMovingMoney() {
    const html =
      this.transactionComponent.injectTitle(this.cardId) +
      `<div class = "secondary-card-container">` +
      this.transactionComponent.injectAccountNumber(this.cardId) +
      this.transactionComponent.injectAlertsAndRestrictions(this.cardId) +
      this.transactionComponent.injectAuthorizedToTrade(this.cardId) +
      this.transactionComponent.injectAutoInvestments(this.cardId) +
      this.transactionComponent.injectAction1(this.cardId) +
      `</div>`;
    return html;
  }

  injectMutualFundTrade() {
    const html =
      this.transactionComponent.injectTitle(this.cardId) +
      `<div class = "secondary-card-container">` +
      this.transactionComponent.injectAccountNumber(this.cardId) +
      this.transactionComponent.injectAlertsAndRestrictions(this.cardId) +
      this.transactionComponent.injectAuthorizedToTrade(this.cardId) +
      this.transactionComponent.injectOrders() +
      this.transactionComponent.injectAutoInvestments(this.cardId) +
      this.transactionComponent.injectAction2(this.cardId) +
      `</div>`;
    return html;
  }

  injectEquityTrade() {
    const html =
      this.transactionComponent.injectTitle(this.card) +
      `<div class = "secondary-card-container">` +
      this.transactionComponent.injectAccountNumber(this.cardId) +
      this.transactionComponent.injectAuthorizedToTrade(this.cardId) +
      this.transactionComponent.injectOrders() +
      this.transactionComponent.injectAutoInvestments(this.cardId) +
      this.transactionComponent.injectComission() +
      this.transactionComponent.injectAction3(this.cardId) +
      `</div>`;
    return html;
  }

  injectOptionsTrade() {
    const html =
      this.transactionComponent.injectTitle(this.card) +
      `<div class = "secondary-card-container">` +
      this.transactionComponent.injectAccountNumber(this.cardId) +
      this.transactionComponent.injectAuthorizedToTrade(this.cardId) +
      this.transactionComponent.injectOrders() +
      this.transactionComponent.injectAutoInvestments(this.cardId) +
      this.transactionComponent.injectComission() +
      this.transactionComponent.injectNumOfLegs() +
      `</div>`;
    return html;
  }

  injectOther() {
    const html =
      this.transactionComponent.injectTitle(this.card) +
      `<div class = "secondary-card-container">` +
      this.transactionComponent.injectAccountNumber(this.cardId) +
      this.transactionComponent.injectAlertsAndRestrictions(this.cardId) +
      this.transactionComponent.injectAuthorizedToTrade(this.cardId) +
      this.transactionComponent.injectNotes(this.cardId) +
      `</div>`;
    return html;
  }
}

function injectManagedAccount() {
  return `

            <button class="close-card">X</button>
            <h3>Managed Accounts</h3>
            <label for="accountNum2">Account #</label>
            <input type="text" id="accountNum2" name="Account-Number" />

            <div class="radio-box">
              <label for="alerts-and-restrictions"
                >Alerts and Restrictions?</label
              >
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="alerts-and-restrictions-yes" name = "Alerts-And-Restrictions" value="yes" />
                  <label for="alerts-and-restrictions-yes">Yes</label>
                </div>
                <div class="radio">
                  <input type="radio" id="alerts-and-restrictions-no" />
                  <label for="alerts-and-restrictions-no">No</label>
                </div>
              </div>
            </div>

            <div class="radio-box">
              <label for="authorized-to-trade">Authorized to Trade?</label>
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="authorized-to-trade-yes" name = "Authorized-To-Trade" value="yes"/>
                  <label for="authorized-to-trade-yes">Yes</label>
                </div>
                <div class="radio">
                  <input type="radio" id="authorized-to-trade-no" name = "Authorized-To-Trade" value="no"/>
                  <label for="authorized-to-trade-no">No</label>
                </div>
              </div>
            </div>

            <div class="radio-box">
              <label for="product">Product</label>
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="SMA" name = "Product" value="SMA"/>
                  <label for="SMA">SMA</label>
                </div>
                <div class="radio">
                  <input type="radio" id="FidelityGo" name = "Product" value = "FidelityGo"/>
                  <label for="FidelityGo">FidelityGo</label>
                </div>
              </div>
            </div>

            <div class="radio-box">
              <label for="DNT">DNT</label>
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="DNT-yes" name="DNT" value = "Yes" />
                  <label for="DNT-yes">Yes</label>
                </div>
                <div class="radio">
                  <input type="radio" id="DNT-no" name = "DNT" value = "Yes"/>
                  <label for="DNT-no">No</label>
                </div>
              </div>
            </div>

            <div class="option-container">
              <label for="auto-investments"
                >Auto Investments or PWS plans? NOT Proportional</label
              >
              <select id="auto-investments" name="auto-investments">
                <option value="null">Select Option:</option>
                <option value="adjusted">Adjusted</option>
                <option value="discussed-no-changes">
                  Discussed, no changes.
                </option>
                <option value="na">NA</option>
              </select>

              <label for="action">Action:</label>
              <select id="action" name="action">
                <option value="null">Select Option:</option>
                <option value="fund">Fund</option>
                <option value="withdrawl">WithDrawl</option>
                <option value="journal">Journal</option>
              </select>
            </div>`;
}

function injectOther() {
  return `

          <button class="close-card">X</button>
          <h3>Other</h3>
          <label for="accountNum2">Account #</label>
          <input type="text" id="accountNum2" name="Account-Number" />

    `;
}

function formatString(input) {
  return input.split('-').join(' ');
}
