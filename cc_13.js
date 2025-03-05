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
    enableInlineEditing(employeeCard); //Calling Task 5 code
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


//Task 5 - Inline Editing for Employee Cards
function enableInlineEditing (card) {
    const nameHeading = card.querySelector("h3") //Selecting where the card is 
    const positionPara = card.querySelector("p")
    let removeBtn = card.querySelector("button.remove-btn") //Remove button function is not getting effected

card.addEventListener("dblclick", function() { //Detecting double clicking of card and creating inputs and save button
        const nameInput = document.createElement("input");        
        nameInput.type = "text";        
        nameInput.value = nameHeading.textContent;        
        const positionInput = document.createElement("input");        
        positionInput.type = "text";       
        positionInput.value = positionPara.textContent;    
        const saveBtn = document.createElement("button"); 
        saveBtn.textContent = "Save";

        card.innerHTML = "";    //Adding it to the card.
        card.appendChild(nameInput);     
        card.appendChild(positionInput);
        card.appendChild(saveBtn);

        saveBtn.addEventListener("click", function() { //Clicking save button adds the details and saves    
            nameHeading.textContent = nameInput.value;       
            positionPara.textContent = positionInput.value;

            card.innerHTML = "";           
              card.appendChild(nameHeading);      
                card.appendChild(positionPara);
                removeBtn = document.createElement("button");   //Making sure remove function is not disturbed.
                removeBtn.textContent = "Remove";
                removeBtn.classList.add("remove-btn");
                removeBtn.addEventListener("click", (event) => {    
                    event.stopPropagation();  
                    card.remove();
                });
                card.appendChild(removeBtn);
        });
    });
};

