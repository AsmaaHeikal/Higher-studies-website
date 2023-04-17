// validate choosing 3 different courses and department 
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

// const selectedDepartment = event.target.value;

departmentDropdown.addEventListener("change", (event) => {
    selectedDepartment = event.target.value;
    const coursesList = courses[selectedDepartment];

    course1Dropdown.innerHTML = '<option value="">Select Course</option>';
    course2Dropdown.innerHTML = '<option value="">Select Course</option>';
    course3Dropdown.innerHTML = '<option value="">Select Course</option>';

    // set new options
    for (let i = 0; i < coursesList.length; i++) {
        const course = coursesList[i];
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        const option3 = document.createElement("option");
        option1.value = course;
        option1.text = course;
        option2.value = course;
        option2.text = course;
        option3.value = course;
        option3.text = course;
        course1Dropdown.appendChild(option1);
        course2Dropdown.appendChild(option2);
        course3Dropdown.appendChild(option3);
    }
    option1.style.display = "block";
    option2.style.display = "block";
    option3.style.display = "block";
});

const event = new Event("change");
departmentDropdown.dispatchEvent(event);

// Retrieve the user's ID from either session or local storage
let userId;
if (logged_user == 0) {
  userId = sessionStorage.getItem('userId');
} else {
  userId = localStorage.getItem('userId');
}
// Retrieve the user's profile from local storage
const users = JSON.parse(localStorage.getItem('students'));
const userIndex = users.findIndex(user => user.id === userId);
const user = users[userIndex];

// Update the courses 
courses = [course_and_marks, course_and_marks2, course_and_marks3];
user.courses = JSON.stringify(courses);

users[userIndex] = user;
localStorage.setItem('students', JSON.stringify(users));

// Retrieve the name and ID of the user from local storage and display them 
const userIdField = document.getElementById('userIdField');
const nameField = document.getElementById('nameField');

userIdField.textContent = 'ID: ' + user.id;
nameField.textContent = 'Name: ' + user.name;
