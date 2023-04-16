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
  