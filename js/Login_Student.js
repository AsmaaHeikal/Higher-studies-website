// validate ID and Password
logged_user = -1;
var loggedUser = 1;
function validateLoginForm() {
    const form = document.querySelector('form');
    const idField = document.querySelector('input[type="text"]');
    const passField = document.querySelector('input[type="password"]');
    let isValid = true;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const idValue = idField.value;
        const passValue = passField.value;

        if (isNaN(idValue) || idValue.length !== 8) {
            alert('Please enter a valid ID.');
            isValid = false;
        }

        if (passValue.length < 8 || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passValue)) {
            alert('Please enter a valid password.');
            isValid = false;
        }

        if (isValid) {
            form.submit();
        }
    });

    return isValid;
}

// prevent user from submitting when the format is invalid
const submitBtn = document.querySelector('button[type="submit"]');
submitBtn.addEventListener('click', (event) => {
    if (!validateLoginForm()) {
        logged_user = -1;
        event.preventDefault();
        return;
    }
});


// // check if the id and password exist in local storage
// // if the student logged data is stored, set "logged_user" = ?
const form = document.querySelector('form');
const idField = document.querySelector('input[type="text"]');
const passField = document.querySelector('input[type="password"]');
const idValue = idField.value;
const passValue = passField.value;
function searchLocalStorage(idValue, passValue) {
    if (validateLoginForm()) {
        let students = JSON.parse(localStorage.getItem('students'));

        for (let i = 0; i < students.length; i++) {
            if (students[i].id === idValue && students[i].pass === passValue) {
                return true;
            }
        }
        return false;
    }
}

// // if student data is not stored, prevent them from login
submitBtn.addEventListener('click', (event) => {
    
    if (!searchLocalStorage(idField.value, passField.value)) {
        alert('ID does not match password');
        event.preventDefault();
        return;
    }
    else {
        loggedUser = 1;
    }
});


// // if login is valid and user clicks on "remember me" button
var check = 0;
const rememberMeCheckbox = document.querySelector('#remember-me');
rememberMeCheckbox.addEventListener('click', () => {
    check = 1;
});

if (check == 1) {
    localStorage.setItem('logged_user', 1);
} else {
    sessionStorage.setItem('logged_user', 0);
}
