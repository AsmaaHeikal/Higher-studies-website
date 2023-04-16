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
        console.log(courseId[0]);
        console.log(courseName);
        console.log(courseHours);
        console.log(courseMarks);
        console.log(finalMarks);
        console.log(totalMarks);
        addRow(courseId[0], courseName, courseHours, courseMarks, finalMarks, totalMarks);
    }
 }
 addData();
function addRow(courseId, courseName, courseHours, courseMarks, finalMarks, totalMarks) {

    let body = document.getElementById('mainTableBody');

    body.innerHTML += 
    `
    <tr>
        <td>${courseId}</td>
        <td>${courseName}</td>
        <td>${courseHours}</td>
        <td>${courseMarks}</td>
        <td>${finalMarks}</td>
        <td>${totalMarks}</td>
    </tr>
    `;
 }
