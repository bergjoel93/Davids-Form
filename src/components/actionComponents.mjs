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
      this.injectCheckBalances() +
      this.injectICP() +
      this.injectReviewTransaction() +
      this.injectEnterSFNotes();
    return string;
  }

  actionWithdrawlNonRetirement() {
    const string =
      this.injectAmount() +
      this.injectToWhere() +
      this.injectCheckBalances() +
      this.injectICP() +
      this.injectReviewTransaction() +
      this.injectEnterSFNotes();
    return string;
  }

  actionJournalRetirement() {
    const string =
      this.injectAmount() +
      this.injectFromWhere() +
      this.injectCashInKind() +
      this.injectTaxWitholding() +
      this.injectContributionYear() +
      this.injectToWhere() +
      this.injectCheckBalances() +
      this.injectLikeUnlikeRegistrations() +
      this.injectICP() +
      this.injectReviewTransaction() +
      this.injectEnterSFNotes();
    return string;
  }

  actionJournalNonRetirement() {
    const string =
      this.injectAmount() +
      this.injectFromWhere() +
      this.injectCashInKind() +
      this.injectToWhere() +
      this.injectCheckBalances() +
      this.injectLikeUnlikeRegistrations() +
      this.injectICP() +
      this.injectReviewTransaction() +
      this.injectEnterSFNotes();
    return string;
  }

  actionBuy() {
    const string =
      this.injectAmount() +
      this.injectDollarsShares() +
      this.injectSymbol() +
      this.injectSolicitedUnsolicited() +
      this.injectCheckBalances() +
      this.injectProvideQuote() +
      this.injectSettlementDays() +
      this.injectRestrictions() +
      this.injectMinimums() +
      this.injectNonFidelityFunds() +
      this.injectOver2Mil() +
      this.injectEnterOrderInRWOE() +
      this.injectCheckOrderReview() +
      this.injectUpdateOrderLog() +
      this.injectEnterSFNotes();
    return string;
  }

  actionSell() {
    const string =
      this.injectAmount() +
      this.injectDollarsShares() +
      this.injectSymbol() +
      this.injectSolicitedUnsolicited() +
      this.injectCheckBalances() +
      this.injectProvideQuote() +
      this.injectSettlementDays() +
      this.injectShortTermRedemption() +
      this.injectRestrictions() +
      this.injectNonFidelityFunds() +
      this.injectEnterOrderInRWOE() +
      this.injectCheckOrderReview() +
      this.injectUpdateOrderLog() +
      this.injectEnterSFNotes();
    return string;
  }

  actionExchange() {
    const string =
      this.injectAmount() +
      this.injectDollarsShares() +
      this.injectFromSymbol() +
      this.injectToSymbol() +
      this.injectSolicitedUnsolicited() +
      this.injectProvideQuote() +
      this.injectSettlementDays() +
      this.injectShortTermRedemption() +
      this.injectRestrictions() +
      this.injectMinimums() +
      this.injectNonFidelityFunds() +
      this.injectOver2Mil() +
      this.injectEnterOrderInRWOE() +
      this.injectCheckOrderReview() +
      this.injectUpdateOrderLog() +
      this.injectEnterSFNotes();
    return string;
  }

  actionSellToBuy() {
    const string =
      this.injectAmount() +
      this.injectDollarsShares() +
      this.injectFromSymbol() +
      this.injectToSymbol() +
      this.injectSolicitedUnsolicited() +
      this.injectProvideQuote() +
      this.injectSettlementDays() +
      this.injectShortTermRedemption() +
      this.injectRestrictions() +
      this.injectMinimums() +
      this.injectNonFidelityFunds() +
      this.injectOver2Mil() +
      this.injectEnterOrderInRWOE() +
      this.injectCheckOrderReview() +
      this.injectUpdateOrderLog() +
      this.injectEnterSFNotes();
    return string;
  }

  equityActionBuy() {
    const string =
      this.injectAmount() +
      this.injectDollarsShares() +
      this.injectFractionalShares() +
      this.injectSymbol() +
      this.injectOrderType() +
      this.injectLimitPrice() +
      this.injectStopPrice() +
      this.injectTimeInForce() +
      this.injectCheckBalances() +
      this.injectProvideQuote() +
      this.injectOver2Mil() +
      this.injectEnterOrderInRWOE() +
      this.injectCheckOrderReview() +
      this.injectUpdateOrderLog() +
      this.injectEnterSFNotes();
    return string;
  }

  equityActionSell() {
    const string =
      this.injectAmount() +
      this.injectDollarsShares() +
      this.injectFractionalShares() +
      this.injectSymbol() +
      this.injectOrderType() +
      this.injectLimitPrice() +
      this.injectStopPrice() +
      this.injectTimeInForce() +
      this.injectProvideQuote() +
      this.injectDIAPenny() +
      this.injectEnterOrderInRWOE() +
      this.injectCheckOrderReview() +
      this.injectUpdateOrderLog() +
      this.injectEnterSFNotes();
    return string;
  }

  equityActionBuyToCover() {
    const string =
      this.injectAmount() +
      this.injectDollarsShares() +
      this.injectFractionalShares() +
      this.injectSymbol() +
      this.injectOrderType() +
      this.injectLimitPrice() +
      this.injectStopPrice() +
      this.injectTimeInForce() +
      this.injectCheckBalances() +
      this.injectProvideQuote() +
      this.injectOver2Mil() +
      this.injectEnterOrderInRWOE() +
      this.injectCheckOrderReview() +
      this.injectUpdateOrderLog() +
      this.injectEnterSFNotes();
    return string;
  }

  equityActionSellShort() {
    const string =
      this.injectAmount() +
      this.injectDollarsShares() +
      this.injectFractionalShares() +
      this.injectSymbol() +
      this.injectOrderType() +
      this.injectLimitPrice() +
      this.injectStopPrice() +
      this.injectTimeInForce() +
      this.injectCheckMarginReq() +
      this.injectProvideQuote() +
      this.injectDIAPenny() +
      this.injectOver2Mil() +
      this.injectEnterOrderInRWOE() +
      this.injectCheckOrderReview() +
      this.injectUpdateOrderLog() +
      this.injectEnterSFNotes();
    return string;
  }

  optionsSingleLeg() {
    const string =
      this.injectAmount() +
      this.injectSymbol() +
      this.injectOptionAction() +
      this.injectOrderType() +
      this.injectLimitPrice() +
      this.injectStopPrice() +
      this.injectTimeInForce() +
      this.injectCheckBalances() +
      this.injectProvideQuote() +
      this.injectDIAPenny() +
      this.injectOver2Mil() +
      this.injectEnterOrderInRWOE() +
      this.injectCheckOrderReview() +
      this.injectUpdateOrderLog() +
      this.injectEnterSFNotes();
    return string;
  }

  optionsMultiLeg() {
    let string = '';
    for (let i = 0; i < 5; i++) {
      string +=
        this.injectAmount() + this.injectSymbol() + this.injectOptionAction();
    }
    string +=
      this.injectOrderType() +
      this.injectLimitPrice() +
      this.injectStopPrice() +
      this.injectTimeInForce() +
      this.injectCheckBalances() +
      this.injectProvideQuote() +
      this.injectDIAPenny() +
      this.injectOver2Mil() +
      this.injectEnterOrderInRWOE() +
      this.injectCheckOrderReview() +
      this.injectUpdateOrderLog() +
      this.injectEnterSFNotes();
    return string;
  }

  injectOptionAction() {
    const options = {
      'BCO Buy Calls to Open': 'BCO',
      'BCO Buy Puts to Open': 'BPO',
      'BCC Buy Calls to Close': 'BCC',
      'BPC Buy PUts to Close': 'BPC',
      'SCO Sell Calls to Open': 'SCO',
      'SPO Sell Puts to Open': 'SPO',
      'SCC Sell Calls to Close': 'SCC',
      'SPC Sell Puts to Close': 'SPC',
    };
    return this.createDropDown('action', 'Action', options, 'Action');
  }

  injectDollarsShares() {
    const htmlString = this.createRadio(
      'Dollars or Shares',
      ['dollars', 'shares'],
      'Dollars or Shares'
    );
    return htmlString;
  }

  injectFractionalShares() {
    return this.createCheckbox('Fractional Shares?', 'fractional-shares');
  }

  injectFromSymbol() {
    const htmlString = this.createTextInput(
      'from-symbol',
      'From Symbol',
      'From Symbol'
    );
    return htmlString;
  }

  injectToSymbol() {
    const htmlString = this.createTextInput(
      'to-symbol',
      'To Symbol',
      'To Symbol'
    );
    return htmlString;
  }

  injectSolicitedUnsolicited() {
    const htmlString = this.createRadio(
      'Solicited or Unsolicited?',
      ['solicited', 'unsolicited'],
      'Solicited or Unsolicited'
    );
    return htmlString;
  }

  injectSymbol() {
    const htmlString = this.createTextInput('symbol', 'Symbol', 'Symbol');
    return htmlString;
  }

  injectOrderType() {
    let options = {
      Market: 'Market',
      Limit: 'Limit',
      'Stop Loss': 'Stop Loss',
      'Stop Limit': 'Stop Limit',
      'Training Stop Loss $': 'Trailing Stop Loss $',
      'Trailing Stop Loss %': 'Trailing Stop Loss %',
      'Trailing Stop Limit $': 'Trailing Stop Limit $',
      'Trailing Stop Limit %': 'Trailing Stop Limit %',
      Conditional: 'Conditional',
    };
    return this.createDropDown(
      'order-type',
      'Order Type',
      options,
      'Order Type'
    );
  }

  injectLimitPrice() {
    return this.createTextInput('limit-price', 'Limit Price', 'Limit Price');
  }

  injectStopPrice() {
    return this.createTextInput('stop-price', 'Stop Price', 'Stop Price');
  }

  injectTimeInForce() {
    return this.createRadio('Time in Force', ['Day', 'GTC'], 'Day or GTC');
  }

  injectCheckMarginReq() {
    return `
      <div class="transaction-checkbox">
        <label for="${this.cardId}-check-margin-req" class="red-text">
          Check Margin Req
        </label>
        <input
          type="checkbox"
          id="${this.cardId}-check-margin-req}"
          name="check-margin-req"
        />
      </div>
    `;
    // return this.createCheckbox('Check Margin Req', 'check-margin-req');
  }

  injectProvideQuote() {
    const htmlString = this.createCheckbox('Provide Quote?', 'provide-quote');
    return htmlString;
  }

  injectSettlementDays() {
    const htmlString = this.createCheckbox(
      'Settlement Days?',
      'settlement-days'
    );
    return htmlString;
  }

  injectShortTermRedemption() {
    const htmlString = this.createCheckbox(
      'Short-term Redemption?',
      'short-term-redemption'
    );
    return htmlString;
  }

  injectRestrictions() {
    const htmlString = this.createCheckbox(
      'Restrictions (all green?)',
      'restrictions'
    );
    return htmlString;
  }

  injectMinimums() {
    const htmlString = this.createCheckbox(
      'Minimums (initial and additional)',
      'minimums'
    );
    return htmlString;
  }

  // TODO This one is more complicated than I thought. Come back later.
  injectNonFidelityFunds() {
    // const options = {
    //   'Load?': 'Yes: transfer to specialty trading',
    //   'NFT = Y': 'Buy: No Fee',
    //   'NFT = N': "Buy: Transaction fee charged (don't overbuy)",
    // };
    // const htmlString = this.createDropDown(
    //   'non-fidelity-funds',
    //   'Non-Fidelity-Funds - NFT?',
    //   options,
    //   'Non-Fidelity Funds'
    // );
    return `
      <div class="option-container">
        <label for="${this.cardId}-non-fidelity-funds">Non-Fidelity-Funds - NFT?</label>
        <select id="${this.cardId}-non-fidelity-funds" name="non-fidelity-funds">
          <option value="none">Select an option</option>
          <option value="Yes: transfer to specialty trading">Load?</option>
          <option value="Buy: No Fee">NFT = Y</option>
          <option value="Buy: Transaction fee charged (don't overbuy)">NFT = N</option>
        </select>
      </div>
      <div class = "NFT-information">
        <p>Load? = Yes - transfer to specialty trading. </p>
        <p>NFT = Y - Buy: No Fee </p>
        <p>NFT = N - Buy: Transaction Fee Charged <span class="red-text">Don't Over Buy!</span> </p>

      </div>
    `;
  }

  injectDIAPenny() {
    return this.createCheckbox('DIA Penny Stock', 'DIA-penny-stock');
  }

  // TODO add data label functionality
  injectOver2Mil() {
    const htmlString = this.createCheckbox(
      'Over $2mil needs approval',
      'over-2mill'
    );
    return `
      <div class="transaction-checkbox red-text">
        <label for="${this.cardId}-over-2mil">
          Over $2mil needs approval
        </label>
        <input
          type="checkbox"
          id="${this.cardId}-over-2mil"
          name="over-2mil"
        />
      </div>
    `;
  }

  injectEnterOrderInRWOE() {
    const htmlString = this.createCheckbox(
      'Enter Order in RWOE/Readback',
      'enter-order-in-RWOE'
    );
    return htmlString;
  }

  injectCheckOrderReview() {
    const htmlString = this.createCheckbox(
      'Check Order Review',
      'check-order-review'
    );
    return htmlString;
  }

  injectUpdateOrderLog() {
    const htmlString = this.createCheckbox(
      'Update Order Log',
      'update-order-log'
    );
    return htmlString;
  }

  injectLikeUnlikeRegistrations() {
    return `
    <div class="transaction-checkbox">
      <label for="${this.cardId}-like-unlike-registrations">
        Like/Unlike Registrations
      </label>
      <input
        type="checkbox"
        id="${this.cardId}-like-unlike-registrations"
        name="like-unlike-registrations"
        value="yes"
      />
    </div>`;
  }

  injectCheckBalances() {
    return `
    <div class="transaction-checkbox red-text">
      <label for="${this.cardId}-negative-balance">
        Check Balances - Negative Balance?
      </label>
      <input
        type="checkbox"
        id="${this.cardId}-negative-balance"
        name="negative-balance"
        value="Yes"
      />
    </div>`;
  }

  injectCashInKind() {
    return `
    <div class="radio-container">
      <div class="radio-title">Cash or In-Kind</div>
      <div class="radios">
        <div class="radio">
          <label for="${this.cardId}-cash">Cash</label>
          <input 
            type="radio" 
            id="${this.cardId}-cash" 
            name="${this.cardId}-cash-or-in-kind" 
            value="cash" 
            data-label= "Cash or In-Kind" />
        </div>
        <div class="radio">
          <label for="${this.cardId}-in-kind">In-Kind</label>
          <input
            type="radio"
            id="${this.cardId}-in-kind"
            name="${this.cardId}-cash-or-in-kind"
            value="in-kind"
            data-label= "Cash or In-Kind"
          />
        </div>
      </div>
    </div>`;
  }

  injectToWhere() {
    return `
    <div class="text-input-container">
      <label for="${this.cardId}-to-where">To Where:</label>
      <input
        type="text"
        id="${this.cardId}-to-where"
        name="To-Where"
        data-label="From where"
      />
    </div>`;
  }

  injectTaxWitholding() {
    return `    
    <div class="tax-witholding-container">
      <h5>Tax Withholding</h5>
      <div class="text-input-container three">
        <label for="${this.cardId}-tax-witholding-fed">Federal:</label>
        <input type="number" id="${this.cardId}-tax-witholding-fed" data-label="Fed" />
        <label for="${this.cardId}-tax-witholding-fed">%</label>
      </div>
      <div class="text-input-container three">
        <label for="${this.cardId}-tax-witholding-state">State:</label>
        <input type="number" id="${this.cardId}-tax-witholding-state" data-label="State" />
        <label for="${this.cardId}-tax-witholding-state">%</label>
      </div>
      <div class="transaction-checkbox">
        <label for="${this.cardId}-gross-up">Grossed Up</label>
        <input
          type="checkbox"
          id="${this.cardId}-gross-up"
          name="grossed-up"
          data-label="Grossed up"
          value="Yes"
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
                  data-label="Amount"
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
            data-label="From where"
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
                  name="${this.cardId}-contribution-year"
                  value="CYC"
                  data-label ="Contribution Year"
                />
              </div>
              <div class="radio">
                <label for="${this.cardId}-contribution-PYC">PYC</label>
                <input
                  type="radio"
                  id="${this.cardId}-contribution-PYC"
                  name="${this.cardId}-contribution-year"
                  value="PYC"
                  data-label ="Contribution Year"
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
            data-label="ICP/Work Order #"
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

  // Helper Methods to create inputs
  /**
   *
   * @param {string} label The actual title that appears next to input
   * @param {string} name The name lower case and seperated by dashes.
   * @returns
   */
  createCheckbox(label, name, dataLabel = null) {
    let dataLabelAttribute = dataLabel ? ` data-label="${dataLabel}"` : '';
    return `
    <div class="transaction-checkbox">
      <label for="${this.cardId}-${name}">
        ${label}
      </label>
      <input
        type="checkbox"
        id="${this.cardId}-${name}"
        name="${name}"
        ${dataLabelAttribute}
      />
    </div>`;
  }
  /**
   *
   * @param {string} label Label
   * @param {Array} options Array of options, lower case and dashes for space.
   * @returns
   */
  createRadio(label, options, dataLabel = null) {
    let dataLabelAttribute = dataLabel ? ` data-label="${dataLabel}"` : '';
    let radiosHTML = '';
    options.forEach((option) => {
      const formattedOption = this.formatString(option);
      radiosHTML += `
        <div class="radio">
          <label for="${this.cardId}-${option}">${formattedOption}</label>
          <input 
          type="radio" 
          id="${this.cardId}-${option}" 
          name="${label + this.cardId}" 
          value="${option}" 
          ${dataLabelAttribute}/>
        </div>`;
    });

    return `
      <div class="radio-container">
        <div class="radio-title">${label}</div>
        <div class="radios">
          ${radiosHTML}
        </div>
      </div>`;
  }
  /**
   *
   * @param {String} name lower case dashes for space
   * @param {*} label Proper uppercase, special chars allowed.
   * @returns
   */
  createTextInput(name, label, dataLabel = null) {
    let dataLabelAttribute = dataLabel ? ` data-label="${dataLabel}"` : '';
    let html = `
      <div class="text-input-container">
        <label for="${this.cardId}-${name}">${label}:</label>
        <input
          type="text"
          id="${this.cardId}-${name}"
          name="${name}"
          ${dataLabelAttribute}"
        />
      </div>`;
    return html;
  }

  /**
   *
   * @param {string} name Lower case and spaces replaced with dashes
   * @param {string} label The label to be displayed
   * @param {Object} options object(key-value pair) of options to choose from
   * @param {string} dataLabel If no data label, then leave empty.
   * @returns html string.
   */
  createDropDown(name, label, options, dataLabel = null) {
    let optionsHTML = `<option value="none">Select Option</option>`;

    for (const [key, value] of Object.entries(options)) {
      optionsHTML += `<option value="${value}">${key}</option>`;
    }

    let dataLabelAttribute = dataLabel ? ` data-label="${dataLabel}"` : '';

    return `
      <div class="option-container">
        <label for="${this.cardId}-${name}">${label}</label>
        <select id="${this.cardId}-${name}" name="${name}"${dataLabelAttribute}>
          ${optionsHTML}
        </select>
      </div>`;
  }

  formatString(str) {
    // Replace dashes with spaces
    const spacedStr = str.replace(/-/g, ' ');

    // Split the string into words
    const words = spacedStr.split(' ');

    // Capitalize the first letter of each word
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join the words back into a single string
    return capitalizedWords.join(' ');
  }
}
