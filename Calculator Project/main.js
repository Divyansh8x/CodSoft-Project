document.addEventListener("DOMContentLoaded", function () {
  let currentInput = "";
  const inputField = document.querySelector(".input");

  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", function (e) {
      const buttonValue = e.target.innerHTML;

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
    return Function(`'use strict'; return (${sanitizedInput})`)();
  }
});
