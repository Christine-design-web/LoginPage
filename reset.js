document.addEventListener('DOMContentLoaded', function () {
    const resetForm = document.querySelector('.password-reset');

    resetForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const resetToken = document.querySelector('#reset-token').value;
        const newPassword = document.querySelector('#new-password').value;

        // TODO: Implement the code to send the reset token and new password to your server for verification and password update.

        // After successful password reset, you can redirect the user to a login page or a confirmation page.
        window.location.href = 'https://github.com/Christine-design-web'; // Replace with the actual login page URL.
    });
});
