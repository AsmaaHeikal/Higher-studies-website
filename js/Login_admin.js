// username and password checking
logged_user = -1;
var loggedUser = 2;
function validateLoginForm() {
    const form = document.querySelector('form');
    const userField = document.querySelector('input[type="text"]');
    const passField = document.querySelector('input[type="password"]');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const userValue = userField.value;
        const passValue = passField.value;

        if (!/^[a-zA-Z0-9]+$/.test(userValue)) {
            alert('Please enter a valid username (alphanumeric).');
            return false;
        }

        if (passValue.length < 8 || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passValue)) {
            alert('Please enter a valid password.');
            return false;
        }

        form.submit();
        return true;
    });
}

// prevent user from submitting when the format is invalid
const submitBtn = document.querySelector('button[type="submit"]');
submitBtn.addEventListener('click', (event) => {
    if (!validateLoginForm()) {
        localStorage.setItem('logged_user', -1);
        event.preventDefault();
        return;
    }
});


// check if the id and password exist in local storage
// if the admin logged data is stored, set "logged_user" = ?
function searchLocalStorage(id, pass) {
    if (validateLoginForm()) {
        let admins = JSON.parse(localStorage.getItem('admins'));

        for (let i = 0; i < admins.length; i++) {
            if (admins[i].username === id && admins[i].pass === pass) {
                return true;
            }
        }
        return false;
    }
}

// if student data is not stored, prevent them from login
submitBtn.addEventListener('click', (event) => {
    
    if (!searchLocalStorage(userField.value, passField.value)) {
        alert('Username does not match password');
        event.preventDefault();
        return;
    }
    else {
        loggedUser = 1;
    }
});


// if login is valid and user clicks on "remember me" button
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


