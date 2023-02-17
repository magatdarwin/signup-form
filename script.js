function validatePassword() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const errorMessage = document.querySelector('#password + span');

    if (password.value !== confirmPassword.value) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        errorMessage.hidden = false;
        passwordValid = false;
    }
    else if (password.value === confirmPassword.value) {
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        errorMessage.hidden = true;
        passwordValid = true;
    }
}

let passwordValid = false;
const confirmPasswordInput = document.getElementById('confirm-password');
confirmPasswordInput.addEventListener('input', validatePassword);

const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', e => {
    if (passwordValid === false) {
        e.preventDefault();
        alert("Passwords do not match");
    }
});