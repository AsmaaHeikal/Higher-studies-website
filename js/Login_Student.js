// validate ID and Password
// logged_user = -1;
// var loggedUser = 1;
function validateLoginForm() {
    const form = document.querySelector('form');
    const idField = document.querySelector('input[type="text"]');
    const passField = document.querySelector('input[type="password"]');
    let isValid = true;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const idValue = idField.value;
        const passValue = passField.value;

        if (isNaN(idValue) || idValue.length != 8) {
            alert('Please enter a valid ID.');
            isValid = false;
        }

        if (passValue.length < 8 || !/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(passValue)) {
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
});


// // if login is valid and user clicks on "remember me" button
let rememberMeCheckbox = document.getElementById('remember-me');

    
const IdField = document.querySelector('input[type="text"]');
const passwordField = document.querySelector('input[type="password"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let rememberMeCheckbox = document.getElementById('remember-me');
    let idValue1 = document.querySelector('input[type="text"]').value;
    var check = rememberMeCheckbox.checked;
    if (check == 1) {

        localStorage.setItem('logged_user', idValue1);
    } else {
        localStorage.setItem('logged_user', 0);
        sessionStorage.setItem('logged_user', idValue1);
    }

    // let log_out_button = document.getElementById('log_out');
    document.getElementById('log_out').classList.remove('hidden');
    // document.getElementById('log_out').classList.remove('hidden');
    document.getElementById('menu').classList.remove('hidden');

    document.getElementById('menu').classList.remove('hidden');
    alert(menu.innerHTML);
    let adminMenuOptions1 = Array.from(document.getElementsByClassName('admin-only'));   
    alert(adminMenuOptions1);
    for(let i = 0; i < adminMenuOptions1.length; i++){
        console.log(i);
        adminMenuOptions1[i].classList.add('hidden');
    }
   
});
