
let nameElement = document.querySelector("#name")

function namechange() {
    if (nameElement.innerText == "Jane Doe"){
        nameElement.innerText = "John Buck"
    }
    console.log(nameElement)
}