const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, message) {
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling;
    div.className = 'invalid-feedback';
    div.innerText = message
}

function success(input) {
    input.className = 'form-control is-valid';
}

//Email Regex
function ValidateEmail(input) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value)) {
        success(input);
    } else if (input.value === '') {
        error(input, `${input.id} is required. Please fill correct.`)
    }
    else {
        error(input, 'Hatalı mail adresi girdiniz');
    }
}

function checkLenght(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} en az ${min} karakter olmalıdır`)
    } else if (input.value.length > max) {
        error(input, `${input.id} en fazla ${max} karakter olmalıdır`)
    } else {
        success(input);
    }
}

function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        error(input2, 'Paasswords are dont match')
    }
}

function checkRequired(inputs) {
    inputs.forEach(function (input) {
        if (input.value === '') {
            error(input, `${input.id} is required. Please fill correct.`)
        } else {
            success(input);
        }
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault(); //Varsayılanı iptal etmek. Form submit edilmeyecek
    checkRequired([username, email, password, repassword]);
    ValidateEmail(email);
    checkLenght(username, 8, 19);
    checkLenght(password, 8, 19);
    checkPasswords(password, repassword);

})