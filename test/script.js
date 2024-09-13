let currentInputValue = '';

function clearInput () {
	currentInputValue = '';

	document.querySelector('#result').value = '';
}

function appendValue (i) {
	currentInputValue += i; 
	document.querySelector('#result').value = currentInputValue;

}	

function calculateResult () {
	try {
		currentInputValue = eval(currentInputValue);
		document.querySelector('#result').value = currentInputValue;
	} catch {
		document.querySelector('#result').value = 'Error';
	}


}