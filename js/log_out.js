let logged_user_value1 = localStorage.logged_user;

let nav = document.getElementById('menu');

if(logged_user_value1 == "-1"){
    nav.classList.add('hidden');

}else if(isNaN(logged_user_value1) && logged_user_value1.length == 8 || (/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/).test(logged_user_value1) || logged_user_value1 == 0){
    nav.classList.remove('hidden');

}

let log_out_button = document.getElementById('log_out');

log_out_button.addEventListener('click', () => {

    localStorage.logged_user = '-1';
    document.getElementById('log_out').classList.add('hidden');
    document.getElementById('menu').classList.add('hidden');
});
// }
