let header = ` <nav>
<img src="" alt="">
<h2><a href = "home.html">FCAI CU</a></h2>
<ul id="right">
    <li> <a href="home.html" class = "left-right-border-effect">Home</a></li>
    <li>
        <a href="" class = "left-right-border-effect">Login</a>
        <ul class = "dropdown-content">
            <li><a href="login_student.html">Student</a></li>
            <li><a href="login_admin.html">Admin</a></li>
        </ul>
    </li>

    <li id = "menu">
        <a href="" class = "left-right-border-effect" >Menu</a>
        <ul class = "dropdown-content">
            <li class = "student-only"><a href="register_in_courses.html">Register in a Course</a></li>
            <li class = "student-only"><a href="registered_courses.html">Registered Courses</a></li>
            <li class = "admin-only"><a href="add_Student.html">Add a Student</a></li>
            <li class = "admin-only"><a href="search.html">Search in Students</a></li>
            <li class = "admin-only"><a href="edit_student.html">Edit Student</a></li>
            <li class = "admin-only"><a href="add _course.html">Add Course</a></li>
        </ul>
    </li>
    <li>
    <a href="about.html" class = "left-right-border-effect">About</a>
    </li>
    <li  class="hidden" id="log_out">
        <a class = "left-right-border-effect" >Logout</a>
    </li>

</ul>
</nav>`;
document.getElementById('website-header').innerHTML = header;
let log_out_button = document.getElementById('log_out')

if(localStorage.logged_user != "-1"){
    document.getElementById('log_out').classList.remove('hidden');
}



// !(/^[a-zA-Z0-9]+$/.test(localStorage.logged_user))
if(localStorage.logged_user != 0 && (/^[a-zA-Z0-9]+$/.test(localStorage.logged_user))){
    // document.getElementById('menu').classList.remove('hidden');
    
    let studentMenuOptions = document.getElementsByClassName('student-only');
    for(let i = 0; i < studentMenuOptions.length; i++){
        studentMenuOptions[i].classList.add('hidden');
    }

}else if(localStorage.logged_user != 0 && (!isNaN(localStorage.logged_user) && localStorage.logged_user.length == 8)){

    let adminMenuOptions = document.getElementsByClassName('admin-only');
        for(let i = 0; i < adminMenuOptions.length; i++){
            adminMenuOptions[i].classList.add('hidden');
        }

}else if(localStorage.logged_user == 0 && (/^[a-zA-Z0-9]+$/.test(sessionStorage.logged_user))){
    let studentMenuOptions = document.getElementsByClassName('student-only');
    for(let i = 0; i < studentMenuOptions.length; i++){
        studentMenuOptions[i].classList.add('hidden');
    }

}else if(localStorage.logged_user == 0 &&  (!isNaN(sessionStorage) && sessionStorage.length == 8)){
    let adminMenuOptions = document.getElementsByClassName('admin-only');
    for(let i = 0; i < adminMenuOptions.length; i++){
        adminMenuOptions[i].classList.add('hidden');
    }
}

log_out_button.addEventListener('click', () => {
    // Redirecting to the home page
    let current = window.location.href;
    window.location.href = current.substring(0,current.lastIndexOf('/')) + '/home.html';

    localStorage.logged_user = '-1';
    document.getElementById('log_out').classList.add('hidden');
    document.getElementById('menu').classList.add('hidden');
});