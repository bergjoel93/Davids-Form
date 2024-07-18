/**
 * This file contains the injections for Action items.
 */

// Action 1 items.

export default class ActionComponents {
  constructor(cardId) {
    this.cardId = cardId;
  }

  actionDepositRetirement() {
    const string =
      this.injectAmount() +
      this.injectFromWhere() +
      this.injectContributionYear() +
      this.injectICP() +
      this.injectReviewTransaction() +
      this.injectEnterSFNotes();
    return string;
  }

  actionDepositNonRetirement() {
    const string =
      this.injectAmount() +
      this.injectFromWhere() +
      this.injectICP() +
      this.injectReviewTransaction() +
      this.injectEnterSFNotes();
    return string;
  }

  actionWithdrawlRetirement() {
    const string =
      this.injectAmount() +
      this.injectTaxWitholding() +
      this.injectToWhere() +
      this.injectICP() +
      this.injectReviewTransaction() +
      this.injectEnterSFNotes();
    return string;
  }

  actionWithdrawlNonRetirement() {
    const string =
      this.injectAmount() +
      this.injectToWhere() +
      this.injectICP() +
      this.injectReviewTransaction() +
      this.injectEnterSFNotes();
    return string;
  }

  injectToWhere() {
    return `
    <div class="text-input-container">
      <label for="${this.cardId}-to-where">To Where:</label>
      <input
        type="text"
        id="${this.cardId}-to-where"
        name="To-Where"
        data-label="From where:"
      />
    </div>`;
  }

  injectTaxWitholding() {
    return `    
    <div class="tax-witholding-container">
      <h5>Tax Withholding</h5>
      <div class="text-input-container three">
        <label for="${this.cardId}-tax-witholding-fed">Federal:</label>
        <input type="number" id="${this.cardId}-tax-witholding-fed" />
        <label for="${this.cardId}-tax-witholding-fed">%</label>
      </div>
      <div class="text-input-container three">
        <label for="${this.cardId}-tax-witholding-state">State:</label>
        <input type="number" id="${this.cardId}-tax-witholding-state" />
        <label for="${this.cardId}-tax-witholding-state">%</label>
      </div>
      <div class="transaction-checkbox">
        <label for="${this.cardId}-gross-up">Grossed Up</label>
        <input
          type="checkbox"
          id="${this.cardId}-gross-up"
          name="grossed-up"
          data-label="Grossed up"
        />
      </div>
    </div>`;
  }

  injectAccountType() {
    return `
        <div class="option-container">
          <label for="${this.cardId}-account-type">Account Type</label>
          <select name="Account-Type" id="${this.cardId}-account-type">
            <option value="null">Select Option:</option>
            <option value="retirement">Retirement</option>
            <option value="non-retirement">Non Retirement</option>
          </select>
        </div>`;
  }

  injectAmount() {
    return `
              <div class="text-input-container">
                  <label for="${this.cardId}-amount">Amount:</label>
                  <input
                  type="text"
                  id="${this.cardId}-amount"
                  name="Amount"
                  data-label="Amount:"
                  />
              </div>
          `;
  }

  injectFromWhere() {
    return `
        <div class="text-input-container">
          <label for="${this.cardId}-from-where">From Where:</label>
          <input
            type="text"
            id="${this.cardId}-from-where"
            name="From-Where"
            data-label="From where:"
          />
        </div>`;
  }

  injectContributionYear() {
    return `
        <div class = "contribution-container" id="${this.cardId}-contribution-container">
          <div class="radio-container">
            <div class="radio-title">Contribution Year:</div>
            <div class="radios">
              <div class="radio">
                <label for="${this.cardId}-contribution-CYC">CYC</label>
                <input
                  type="radio"
                  id="${this.cardId}-contribution-CYC"
                  name="contribution-year"
                  value="CYC"
                />
              </div>
              <div class="radio">
                <label for="${this.cardId}-contribution-PYC">PYC</label>
                <input
                  type="radio"
                  id="${this.cardId}-contribution-PYC"
                  name="contribution-year"
                  value="PYC"
                />
              </div>
            </div>
          </div>
        </div>`;
  }

  injectICP() {
    return `
        <div class="text-input-container">
          <label for="${this.cardId}-ICP-Work-Order">ICP/Work Order#:</label>
          <input
            type="text"
            id="${this.cardId}-ICP-Work-Order"
            name="ICP-Work-Order"
            data-label="ICP/Work Order #:"
          />
        </div>`;
  }

  injectReviewTransaction() {
    return `
        <div class="transaction-checkbox">
          <label for="${this.cardId}-Review-Transaction">Review Transaction?</label>
          <input
            type="checkbox"
            id="${this.cardId}-Review-Transaction"
            name="Review-transaction"
          />
        </div>`;
  }

  injectEnterSFNotes() {
    return `
        <div class="transaction-checkbox">
          <label for="${this.cardId}-Enter-Salesforce-Notes">
            Enter Salesforce Notes?
          </label>
          <input
            type="checkbox"
            id="${this.cardId}-Enter-Salesforce-Notes"
            name="Enter-Salesforce-Notes"
          />
        </div>`;
  }
}
