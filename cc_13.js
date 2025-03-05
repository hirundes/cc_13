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
    removeButton.addEventListener("click", (event) => {     
        event.stopPropagation();  //Child is only getting triggered not the parent so the message does not show
        employeeCard.remove(); });
 
    employeeCard.appendChild(removeButton); //Appending remove button

    employeeContainer.appendChild(employeeCard); //Appending employee card to the employee container
}

createEmployeeCard("Hirun Desilva", "Manager"); //Test Case 1
createEmployeeCard("Binky Barnes", "Team Lead"); //Test Case 2

//Task 3 - Bulk Update on Employee Cards
function updatedEmployeeCards() {

    const employeeCardsNodeList = document.querySelectorAll(".employee-card");
    const employeeCardArray = Array.from(employeeCardsNodeList)
    employeeCardArray.forEach(card => {
            card.style.backgroundColor = '#f0f0f0';
        }
    )};

updatedEmployeeCards()

//Task 4 - Employee Card Removal with Event Bubbling
function eventListener() {  //Created function eventListener so it can be called at the end
    const employeeContainer = document.getElementById("employeeContainer")  //
    employeeContainer.addEventListener("click", function(event) {   //Attaching event listeners to employee container
        console.log("Employee Card Clicked"); //Logged when card is clicked
    })
}

eventListener(); 

