function calculate(){
    var billTotal = document.getElementById("BillAmount").value;
    var service = document.getElementById("service").value;
    var numPeople = document.getElementById("numPeople").value;
    //Validate Bill total is valid
    if (isNaN(billTotal) || billTotal === "" || billTotal == 0){
        alert("Please enter a valid bill total");
        return;
    }
    //Validate Number of People is valid
    if (isNaN(numPeople) || numPeople === "" || numPeople == 0 || !Number.isInteger(Number(numPeople))){
        alert("Please enter a valid amount of people");
        return;
    }
    // Check if they selected an option
    if (service === "none")
    {
        alert("Select and Option")
        return;
    }
    //Switch to find option selected
    var serviceAmount = 0;
    switch (service){
        case document.getElementById("fantastic").value:
            serviceAmount = .30;
            break;
        case document.getElementById("great").value:
            serviceAmount = .20;
            break;
        case document.getElementById("ok").value:
            serviceAmount = .10;
            break;
        case document.getElementById("terrible").value:
            serviceAmount = .05;
            break;
    }
    //Calculate Total and Round
    var total = (billTotal * serviceAmount) /numPeople;
    var total = total.toFixed(2);
    var each = "";
    if (numPeople > 1) {
        each = " each";
    }
    var totalOutput = "Tip Amount is $" + total + each;
    document.getElementById("Total").innerHTML = totalOutput;
    return;
}