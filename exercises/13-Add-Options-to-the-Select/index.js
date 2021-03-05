window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	countries.forEach(element => {
		var elem = document.createElement("option"); //<option></option>
		elem.innerHTML = element; //<option> USA </option>
		document.querySelector("#mySelect").appendChild(elem); //<selection id=#mySelect><option> USA </option></selection>
	});
	let selector = document.querySelector("#mySelect"); //<select></select>
	selector.addEventListener("change", function() {
		alert(selector.value);
	});
};
