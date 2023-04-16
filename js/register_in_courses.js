const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    const department = document.getElementById('department').value;
    const course1 = document.getElementById('course1').value;
    const course2 = document.getElementById('course2').value;
    const course3 = document.getElementById('course3').value;

    if (department === 'select' || course1 === 'select' || course2 === 'select' || course3 === 'select') {
        event.preventDefault();
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Please select a department and 3 courses.';
        errorMessage.style.color = 'red';
        form.appendChild(errorMessage);
    } else if (course1 === course2 || course1 === course3 || course2 === course3) {
        event.preventDefault();
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Please select 3 different courses.';
        errorMessage.style.color = 'red';
        form.appendChild(errorMessage);
    }
});

// show courses
const courses = {
    CS: ["CS321", "CS213", "CS101"],
    IS: ["IS213", "IS421", "IS236"],
    DS: ["DS221", "DS123", "DS012"],
    IT: ["IT521", "IT322", "IT644"],
    AI: ["AI621", "AI622", "AI200"],
};

const departmentDropdown = document.getElementById("department");
const course1Dropdown = document.getElementById("course1");
const course2Dropdown = document.getElementById("course2");
const course3Dropdown = document.getElementById("course3");

departmentDropdown.addEventListener("change", (event) => {
    const selectedDepartment = event.target.value;
    const coursesList = courses[selectedDepartment];

    course1Dropdown.innerHTML = '<option value="">Select Course</option>';
    course2Dropdown.innerHTML = '<option value="">Select Course</option>';
    course3Dropdown.innerHTML = '<option value="">Select Course</option>';

    // set new options
    for (let i = 0; i < coursesList.length; i++) {
        const course = coursesList[i];
        const option = document.createElement("option");
        option.value = course;
        option.text = course;
        course1Dropdown.appendChild(option);
        course2Dropdown.appendChild(option.cloneNode(true));
        course3Dropdown.appendChild(option.cloneNode(true));
    }
    option1.style.display = "block";
    option2.style.display = "block";
    option3.style.display = "block";
});

// trigger department change event on page load
const event = new Event("change");
departmentDropdown.dispatchEvent(event);



// local storage
function storeSelectedCourses() {
    const course1 = document.getElementById("course1").value;
    const course2 = document.getElementById("course2").value;
    const course3 = document.getElementById("course3").value;
    const department = document.getElementById("department").value;

    const departments = JSON.parse(localStorage.getItem("departments"));

    // Find the index of the selected department in the departments array
    const departmentIndex = departments.findIndex(
        (dept) => dept[0].startsWith(department)
    );

    departments[departmentIndex].push(course1, course2, course3);

    localStorage.setItem("departments", JSON.stringify(departments));
}
