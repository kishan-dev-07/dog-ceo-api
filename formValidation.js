document.addEventListener('DOMContentLoaded', () => {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const dob = document.getElementById('dob');
    const submitBtn = document.getElementById('submitBtn');

    // Username validation
    username.addEventListener('input', () => {
        const regex = /^[A-Za-z\s]{3,}$/;
        validateField(username, regex.test(username.value), 'usernameError');
    });

    // Email validation
    email.addEventListener('input', () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        validateField(email, regex.test(email.value), 'emailError');
    });

    // Password validation
    password.addEventListener('input', () => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        validateField(password, regex.test(password.value), 'passwordError');
        validatePasswordsMatch();
    });

    // Confirm Password validation
    confirmPassword.addEventListener('input', () => {
        validatePasswordsMatch();
    });

    // Date of Birth validation
    dob.addEventListener('input', () => {
        const isValid = calculateAge(dob.value) >= 18;
        validateField(dob, isValid, 'dobError');
    });

    // Form submission validation
    document.getElementById('signupForm').addEventListener('submit', (e) => {
        e.preventDefault();
        if (isFormValid()) {
            alert('Form submitted successfully!');
        }
    });

    // Validate individual field
    function validateField(field, isValid, errorId) {
        const errorElement = document.getElementById(errorId);
        if (isValid) {
            field.classList.remove('invalid');
            field.classList.add('valid');
            errorElement.classList.add('hidden');
        } else {
            field.classList.remove('valid');
            field.classList.add('invalid');
            errorElement.classList.remove('hidden');
        }
        toggleSubmitButton();
    }

    // Validate if passwords match
    function validatePasswordsMatch() {
        const isValid = password.value === confirmPassword.value && password.value !== '';
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        if (isValid) {
            confirmPassword.classList.remove('invalid');
            confirmPassword.classList.add('valid');
            confirmPasswordError.classList.add('hidden');
        } else {
            confirmPassword.classList.remove('valid');
            confirmPassword.classList.add('invalid');
            confirmPasswordError.classList.remove('hidden');
        }
        toggleSubmitButton();
    }

    // Calculate age based on DOB
    function calculateAge(dob) {
        const birthDate = new Date(dob);
        const ageDiff = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDiff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    // Enable/Disable submit button based on form validity
    function toggleSubmitButton() {
        submitBtn.disabled = !isFormValid();
    }

    // Check if the entire form is valid
    function isFormValid() {
        const validFields = document.querySelectorAll('.valid');
        return validFields.length === 5;
    }
});