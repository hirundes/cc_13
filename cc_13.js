//Task 1 - Base Structure Created
//HTML Coding

//Task 2 - Employee Cards Dynamic Addition
function createEmployeeCard(name, position) {
    const employeeContainer = document.getElementById("employeeContainer"); 
    const employeeCard = document.createElement("div");
    employeeCard.setAttribute("class", "employee-card");

    const employeeName = document.createElement("h3"); //Creating employeeName and Appending it to the card
    employeeName.textContent = name;
    employeeCard.appendChild(employeeName);

    const employeePosition = document.createElement("p"); //Creating employeePosition and Appending it to the card
    employeePosition.textContent = position;
    employeeCard.appendChild(employeePosition);

    const removeButton = document.createElement("button"); //Creating remove button and making it work
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
        employeeCard.remove();
    });
    employeeCard.appendChild(removeButton); //Appending remove button

    employeeContainer.appendChild(employeeCard); //Appending employee card to the employee container
}

createEmployeeCard("Hirun Desilva", "Manager"); //Test Case 1
createEmployeeCard("Binky Barnes", "Team Lead"); //Test Case 2

//Task 3 - Bulk Update on Employee Cards
const employeeCardsNodeList = document.querySelectorAll("employee-card");
const employeeCardArray = Array.from(employeeCardsNodeList)
employeeCardArray.forEach(card => {
    const p = card.querySelector("p");
    if (p) {
        p.textContent += " - Updated";
    }
});

