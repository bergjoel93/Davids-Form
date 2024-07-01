function generateCard(choice) {
  const card = document.createElement("div");
  card.className = "transaction-card";
  let content = `
    <div class="transaction-card" id="${choice}">
            <button class="close-card">X</button>
            <h3>${formatString(choice)}</h3>
            <label for="accountNum2">Account #</label>
            <input type="text" id="accountNum2" />
    </div>`;

  switch (choice) {
    case "Moving-Money":
      content +=
        injectAlertsAndRestrictions() +
        injectAuthorizedToTrade() +
        injectFirstOptions();
      break;
    case "Mutual-Fund-Trade":
      content +=
        injectAlertsAndRestrictions() +
        injectAuthorizedToTrade() +
        injectOrdersOpenedOrCancelled() +
        injectFirstOptions();
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

function injectAlertsAndRestrictions() {
  return `          
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
            </div>`;
}

function injectAuthorizedToTrade() {
  return `
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
    `;
}

function injectOrdersOpenedOrCancelled() {
  return `
                <div class="radio-box">
              <label for="orders">Orders</label>
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="orders-opened" />
                  <label for="orders-openend">Opened</label>
                </div>
                <div class="radio">
                  <input type="radio" id="orders-cancelled" />
                  <label for="orders-cancelled">Cancelled</label>
                </div>
              </div>
            </div>
    `;
}

function injectFirstOptions() {
  return `
                <div class="option-container">
              <label for="auto-investments">Auto Investments or PWS planse?</label>
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
    `;
}

function formatString(input) {
  return input.split("-").join(" ");
}

export { generateCard };
