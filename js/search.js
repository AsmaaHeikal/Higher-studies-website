// Retrieve students data from localStorage
let students = JSON.parse(localStorage.getItem('students'));

// Get a reference to the table element
const tableBody = document.querySelector('tbody');

// Loop through the students array and add them to the table
students.forEach(function(student) {
  // Create a new table row
  const newRow = document.createElement('tr');

  // Add the student data to the row
  newRow.innerHTML = `
    <td>${student.name}</td>
    <td>${student.id}</td>
    <td>${student.Status}</td>
    <td>${student.gpa}</td>
    <td>${student.email}</td>
    <td class="button-container">
      <a href="edit_student.html" data-student='${JSON.stringify(student)}'>
        <i class="fas fa-edit"></i>
      </a>
      <button class="delete" data-studentid="${student.id}"><i class="fas fa-trash"></i></button>
    </td>
  `;
  // Add the new row to the table body
  tableBody.appendChild(newRow);
});

document.addEventListener('click', function(event) {
    // Check if the clicked element is the edit button
    if (event.target.classList.contains('fa-edit')) {
      // Get the student data from the data-student attribute
      const editStudent = JSON.parse(event.target.parentElement.dataset.student);
      // Save the student data to localStorage
      localStorage.setItem('editStudent', JSON.stringify(editStudent));
    }
});

document.addEventListener('click', function(event) {
      // Check if the clicked element is the delete button
  if (event.target.classList.contains('fa-trash')) {
    // Get the student id from the data-studentid attribute
    const studentId = event.target.parentElement.dataset.studentid;
    // Get the students array from localStorage
    let students = JSON.parse(localStorage.getItem('students'));
    // Filter out the student with the matching id
    students = students.filter(function(student) {
      return student.id !== studentId;
    });
    // Save the updated students array to localStorage
    localStorage.setItem('students', JSON.stringify(students));
    // Remove the row from the table
    event.target.parentElement.parentElement.parentElement.remove();
  }
});
