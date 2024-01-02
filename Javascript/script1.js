function validateForm() {
    
    resetErrors();

    // Validate name
    var name = document.getElementById('name').value.trim();
    if (name === '') {
      displayError('nameError', 'Name is required');
      return;
    }

    // Validate email
    var email = document.getElementById('email').value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      displayError('emailError', 'Invalid email address');
      return;
    }

    // Validate message
    var message = document.getElementById('message').value.trim();
    if (message === '') {
      displayError('messageError', 'Message is required');
      return;
    }

    // If all validations pass, you can submit the form or perform other actions
    alert('Form submitted!');
    // You can add additional actions here, like AJAX requests, etc.
    
    // Reset the form
    document.getElementById('contactForm').reset();
  }

  function resetErrors() {
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = '';
    }
  }

  function displayError(id, message) {
    document.getElementById(id).textContent = message;
  }