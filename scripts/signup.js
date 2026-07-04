const formInputs = document.querySelectorAll('.input-form');
const signupForm = document.getElementById('signup-form');

function formValidation(e) {
    formInputs.forEach((input) => {
        if (input.value === '') {
            e.preventDefault();
            alert('Fill in all fields');
        }
    });
}

signupForm.addEventListener('submit', formValidation);