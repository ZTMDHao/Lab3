function validateForm() {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
  
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!usernameInput.value.match(usernameRegex)) {
      console.log('Form submission failed: Invalid username');
      return false;
    }
  
    if (!emailInput.value.match(emailRegex)) {
      console.log('Form submission failed: Invalid email');
      return false;
    }
  
    if (passwordInput.value.length < 8) {
      console.log('Form submission failed: Password must be at least 8 characters long');
      return false;
    }
  
    console.log('Form submitted successfully');
    return true;
  }
  