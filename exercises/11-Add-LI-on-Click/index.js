let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	let elem = document.createElement("LI");
	elem.innerHTML = "Fourth element";
	document.querySelector("#myList").appendChild(elem);
});
