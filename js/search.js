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
      <a href="edit_student.html">
        <i class="fas fa-edit"></i>
      </a>
      <button class="delete"><i class="fas fa-trash"></i></button>
    </td>
  `;

  // Add the new row to the table body
  tableBody.appendChild(newRow);
});
