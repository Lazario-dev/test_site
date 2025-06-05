function changeStyle(x){
	var Div1 = document.getElementById("Div1");
	var Div2 = document.getElementById("Div2");
	var Div3 = document.getElementById("Div3");
	var Text1 = document.getElementById("Text1");
	var Text2 = document.getElementById("Text2");
	var Text3 = document.getElementById("Text3");

	if (x == 1) {
		Text1.style.display = "flex";
		Div1.style.maxHeight = "none";
		return;
	} else
	if (x == 2) {
		Text2.style.display = "flex";
		Div2.style.maxHeight = "none";
		return;
	} else
	if (x == 3) {
		Text3.style.display = "flex";
		Div3.style.maxHeight = "none";
		return;
	}
}
		
function changeStyleback(x){
	var Div1 = document.getElementById("Div1");
	var Div2 = document.getElementById("Div2");
	var Div3 = document.getElementById("Div3");
	var Text1 = document.getElementById("Text1");
	var Text2 = document.getElementById("Text2");
	var Text3 = document.getElementById("Text3");

    if (x == 1) {
		Text1.style.display = "none";
		Div1.style.maxHeight = "40px";
		return;
	}
	if (x == 2) {
		Text2.style.display = "none";
		Div2.style.maxHeight = "40px";
		return;
	}
	if (x == 3) {
		Text3.style.display = "none";
		Div3.style.maxHeight = "40px";
		return;
	}
}

document.querySelector('.element').classList.add('visible');