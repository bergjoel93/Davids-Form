import { dataManager } from '../domControl/DataManager.mjs';
/**
 * This module contains all of the functions that make up the inner html individual form components for a transaction form. This makes organizing easier.
 */

export default class TransactionComponent {
  constructor(cardId) {
    this.cardId = cardId;
  }

  // includes title and close button.
  injectTitle() {
    return `
        <button class="close-card">X</button>
        <input class = "transaction-title" data-label="Transaction" value="${this.cardId}" data-branch = 'true'>`;
  }
  injectAccountNumber() {
    return `
      <div class="text-input-container">
        <label for="${this.cardId}-accountNum">Account #</label>
        <input
          type="text"
          id="${this.cardId}-accountNum"
          name="Account-Number"
          data-label="Acct"
        />
      </div>
    `;
  }
  injectAlertsAndRestrictions() {
    return `
      <div class="transaction-checkbox">
        <label for="${this.cardId}-alerts-and-restrictions"
          >Alerts and Restrictions?</label
        >
        <input
          type="checkbox"
          id="${this.cardId}-alerts-and-restrictions"
          name="Alerts-and-Restrictions"
        />
      </div>
    `;
  }
  injectAuthorizedToTrade() {
    return `
      <div class="transaction-checkbox">
        <label for="${this.cardId}-authorized-to-trade"
          >Authorized to Trade?</label
        >
        <input
          type="checkbox"
          id="${this.cardId}-authorized-to-trade"
          name="Authorized-to-Trade"
        />
      </div>
    `;
  }
  injectAutoInvestments() {
    return `
      <div class="option-container">
        <label for="${this.cardId}-auto-investments">Auto Investments or PWS plans?</label>
        <select id="${this.cardId}-auto-investments" name="Auto-Investments" data-label="PWS plan(s)">
            <option value="none">Select Option:</option>
            <option value="adjusted">Adjusted</option>
            <option value="Discussed - no changes">
            Discussed, no changes.
            </option>
            <option value="NA">NA</option>
        </select>
      </div>
    `;
  }

  injectOrders() {
    return `
    <div class="transaction-checkbox">
      <label for="${this.cardId}-orders-openend-or-cancelled">
        Orders, opened or cancelled?
      </label>
      <input
        type="checkbox"
        id="${this.cardId}-orders-openend-or-cancelled"
        name="orders-openend-or-cancelled"
        value="yes"
      />
    </div>`;
  }

  /**
   * For Option Trade
   */
  injectCommission() {
    return `  
    <div class = "option-container">
      <label for="${this.cardId}-commission">Commission:</label>
      <select id="${this.cardId}-commission" name="commission" data-label = "Commission">
          <option value="none">Select Option:</option>
          <option value="waived">Waived</option>
          <option value="discussed">Discussed</option>
      </select>
    </div>
    <div id = "${this.cardId}-reason-text-box" class = "text-input-container" style = "display: none">
      <label for = "${this.cardId}-commission-reason" >Reason:</label>
      <input type = "text" id = "${this.cardId}-commission-reason" name = "commission-reason" data-label="Reason:">
    </div>
  `;
  }

  injectNumOfLegs() {
    return `
    <div class="option-container">
      <label for="${this.cardId}-num-of-legs">
        # of Legs:
      </label>
      <select
        id="${this.cardId}-num-of-legs"
        name="num-of-legs"
      >
        <option value="null">Select Option:</option>
        <option value="single-leg">Single-Leg</option>
        <option value="multi-leg">Multi-Leg</option>
      </select>
    </div>
    <div class = "action-container"></div>
    `;
  }

  /**
   * For Equity Trade
   */
  injectAction3() {
    return `  
    <div class = "option-container">
    <label for="${this.cardId}-action"  >Action:</label>
    <select id="${this.cardId}-action" name="Action" data-label = "Action">
        <option value="none">Select Option:</option>
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
        <option value="buy-to-cover">Buy To Cover</option>
        <option value="sell-short">Sell Short</option>
    </select>
    </div>

    <div class = "action-container"></div>
  `;
  }

  /**
   * For Mutual Fund Trade
   */
  injectAction2() {
    return `  
    <div class = "option-container">
    <label for="${this.cardId}-action">Action:</label>
    <select id="${this.cardId}-action" name="Action" data-label = "Action">
        <option value="none">Select Option:</option>
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
        <option value="exchange">Exchange</option>
        <option value="sell-to-buy">Sell to Buy</option>
    </select>
    </div>

    <div class = "action-container"></div>
  `;
  }

  /**
   * Contains "deposit", "withdrawal", and "journal"
   * @param {*} this.cardId
   * @returns
   */
  injectAction1() {
    return `  
      <div class = "option-container">
      <label for="${this.cardId}-action">Action:</label>
      <select id="${this.cardId}-action" name="Action" data-label = "Action">
          <option value="none">Select Option:</option>
          <option value="deposit">Deposit</option>
          <option value="withdrawal">Withdrawal</option>
          <option value="journal">Journal</option>
      </select>
      </div>
      <div class="option-container">
          <label for="${this.cardId}-account-type">Account Type</label>
          <select name="Account-Type" id="${this.cardId}-account-type" data-label="Account Type">
            <option value="none">Select Option:</option>
            <option value="retirement">Retirement</option>
            <option value="non-retirement">Non Retirement</option>
          </select>
        </div>

      <div class = "action-container"></div>
    `;
  }

  injectNotes() {
    return `
    <div class="notes-container">
      <div class="notes">
        <textarea name="notes" id="${this.cardId}-notes" placeholder="Notes..."></textarea>
      </div>
    </div>`;
  }
}
// const transactionComponent = new TransactionComponent();
// export { transactionComponent };
