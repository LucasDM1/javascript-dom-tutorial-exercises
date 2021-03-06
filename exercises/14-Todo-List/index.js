// Your code here

let input = document.querySelector("#addToDo");
input.addEventListener("change", () => {
	//your code here

	let newElement = document.createElement("LI");
	newElement.innerHTML = `<span><i class="fa fa-trash"></i></span> ${input.value}`;
	document.querySelector("ul").appendChild(newElement);
	Deletetask();
});
function Deletetask() {
	let list = document.querySelectorAll("ul li");
	list.forEach((item, index) => {
		item.addEventListener("click", event => {
			let removeEle = event.target.parentNode.parentNode;
			removeEle.parentNode.removeChild(removeEle);
		});
	});
}
Deletetask();

// let listItems = document.querySelectorAll('.ranges li');

// listItems.forEach((item, index) => {
//   item.addEventListener('click', (event) => {
//      alert(`${event.currentTarget.innerHTML} item was click`);
//   });
//   if (item.innerHTML.indexOf('Last 30 days') != -1) {
//       item.click();
//   }
// });
