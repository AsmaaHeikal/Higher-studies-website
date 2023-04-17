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

</ul>
</nav>`;

document.getElementById('website-header').innerHTML = header;
let logged_user_value = localStorage.logged_user;
alert(logged_user_value);

// let studentMenuOptions = document.getElementsByClassName('student-only');
// let adminMenuOptions = document.getElementsByClassName('student-only');

// function checkIfStudent(id){
//    return(isNaN(id) || id.length != 8);
// }
// if(checkIfStudent(localStorage.getItem('logged_user'))){
//     alert("lol");
// }
