let students =JSON.parse(localStorage.getItem('students')) || []

let selectedS = localStorage.getItem('editStudent');

function retrieveData(){
document.getElementById('name').value = selectedS.name;
document.getElementById('id').value = selectedS.id;
document.getElementById('department').value = selectedS.department;
document.getElementById('university').value = selectedS.university;
document.getElementById('email').value = selectedS.email;
document.getElementById('GPA').value = selectedS.gpa;
document.querySelector('input[name="status"]:checked').value = selectedS.Status;
document.querySelector('input[name="gender"]:checked').value = selectedS.gender;

/*
let student1 = {
    name: "Ahmed Ghaly Yousse",
    id: "20211100",
    date_of_birth: "12/10/2002",
    university: "AUC",
    gender: "Male",
    email :"AhmedGhaly@gmail.com",
    department: "Information Systems",
    Status: "Active",
    courses: JSON.stringify([course_and_marks, course_and_marks2]),
    pass: "0000_BB",
    gpa: "2.8",

};
*/
}
function modify(){
    var indx=0;
    for(var i=0;i<length;i++){
        if(students[i].id==selectedS.id){
            indx = i;
            break;
        }
    }
    students[indx].name= document.getElementById('name').value;
    students[indx].id= document.getElementById('id').value;
    students[indx].department= document.getElementById('department').value;
    students[indx].university= document.getElementById('university').value;
    students[indx].email= JSON.stringify(document.getElementById('email').value);
    students[indx].gpa= document.getElementById('GPA').value ;
    students[indx].Status= document.querySelector('input[name="status"]:checked').value;
    students[indx].gender= document.querySelector('input[name="gender"]:checked').value;
    localStorage.setItem('students',JSON.stringify(students));

}

let myButton = document.getElementById('edit');
myButton.addEventListener("click", function(e){
    modify();
});

