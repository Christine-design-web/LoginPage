// Get the login form element
const loginForm = document.querySelector('.login');

// Get the "forgot password" checkbox element
const forgotPasswordCheckbox = document.querySelector('#forgot-password');

// Add a submit event listener to the login form
loginForm.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the email, username, and password input values
    const email = document.querySelector('#email').value;
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // TODO: Validate the email, username, and password inputs

    // TODO: Send a login request to the server using fetch or XMLHttpRequest

    // Redirect the user to the dashboard page if the login is successful
    window.location.href = 'index.html';
});

// Add a "change" event listener to the "forgot password" checkbox
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
