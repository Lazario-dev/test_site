
function changeStyle(x){
	var Div1 = document.getElementById("Div1");
	var Div2 = document.getElementById("Div2");
	var Div3 = document.getElementById("Div3");

	if (x == 1) {
		const menuElement = document.getElementById('Div1');
		menuElement.classList.remove('hide');
		menuElement.classList.add('show');
		return;
	} else
	if (x == 2) {
		const menuElement = document.getElementById('Div2');
		menuElement.classList.remove('hide');
		menuElement.classList.add('show');
		return;
	} else
	if (x == 3) {
		const menuElement = document.getElementById('Div3');
		menuElement.classList.remove('hide');
		menuElement.classList.add('show');
		return;
	}
}
		
function changeStyleback(x){
	var Div1 = document.getElementById("Div1");
	var Div2 = document.getElementById("Div2");
	var Div3 = document.getElementById("Div3");

    if (x == 1) {
		const menuElement = document.getElementById('Div1');
		menuElement.classList.remove('show');
		menuElement.classList.add('hide');
		return;
	}
	if (x == 2) {
		const menuElement = document.getElementById('Div2');
		menuElement.classList.remove('show');
		menuElement.classList.add('hide');
		return;
	}
	if (x == 3) {
		const menuElement = document.getElementById('Div3');
		menuElement.classList.remove('show');
		menuElement.classList.add('hide');
		return;
	}
}