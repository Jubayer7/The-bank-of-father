document.getElementById("submit-btn").addEventListener('click',function(){
    const userEmail = document.getElementById('user-eamil')
    const emailField = userEmail.value;

    // get user Password
    const userPassword = document.getElementById('user-password')
   const passwordField = userPassword.value;
  
   if ( emailField == 'sonnibai7@gmail.com' , passwordField== 'kuripara' ){
       window.location.href = 'banking.html'
   }
    
})