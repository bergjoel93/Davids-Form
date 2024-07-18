/**
 * This module contains all of the functions that make up the inner html individual form components for a transaction form. This makes organizing easier.
 */

class TransactionComponent {
  constructor() {}
  // includes title and close button.
  injectTitle(cardId) {
    return `
        <button class="close-card">X</button>
        <input class = "transaction-title" data-label="Transaction" value="${cardId}">`;
  }
  injectAccountNumber(cardId) {
    return `
      <div class="text-input-container">
        <label for="${cardId}-accountNum">Account #</label>
        <input
          type="text"
          id="${cardId}-accountNum"
          name="Account-Number"
          data-label="Acct:"
        />
      </div>
    `;
  }
  injectAlertsAndRestrictions(cardId) {
    return `
      <div class="transaction-checkbox">
        <label for="${cardId}-alerts-and-restrictions"
          >Alerts and Restrictions?</label
        >
        <input
          type="checkbox"
          id="${cardId}-alerts-and-restrictions"
          name="Alerts-and-Restrictions"
        />
      </div>
    `;
  }
  injectAuthorizedToTrade(cardId) {
    return `
      <div class="transaction-checkbox">
        <label for="${cardId}-authorized-to-trade"
          >Authorized to Trade?</label
        >
        <input
          type="checkbox"
          id="${cardId}-authorized-to-trade"
          name="Authorized-to-Trade"
        />
      </div>
    `;
  }
  injectAutoInvestments(cardId) {
    return `
      <div class="option-container">
        <label for="${cardId}-auto-investments">Auto Investments or PWS planse?</label>
        <select id="${cardId}-auto-investments" name="Auto-Investments" data-label="PWS plan(s):">
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
  /**
   * Contains "deposit", "withdrawal", and "journal"
   * @param {*} cardId
   * @returns
   */
  injectAction1(cardId) {
    return `  
      <div class = "option-container">
      <label for="${cardId}-action" data-label="Action:" >Action:</label>
      <select id="${cardId}-action" name="Action" data-label = "Action">
          <option value="null">Select Option:</option>
          <option value="deposit">Deposit</option>
          <option value="withdrawal">Withdrawal</option>
          <option value="journal">Journal</option>
      </select>
      </div>
      <div class="option-container">
          <label for="${cardId}-account-type">Account Type</label>
          <select name="Account-Type" id="${cardId}-account-type">
            <option value="null">Select Option:</option>
            <option value="retirement">Retirement</option>
            <option value="non-retirement">Non Retirement</option>
          </select>
        </div>

      <div class = "action-container"></div>
    `;
  }
}
const transactionComponent = new TransactionComponent();
export { transactionComponent };
