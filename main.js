let display = document.querySelector('#result');
let btn = Array.from(document.querySelectorAll('.btns__items'))

let arr = ['+','-','*','/'];
let currentNum;

console.log(btn)

btn.map((button => {
	button.addEventListener("click", e => {
		switch (e.target.innerText) {
			case "AC":
				display.value = "0";
				break;
			case "=":
				try {
					display.value = eval(display.value);
				} catch (e) {
					display.value = "Ошибка!"
				}
				break;
			case '%':
				let value = display.value + '/100';
				display.value = eval(value);
				break;
			case "+/-":
				display.value = parseInt(display.value) * -1;
				break;

			default:
			if (display.value === '0' /* && e.target.innerText !== ".") */) {
				display.value = e.target.innerText;
			} else if ( e.target.innerText == '+' || e.target.innerText == '-' || e.target.innerText == '*' || e.target.innerText == '/'){
				let lastChar = display.value.slice(-1);
				if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/') {
					display.value += e.target.innerText;
				}
			}else if ( e.target.innerText == '.'){
					display.value += e.target.innerText.replace('.', '0.')
			} else {
				display.value += e.target.innerText;
			}

				
		}
	})
}))