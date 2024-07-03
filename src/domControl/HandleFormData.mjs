import { format } from "date-fns";
export default class HandleFormData {
  constructor(event) {
    this.form = event.target;
    this.formData = new FormData(this.form);
    this.jsonObject = {};
    this.handleSubmit(event);
  }

  handleSubmit(event) {
    event.preventDefault();
    const currentDate = new Date();
    const formattedDate = this.formatDate(currentDate);
    // Add the current date to the JSON object
    this.jsonObject["submissionDate"] = formattedDate;
    this.formData.forEach((value, key) => {
      if (this.jsonObject[key]) {
        if (!Array.isArray(this.jsonObject[key])) {
          this.jsonObject[key] = [this.jsonObject[key]];
        }
        this.jsonObject[key].push(value);
      } else {
        this.jsonObject[key] = value;
      }
    });
    // Pretty print the JSON object
    console.log(this.prettyPrintJSON(this.jsonObject));
  }

  // Method to pretty print a JSON object
  prettyPrintJSON(jsonObject) {
    return JSON.stringify(jsonObject, null, 2);
  }

  // Method to format the date
  formatDate(date) {
    // Create suffixes for day
    const getDayWithSuffix = (day) => {
      if (day > 3 && day < 21) return `${day}th`;
      switch (day % 10) {
        case 1:
          return `${day}st`;
        case 2:
          return `${day}nd`;
        case 3:
          return `${day}rd`;
        default:
          return `${day}th`;
      }
    };

    // Format parts of the date
    const month = format(date, "MMM");
    const day = getDayWithSuffix(format(date, "d"));
    const year = format(date, "yyyy");
    const time = format(date, "h:mmaaa").toUpperCase();

    // Combine parts into desired format
    return `${month} ${day} ${year} - ${time}`;
  }
}
