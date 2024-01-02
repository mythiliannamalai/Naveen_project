function validateEmail() {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    
    // Reset previous error message
    emailError.textContent = '';

    // Validate email
    var email = emailInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      emailError.textContent = 'Invalid email address. Please enter a valid email.';
      return;
    }

  
    alert("Valid Data")
   document.getElementById('emailForm').reset();
   
  }

  