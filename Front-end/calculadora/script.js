function appendToScreen(value) {
	document.getElementById('screen').value += value;
}

function clearScreen() {
	document.getElementById('screen').value = '';
}

function calculate() {
	try {
		document.getElementById('screen').value = eval(
			document.getElementById('screen').value
		);
	} catch (e) {
		document.getElementById('screen').value = 'Error';
	}
}
