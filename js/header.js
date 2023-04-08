let header = ` <nav>
<img src="" alt="">
<h2><span>FCAI CU</span></h2>
<ul id="right">
    <li> <a href="home.html">Home</a></li>
    <li>
        <a href="">Login</a>
        <ul class = "dropdown-content">
            <li><a href="login_student.html">Student</a></li>
            <li><a href="login_admin.html">Admin</a></li>
        </ul>
    </li>

    <li>
        <a href="">Menu</a>
        <ul class = "dropdown-content">
            <li class = "student-only"><a href="register_in_courses.html">Register in a Course</a></li>
            <li class = "student-only"><a href="registered_courses.html">Registered Courses</a></li>
            <li class = "admin-only"><a href="add_Student.html">Add a Student</a></li>
            <li class = "admin-only"><a href="search.html">Search in Students</a></li>
            <li class = "admin-only"><a href="edit_student.html">Edit Student</a></li>
        </ul>
    </li>

</ul>
</nav>`;

document.getElementById('website-header').innerHTML = header;
