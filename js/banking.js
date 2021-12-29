document.getElementById('deposite-btn').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input')
    console.log(depositInput);
   const newDepositAmount = parseFloat(depositInput.value)

//    Add amount to deposit
   const depositTotal = document.getElementById('deposit-total')
   console.log(depositTotal);
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

document.getElementById('withdraw-btn').addEventListener('click', function(){

    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmount = parseFloat(withdrawInput.value)
    
    const PreviousAmount = document.getElementById('withdraw-total')
    const withdrawTotal = parseFloat(PreviousAmount.innerText)

    const totalWithdraw = withdrawTotal + withdrawAmount;

    PreviousAmount.innerText =totalWithdraw;

    // reduce total balance
    
    const totalBalanceText = document.getElementById('total-balance')
    console.log(totalBalanceText)
    const preTotalBalance= parseFloat(totalBalanceText.innerText)
    console.log(preTotalBalance)
    const currentTotalBalance = preTotalBalance - withdrawAmount;

    totalBalanceText.innerText = currentTotalBalance;



    // remove input field
    withdrawInput.value = '';
})