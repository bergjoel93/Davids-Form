/**
 * This module is responsible for handling the card and generating the card object data which will then be appended to the Transactions section of the data object.
 */

export default class HandleCard {
  constructor(card) {
    this.card = card;
    this.type = this.formatType(this.card.id); // Transaction Type
    this.cardId = this.card.id;
    this.cardElement = document.querySelector(`#${this.cardId}`);
  }
  /**
   *
   * @param {String} input
   * @returns Formatted type without the end "-[number]"
   */
  formatType(input) {
    // Use a regular expression to match and remove the dash followed by one or more digits at the end of the string
    return input.replace(/-\d+$/, '');
  }
}
