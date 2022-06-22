
function newListItem() {
    let inputElement = document.getElementById("input-form");
    let inputValue = inputElement.value;
    let listItem = document.createElement("li");

    const node = document.createTextNode(inputValue);
    let ul = document.getElementById("list");

    let button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteItem);

    if (inputValue === "") {
        alert("please enter text");
    }
    else {
        listItem.appendChild(node);
        listItem.appendChild(button);
        ul.appendChild(listItem);
    }

    inputElement.value = "";
}

function deleteItem(event) {
    event.target.parentNode.remove();
}

let inputElement = document.getElementById("input-form");
inputElement.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        newListItem()
    }
})

// inputelementaddavenetlemetlistening("", myFunction)

// myDunction() {
//     when enter is pressed do this
// }