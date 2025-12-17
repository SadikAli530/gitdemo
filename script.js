const myForm = document.getElementById('login-form');

myForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  let errorMessage = "";

  // Custom Logic: Check if password contains a number
  const hasNumber = /\d/.test(password);

  if (!email.includes('@')) {
    errorMessage = "Please enter a valid email.";
  } else if (password.length < 8 || !hasNumber) {
    errorMessage = "Password must be 8+ characters and include a number.";
  }

  if (errorMessage) {
    alert("Error:"+ errorMessage);
    // You could also display this in a <div> on your page
    
  } else {
    console.log("Form is valid! Submitting...");
     myForm.submit(); // Proceed with submission
    }
});
