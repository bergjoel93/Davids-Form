/**
 * This class is responsible for generating the Transaction object which will then be appended to the data object and is updated.
 */

class MovingMoney {
  constructor(count) {
    this.id = count;
    this.AccountNumber = null;
    this.AlertsAndRestrictions = null;
    this.AuthorizedToTrade = null;
    this.AutoInvestments = null;
    this.Action = null;
  }
}

class MutualFundTrade {
  constructor(count) {
    this.id = count;
    this.AcountNumber = null;
    this.AlertsAndRestrictions = null;
    this.AuthorizedToTrade = null;
    this.orders = null;
    this.AutoInvestments = null;
    this.Action = null;
  }
}

class EquityTrade {
  constructor(count) {
    this.id = count;
    this.AccountNumber = null;
    this.AlertsAndRestrictions = null;
    this.AuthorizedToTrade = null;
    this.orders = null;
    this.AutoInvestments = null;
    this.Commission = null;
    this.Action = null;
  }
}
class OptionsTrade {
  constructor(count) {
    this.id = count;
    this.AccountNumber = null;
  }
}
class ManagedAccounts {
  constructor(count) {
    this.id = count;
    this.AccountNumber = null;
    this.AlertsAndRestrictions = null;
    this.AuthorizedToTrade = null;
    this.Product = null;
    this.DNT = null;
    this.AutoInvestments = null;
    this.Action = null;
  }
}
class Other {
  constructor(count) {
    this.id = count;
    this.AccountNumber = null;
  }
}

export {
  MovingMoney,
  MutualFundTrade,
  EquityTrade,
  OptionsTrade,
  ManagedAccounts,
  Other,
};
