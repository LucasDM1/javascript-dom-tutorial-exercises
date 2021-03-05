window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	countries.forEach(element => {
		let elem = document.createElement("OPTION");
		elem.innerHTML = element;
		document.querySelector("#mySelect").appendChild(elem);
	});
};
