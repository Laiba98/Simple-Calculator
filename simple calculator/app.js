let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let equation = ""; // renamed from 'string' to be more descriptive
let buttonArray = Array.from(buttons);

buttonArray.forEach(button => {
    button.addEventListener('click', (event) => {
        let buttonContent = event.target.innerHTML;

        if (buttonContent === '=') {
            try {
                equation = eval(equation);
                display.value = equation;
            } catch {
                display.value = "Error";
                equation = "";
            }
        } else if (buttonContent === 'AC') {
            equation = "";
            display.value = "0";
        } else if (buttonContent === 'DEL') {
            equation = equation.slice(0, -1);
            display.value = equation || "0";
        } else {
            equation += buttonContent;
            display.value = equation;
        }
    });
});


