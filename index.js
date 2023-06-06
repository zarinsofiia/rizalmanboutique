let totalBajuKebaya=0;
let totalBajuMelayu=0;
let totalAmount=0;
let deposit=0;
let balance=0;
let quantityBajuKebaya=0;
let quantityBajuMelayu=0;
let custName;
let custAddress;
let contactNo;

function calculate()
{
    quantityBajuKebaya = document.getElementById("bajuKebaya").value;
    quantityBajuMelayu = document.getElementById("bajuMelayu").value;

    //display total
    totalBajuKebaya = quantityBajuKebaya * 140;
    totalBajuMelayu = quantityBajuMelayu * 150;
    totalAmount = totalBajuKebaya+ totalBajuMelayu;
    document.getElementById("totalAmount").value = "RM "+totalAmount;
     
}

function calcBalance()
{
    deposit = Number(document.getElementById("deposit").value);
    balance = deposit - totalAmount;
    document.getElementById("balance").value = "RM "+balance;  
}

function receipt()
{
    custName = document.getElementById("custName").value;
    custAddress = document.getElementById("custAddress").value;
    contactNo = document.getElementById("contactNo").value;
    
        window.confirm("Here is your RECEIPT"+
                    "\nCustomer name: "+ custName +
                    "\nAddress: "+ custAddress +
                    "\nContact Number: " + contactNo +
                    "\n______________________________" +
                    "\nTotal Price: RM " + totalAmount +
                    "\nYour Balance: RM " + balance);
}
