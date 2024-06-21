document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  let currentInput = "";
  const inputField = document.querySelector(".input");

  if (!inputField) {
    console.error("Input field not found");
  }

  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", function (e) {
      const buttonValue = e.target.innerHTML;
      console.log(`Button clicked: ${buttonValue}`);
      if (!buttonValue) {
        console.error("Button value not found");
      }

      if (buttonValue === "C") {
        currentInput = "";
      } else if (buttonValue === "=") {
        try {
          currentInput = calculateResult(currentInput);
        } catch (error) {
          currentInput = "Error";
        }
      } else {
        currentInput += buttonValue;
      }
      inputField.value = currentInput;
    });
  });

  function calculateResult(input) {
    let sanitizedInput = input.replace(/[^-()\d/*+.]/g, "");
    console.log(`Sanitized input: ${sanitizedInput}`);
    return Function(`'use strict'; return (${sanitizedInput})`)();
  }
});
