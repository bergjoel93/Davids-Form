import "./styles/style.css";
import Handle from "./domControl/Handle.mjs";
import HandleFormData from "./domControl/HandleFormData.mjs";

const handle = new Handle();
handle.generateAddTransactionButtons();

const form = document.querySelector("#myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  new HandleFormData(event);
});
