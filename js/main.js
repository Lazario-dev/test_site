function changeStyle(x){
	var Div1 = document.getElementById("Div1");
	var Div2 = document.getElementById("Div2");
	var Div3 = document.getElementById("Div3");

	if (x == 1) {
		Div1.style.visibility = "visible";
		return;
	} else
	if (x == 2) {
        Div2.style.visibility = "visible";
		return;
	} else
	if (x == 3) {
        Div3.style.visibility = "visible";
		return;
	}
}
		
function changeStyleback(x){
	var Div1 = document.getElementById("Div1");
	var Div2 = document.getElementById("Div2");
	var Div3 = document.getElementById("Div3");

    if (x == 1) {
        Div1.style.visibility = "hidden";
		return;
	}
	if (x == 2) {
        Div2.style.visibility = "hidden";
		return;
	}
	if (x == 3) {
        Div3.style.visibility = "hidden";
		return;
	}
}