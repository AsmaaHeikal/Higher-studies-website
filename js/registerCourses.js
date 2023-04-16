addData();
function getStudentCourses(){
    let data = localStorage.getItem('students');
    let students = JSON.parse(data);
    for(i = 0; i < students.length; i++){
        if(students[i]['name'] == "Ahmed Ghaly Yousse"){ // TBD untill they add login session
            return (JSON.parse(students[i].courses));
        }
    }
 }
function getCourseName(CourseId){
    let data = localStorage.getItem('courses');
    let courses = JSON.parse(data);
    for(j = 0; j < courses.length; j++){
        if(courses[j]['id'] == CourseId){
            return courses[j]['name'];
        }
    }
}
function getCourseHours(CourseId){
    let data = localStorage.getItem('courses');
    let courses = JSON.parse(data);
    for(j = 0; j < courses.length; j++){
        if(courses[j]['id'] == CourseId){
            return courses[j]['number_of_hours'];
        }
    }
}
 function addData(){
    let studentCourses = getStudentCourses();
  
    for(i = 0; i < studentCourses.length; i++){
        let courseId = Object.keys(studentCourses[i]);
        let courseName = getCourseName(courseId[0]);
        let courseHours = getCourseHours(courseId[0]);
        let courseMarks = studentCourses[i][courseId].split(',')[0];
        let finalMarks = studentCourses[i][courseId].split(',')[1];
        let totalMarks = (+courseMarks) + (+finalMarks); // unary operator to sum two strings
        addRow(courseId[0], courseName, courseHours, courseMarks, finalMarks, totalMarks);
    }
 }
 
function addRow(courseId, courseName, courseHours, courseMarks, finalMarks, totalMarks) {

    // Get extra data
    let coursesArray = JSON.parse(localStorage.getItem('courses'));
    let department, lecture_day, hall_number;
    for(j = 0; j < coursesArray.length; j++){
        if(coursesArray[j]['id'] == courseId){
            department = coursesArray[j]['department'];
            lecture_day = coursesArray[j]['lecture_day'];
            hall_number = coursesArray[j]['hall_number'];
        }
    }

    //-----------------------------
    let body = document.getElementById('mainTableBody');

    body.innerHTML += 
    `
    <tr class = "parent">
        <td>${courseId}</td>
        <td>${courseName}</td>
        <td>${courseHours}</td>
        <td>${courseMarks}</td>
        <td>${finalMarks}</td>
        <td>${totalMarks}</td>
        <td><button class="expand-button" ><i class="fa fa-plus "></i></button></td>
        <div class = "expanded-div" , style="display:none;">
            <p>Department :  ${department}</p>
            <p> Lecture Day : ${lecture_day}</p>
            <p>Hall Number : ${hall_number}</p>
        </div>
    </tr>
    
    `;
 }

// Select all buttons with class "expand-button"
var buttons = document.querySelectorAll('.expand-button');

// Loop through all buttons and add event listeners
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Find the next div and toggle its display style property
    var div = this.parentNode.parentNode.nextSibling;
    if (div.style.display === 'block') {
      div.style.display = 'none';
    } else {
      div.style.display = 'block';
    }
  });
});

