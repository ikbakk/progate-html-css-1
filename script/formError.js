const form = document.querySelector('.form-container');
const emailInput = document.querySelector('.input[type="email"]');
const messageInput = document.querySelector('.input[type="textarea"]');
const submitButton = document.querySelector('button[type="submit"]');
const errorMessage = document.querySelector('.error-message');

// Function to validate the form inputs and display the error message if needed
const validateForm = () => {
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (email === '' || message === '') {
    errorMessage.textContent = 'Please fill in all fields.';
    errorMessage.style.display = 'block';
    return false;
  }

  return true;
};

// Function to handle form submission
const handleSubmit = event => {
  event.preventDefault();

  if (validateForm()) {
    // Form is valid, perform submit actions here
    form.reset();
    errorMessage.style.display = 'none';
  }
};

// Add submit event listener to the form
form.addEventListener('submit', handleSubmit);
