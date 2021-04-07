let accompy = () => {
  accomp = prompt("And what will be your accompy: ");
  alert("Your Choice is "+ accomp);
}

function redo(){
  let anything = prompt("Is ther anything else yes or no? ").toLowerCase();

  if (anything === "yes"){
    userchoice();
  }else{
    alert("thank you for choosing Us.");
  }
};

let userchoice = () => {
  let userInput = prompt("What kind Of Drink Would You like? Tea or Coffee: ");
  userDecide = userInput.toLowerCase();

  if (userDecide == 'tea'){
    alert("Select your choice in Tea Section");
    redo()
  }else if (userDecide == "coffee") {
    alert("PSelect your choice in Coffee Section");
    redo()
  }else{
    alert("invalid choice. Try again");
    userchoice()
  }
};

userchoice()