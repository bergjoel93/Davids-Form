function generateCard(choice, count, title) {
  const card = document.createElement("div");
  card.className = "transaction-card";
  card.id = `${choice}-${count}`;
  let content = ``;

  switch (choice) {
    case "Moving-Money":
      content += injectMovingMoney(title);
      break;
    case "Mutual-Fund-Trade":
      content += injectMutualFundTrade(title);
      break;
    case "Equity-Trade":
      content += injectEquityTrade(title);
      break;
    case "Options-Trade":
      content += injectOptionsTrade(title);
      break;
    case "Managed-Accounts":
      content += injectManagedAccount(title);
      break;
    case "Other":
      content += injectOther(title);
      break;
    default:
      break;
  }
  card.innerHTML = content;
  // Add event listener to close button
  // card.querySelector(".close-card").addEventListener("click", () => {
  //   card.remove();
  // });

  return card;
}

function injectMovingMoney(title) {
  return `    

            <button class="close-card">X</button>
            <input class = "transaction-title" data-label="Transaction" value="${title}">

            <div class = "secondary-card-container">
              <label for="accountNum2">Account #</label>
              <input type="text" id="accountNum2" name="Account-Number" />

              <div class="transaction-checkbox">
                <label for="alerts-and-restrictions">Alerts and Restrictions?</label>
                <input type="checkbox" id = "alerts-and-restrictions">
              </div>
  
              <div class="transaction-checkbox">
                <label for="authorized-to-trade">Authorized to Trade?</label>
                <input type = "checkbox" id = "authorized-to-trade">
              </div>
                
              <div class="option-container">
                <label for="auto-investments"
                  >Auto Investments or PWS planse?</label
                >
                <select id="auto-investments" name="Auto-Investments">
                  <option value="null">Select Option:</option>
                  <option value="adjusted">Adjusted</option>
                  <option value="discussed-no-changes">
                    Discussed, no changes.
                  </option>
                  <option value="na">NA</option>
                </select>
                <label for="action">Action:</label>
                <select id="action" name="Action">
                  <option value="null">Select Option:</option>
                  <option value="deposit">Deposit</option>
                  <option value="withdrawal">Withdrawal</option>
                  <option value="journal">Journal</option>
                </select>
              </div>
            </div>

          `;
}

function injectMutualFundTrade() {
  return `

            <button class="close-card">X</button>
            <h3>Mutual Fund Trade</h3>
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
                  <input type="radio" id="alerts-and-restrictions-no" name = "Alerts-And-Restrictions" value="no"/>
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
              <label for="orders">Orders</label>
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="orders-openend" name = "Orders" value = "opened"/>
                  <label for="openend">Openend</label>
                </div>
                <div class="radio">
                  <input type="radio" id="orders-closed" name="Orders" value="closed" />
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

            <button class="close-card">X</button>
            <h3>Equity Trade</h3>
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
                  <input type="radio" id="alerts-and-restrictions-no" name = "Alerts-And-Restrictions" value="no"/>
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
              <label for="orders">Orders</label>
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="orders-openend" name = "Orders" value = "opened"/>
                  <label for="orders-openend">Openend</label>
                </div>
                <div class="radio">
                  <input type="radio" id="orders-cancelled" name="Orders" value="Cancelled"/>
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

            <button class="close-card">X</button>
            <h3>Options Trade</h3>
            <label for="accountNum2">Account #</label>
            <input type="text" id="accountNum2" name="Account-Number" />
            `;
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
  return input.split("-").join(" ");
}

export { generateCard };
