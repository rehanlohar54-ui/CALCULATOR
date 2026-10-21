
/* Added by ChatGPT: Calculator JavaScript */

const display = document.querySelector("#container input");
const buttons = document.querySelectorAll("#container button");

let expression = "";

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const value = button.innerText;

        // Added by ChatGPT: Clear button
        if (value === "C") {
            expression = "";
            display.value = "";
        }

        // Added by ChatGPT: Delete last character
        else if (value === "DEL") {
            expression = expression.slice(0, -1);
            display.value = expression;
        }

        // Added by ChatGPT: Calculate result
        else if (value === "=") {
            try {
                if (expression.trim() === "") return;

                if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
                    throw new Error("Invalid input");
                }

                const result = Function('"use strict"; return (' + expression + ')')();

                if (!Number.isFinite(result)) {
                    throw new Error("Invalid calculation");
                }

                expression = String(result);
                display.value = expression;
            } catch {
                display.value = "Error";
                expression = "";
            }
        }

        // Added by ChatGPT: Number and operator buttons
        else {
            if (display.value === "Error") {
                expression = "";
            }

            expression += value;
            display.value = expression;
        }
    });
});
