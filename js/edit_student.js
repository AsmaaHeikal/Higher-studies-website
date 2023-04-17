let students =JSON.parse(localStorage.getItem('students')) || []

let selectedS = localStorage.getItem('editStudent');

function retrieveData(){
document.getElementById('name').value = selectedS.name;
document.getElementById('id').value = selectedS.id;
document.getElementById('department').value = selectedS.department;
document.getElementById('university').value = selectedS.university;
document.getElementById('email').value = selectedS.email;
document.getElementById('GPA').value = selectedS.gpa;
document.querySelector('input[name="status"]:checked').value = selectedS.status;
document.querySelector('input[name="gender"]:checked').value = selectedS.gender;

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
    students[indx].status= document.querySelector('input[name="status"]:checked').value;
    students[indx].gender= document.querySelector('input[name="gender"]:checked').value;
    localStorage.setItem('students',JSON.stringify(students));

}

let myButton = document.getElementById('edit');
myButton.addEventListener("click", function(e){
    modify();
});

