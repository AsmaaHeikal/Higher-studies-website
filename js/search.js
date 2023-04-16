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

  const editLink = newRow.querySelector('a');
  editLink.addEventListener('click', function(event) {
    const studentData = JSON.parse(event.currentTarget.dataset.student);
    localStorage.setItem('studentData', JSON.stringify(studentData));
  });

  const deleteButton = newRow.querySelector('.delete');
  deleteButton.addEventListener('click', function(event) {
    localStorage.removeItem('students'.indexOf(student));
    newRow.remove();
  });
});
