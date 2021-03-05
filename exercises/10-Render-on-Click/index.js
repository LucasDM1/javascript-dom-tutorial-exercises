let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let elem = document.createElement("DIV");
	elem.innerHTML = "Hello World";
	elem.style.background = "yellow";
	document.body.appendChild(elem);
});
