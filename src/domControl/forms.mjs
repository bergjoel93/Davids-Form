function generateCard(choice) {
  const card = document.createElement("div");
  card.className = "transaction-card";
  let content = ``;

  switch (choice) {
    case "Moving-Money":
      content += injectMovingMoney();
      break;
    case "Mutual-Fund-Trade":
      content += injectMutualFundTrade();
      break;
    case "Equity-Trade":
      content += injectEquityTrade();
      break;
    case "Options-Trade":
      content += injectOptionsTrade();
      break;
    case "Managed-Accounts":
      content += injectManagedAccount();
      break;
    case "Other":
      content += injectOther();
      break;
    default:
      break;
  }
  card.innerHTML = content;
  // Add event listener to close button
  card.querySelector(".close-card").addEventListener("click", () => {
    card.remove();
  });

  return card;
}

function injectMovingMoney() {
  return `    <fieldset name="MovingMoney id="MovingMoney" >
            <div class="transaction-card">
              <button class="close-card">X</button>
              <h3>Moving Money</h3>
              <label for="accountNum2">Account #</label>
              <input type="text" id="accountNum2" />
            </div>
            <div class="radio-box">
              <label for="alerts-and-restrictions"
                >Alerts and Restrictions?</label
              >
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="alerts-and-restrictions-yes" />
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
                  <input type="radio" id="authorized-to-trade-yes" />
                  <label for="authorized-to-trade-yes">Yes</label>
                </div>
                <div class="radio">
                  <input type="radio" id="authorized-to-trade-no" />
                  <label for="authorized-to-trade-no">No</label>
                </div>
              </div>
            </div>

            <div class="option-container">
              <label for="auto-investments"
                >Auto Investments or PWS planse?</label
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
                <option value="deposit">Deposit</option>
                <option value="withdrawal">Withdrawal</option>
                <option value="journal">Journal</option>
              </select>
            </div>
            </fieldset>
          `;
}

function injectMutualFundTrade() {
  return `
            <div class="transaction-card" id="Mutual-Fund-Trade">
              <button class="close-card">X</button>
              <h3>Mutual Fund Trade</h3>
              <label for="accountNum2">Account #</label>
              <input type="text" id="accountNum2" />
            </div>
            <div class="radio-box">
              <label for="alerts-and-restrictions"
                >Alerts and Restrictions?</label
              >
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="alerts-and-restrictions-yes" />
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
                  <input type="radio" id="authorized-to-trade-yes" />
                  <label for="authorized-to-trade-yes">Yes</label>
                </div>
                <div class="radio">
                  <input type="radio" id="authorized-to-trade-no" />
                  <label for="authorized-to-trade-no">No</label>
                </div>
              </div>
            </div>

            <div class="radio-box">
              <label for="orders">Orders</label>
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="orders-openend" />
                  <label for="openend">Openend</label>
                </div>
                <div class="radio">
                  <input type="radio" id="orders-closed" />
                  <label for="orders-closed">Closed</label>
                </div>
              </div>
            </div>

            <div class="option-container">
              <label for="auto-investments"
                >Auto Investments or PWS planse?</label
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
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
                <option value="Exchange">Exchange</option>
                <option value="sellToBuy">Sell To Buy</option>
              </select>
            </div>
          `;
}

function injectEquityTrade() {
  return ` 
            <div class="transaction-card" id="Equity-Trade">
              <button class="close-card">X</button>
              <h3>Equity Trade</h3>
              <label for="accountNum2">Account #</label>
              <input type="text" id="accountNum2" />
            </div>
            <div class="radio-box">
              <label for="alerts-and-restrictions"
                >Alerts and Restrictions?</label
              >
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="alerts-and-restrictions-yes" />
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
                  <input type="radio" id="authorized-to-trade-yes" />
                  <label for="authorized-to-trade-yes">Yes</label>
                </div>
                <div class="radio">
                  <input type="radio" id="authorized-to-trade-no" />
                  <label for="authorized-to-trade-no">No</label>
                </div>
              </div>
            </div>

            <div class="radio-box">
              <label for="orders">Orders</label>
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="orders-openend" />
                  <label for="orders-openend">Openend</label>
                </div>
                <div class="radio">
                  <input type="radio" id="orders-cancelled" />
                  <label for="orders-cancelled">Cancelled</label>
                </div>
              </div>
            </div>

            <div class="option-container">
              <label for="auto-investments"
                >Auto Investments or PWS planse?</label
              >
              <select id="auto-investments" name="auto-investments">
                <option value="null">Select Option:</option>
                <option value="adjusted">Adjusted</option>
                <option value="discussed-no-changes">
                  Discussed, no changes.
                </option>
                <option value="na">NA</option>
              </select>

              <label for="comission">Comission:</label>
              <select id="action" name="action">
                <option value="null">Select Option:</option>
                <option value="waved">Waved</option>
                <option value="Discussed">Discussed</option>
              </select>

              <label for="action">Action:</label>
              <select id="action" name="action">
                <option value="null">Select Option:</option>
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
  
              </select>
            </div>
`;
}

function injectOptionsTrade() {
  return `         
   <div class="transaction-card" id="Options-Trade">
            <button class="close-card">X</button>
            <h3>Options Trade</h3>
            <label for="accountNum2">Account #</label>
            <input type="text" id="accountNum2" />
          </div>`;
}

function injectManagedAccount() {
  return `
            <div class="transaction-card" id="Managed-Accounts">
              <button class="close-card">X</button>
              <h3>Managed Accounts</h3>
              <label for="accountNum2">Account #</label>
              <input type="text" id="accountNum2" />
            </div>
            <div class="radio-box">
              <label for="alerts-and-restrictions"
                >Alerts and Restrictions?</label
              >
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="alerts-and-restrictions-yes" />
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
                  <input type="radio" id="authorized-to-trade-yes" />
                  <label for="authorized-to-trade-yes">Yes</label>
                </div>
                <div class="radio">
                  <input type="radio" id="authorized-to-trade-no" />
                  <label for="authorized-to-trade-no">No</label>
                </div>
              </div>
            </div>

            <div class="radio-box">
              <label for="product">Product</label>
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="SMA" />
                  <label for="SMA">SMA</label>
                </div>
                <div class="radio">
                  <input type="radio" id="FidelityGo" />
                  <label for="FidelityGo">FidelityGo</label>
                </div>
              </div>
            </div>

            <div class="radio-box">
              <label for="DNT">DNT</label>
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="DNT-yes" />
                  <label for="DNT-yes">Yes</label>
                </div>
                <div class="radio">
                  <input type="radio" id="DNT-no" />
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
              <div class="transaction-card" id="Other">
            <button class="close-card">X</button>
            <h3>Other</h3>
            <label for="accountNum2">Account #</label>
            <input type="text" id="accountNum2" />
          </div>
    `;
}

function formatString(input) {
  return input.split("-").join(" ");
}

export { generateCard };
