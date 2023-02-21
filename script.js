function validatePassword() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const errorMessage = document.querySelector('#password + span');

    if (password.value !== confirmPassword.value) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        errorMessage.hidden = false;
        password.setCustomValidity('Passwords do not match');
    }
    else if (password.value === confirmPassword.value) {
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        errorMessage.hidden = true;
    }
}

const confirmPasswordInput = document.getElementById('confirm-password');
confirmPasswordInput.addEventListener('input', validatePassword);