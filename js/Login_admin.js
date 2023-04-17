window.onload = function() {
    // username and password checking
localStorage.setItem('logged_user', '-1');
// var loggedUser = 2;
// const form = document.querySelector('form');
// const userField = document.querySelector('input[type="text"]');
// const passField = document.querySelector('input[type="password"]');
function validateLoginForm() {
    const form = document.querySelector('form');
    const userField = document.querySelector('input[type="text"]');
    const passField = document.querySelector('input[type="password"]');
    let isValid = true;
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const userValue = userField.value;
        const passValue = passField.value;

        if (!/^[a-zA-Z0-9]+$/.test(userValue)) {
            alert('Please enter a valid username (alphanumeric).');
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
        localStorage.setItem('logged_user', -1);
        event.preventDefault();
        return;
    }
});


// check if the id and password exist in local storage
// if the admin logged data is stored, set "logged_user" = ?
const form = document.querySelector('form');
const userField = document.querySelector('input[type="text"]');
const passField = document.querySelector('input[type="password"]');
const userValue = document.querySelector('input[type="text"]').value;
const passValue = passField.value;
function searchLocalStorage(userValue, passValue) {
    if (validateLoginForm()) {
        // alert(userValue + ' ' + passValue);
        let admins = JSON.parse(localStorage.getItem('admins'));

        for (let i = 0; i < admins.length; i++) {
            // alert(admins[i]);
            if (admins[i].username === userValue && admins[i].pass === passValue) {
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
    
});


// // if login is valid and user clicks on "remember me" button

// rememberMeCheckbox.addEventListener('click', () => {
    //     check = 1;
    // });
    // alert(check);
    
// const userField = document.querySelector('input[type="text"]');
// const passwordField = document.querySelector('input[type="password"]');
// var check = rememberMeCheckbox.checked;
// alert(Object.keys(localStorage));
form.addEventListener('submit', (event) => {
    let rememberMeCheckbox = document.getElementById('remember-me');
    let check = rememberMeCheckbox.checked;
    const userValue1 = document.querySelector('input[type="text"]').value;
    // alert(check);
    if (check) {
        alert(check);
        alert(typeof(userValue1));
        localStorage.setItem('logged_user', userValue1);
        // localStorage.setItem('logged_user', use)
        alert(ocalStorage.logged_user  + '231');
        alert(userValue1);
    } else {
        localStorage.setItem('logged_user', 0);
        sessionStorage.setItem('logged_user', userValue1);
    }
    

});



};