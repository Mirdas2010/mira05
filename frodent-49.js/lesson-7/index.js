//DOM - document object model

// document.body.style.backgroundColor = "red";

//console.log(document);
//console.log(document.head);
//console.log(document.body);

let form = document.createElement("form");
form.classList.add("form");

//input class="input"
//button class"btn"
//div class="result"




let input = document.createElement("input");
input.classList.add("input");
input.pleceholder = "Enter todos"


let btn = document.createElement("button");
btn.classList.add("btn");
btn.textContent = "Send"


let result = document.createElement("div");
result.classList.add("result");

form.append(input, btn);

btn.addEventListener("click", function (e) {
    e.preventDefault()

    if (input.value === "") {
        alert("no value!");
    }else {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let textItem = document.createElement("p");
        textItem.textContent = input.value

        let deleteItem = document.createElement("button");
        deleteItem.classList.add("container");
        deleteItem.textContent = "Delete"

        let itemContainer = document.createElement("div");
        itemContainer.classList.add("container");
        itemContainer.append(checkbox, textItem, deleteItem);

        input.value = "";

        result.appendChild(itemContainer);
    }
})

document.body.appendChild(form);
document.body.appendChild(result);


