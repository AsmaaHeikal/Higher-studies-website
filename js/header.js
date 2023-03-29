let header = `<img src="" alt="">
<span>FCAI CU</span>
<div>
    <a href="home.html"> Home</a>
    <!-- Login  -->
    <div class="dropdown-menu">
        <a href="">Login</a>
        <div class = "dropdown-content">
            <a href="login_student.html"><span> Student</span></a>
            <a href="login_admin.html"><span> Admin</span></a>
        </div>
    </div>

    <!-- Dropdown Menu -->
    <div class="dropdown-menu">
        <a href="">Menu</a>
        <div class="dropdown-content">
            <!-- For Student -->
            <a href="register_in_courses.html" class = "student-only"><span> Register in a Course</span></a>
            <a href="registered_courses.html" class = "student-only"><span>Registered Courses</span></a>

            <!-- For Admin -->
            <a href="add_Student.html" class = "admin-only"><span> Add a Student</span></a>
            <a href="search.html" class = "admin-only"><span>Search in Students</span></a>
            <a href="edit_student.html" class = "admin-only"><span>Edit Student</span></a>
        </div>
    </div>

</div>`;

document.getElementById('website-header').innerHTML = header;
