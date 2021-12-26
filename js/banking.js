document.getElementById('deposite-btn').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input')
   const newDepositAmount = parseFloat(depositInput.value)

//    Add amount to deposit
   const depositTotal = document.getElementById('deposit-total')
   const previousDepositText = parseFloat(depositTotal.innerText)
    const newDepositTotal = newDepositAmount + previousDepositText;

     depositTotal.innerText = newDepositTotal;


    //  Add to total balance
    const total = document.getElementById('total-balance')
    const currentTotalAmount = parseFloat(total.innerText);

    const totalBalance = currentTotalAmount +newDepositAmount ;
    
    total.innerText = totalBalance;



    //  remove input field
    depositInput.value = '';
 
})