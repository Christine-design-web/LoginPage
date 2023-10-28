// Get the login form element
const loginForm = document.querySelector('.login');

// Add a submit event listener to the login form
loginForm.addEventListener('submit', async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the email, username, and password input values
    const email = document.querySelector('#email').value;
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // TODO: Validate the email, username, and password inputs
    // You should implement your validation logic here

    // TODO: Send a login request to the server using fetch or XMLHttpRequest
    // You should make an API request to your server for user authentication

    // Simulating a successful login for demonstration
    const loginSuccessful = true; // Change this based on your actual login logic

    if (loginSuccessful) {
        // Redirect the user to the dashboard page if the login is successful
        window.location.href = 'https://github.com/Christine-design-web'; // Replace with the actual dashboard URL
    }
});

// Add a "change" event listener to the "forgot password" checkbox
// Get the password reset form and modal elements
const passwordResetForm = document.getElementById('password-reset-form');
const passwordResetModal = document.getElementById('password-reset-modal');

// Add a submit event listener to the password reset form
passwordResetForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get the email entered in the reset form
    const resetEmail = document.querySelector('#reset-email').value;

    // TODO: Implement password reset logic here (e.g., send a reset email to the user's email address)

    // For demonstration, you can show an alert when the reset form is submitted
    alert(`A password reset email has been sent to ${resetEmail}`);

    // Hide the password reset modal
    passwordResetModal.style.display = 'none';
});

// Add a "change" event listener to the "forgot password" checkbox
const forgotPasswordCheckbox = document.querySelector('#forgot_password');
forgotPasswordCheckbox.addEventListener('change', (event) => {
    // Get the modal or form element for password reset
    const passwordResetModal = document.querySelector('#password-reset-modal');

    // If the checkbox is checked, show the modal or form
    if (event.target.checked) {
        passwordResetModal.style.display = 'block';
    } else {
        // If the checkbox is unchecked, hide the modal or form
        passwordResetModal.style.display = 'none';
    }
});

