/*-------------------------------- Constants --------------------------------*/
const display = document.querySelector('.display');
const buttons = Array.from(document.querySelectorAll('.button'));

/*-------------------------------- Variables --------------------------------*/
let expression = '';

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const buttonValue = event.target.innerText;
    if (buttonValue === 'C') {
      expression = '';
      display.innerText = '0';
    } else if (buttonValue === '=') {
      try {
        const result = eval(expression);
        display.innerText = result;
        expression = result.toString();
      } catch (error) {
        display.innerText = 'Error';
      }
    } else {
      expression += buttonValue;
      display.innerText = expression;
    }
  });
});

