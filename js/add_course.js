let storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
let coursesID=[];
for(let i=0;i<storedCourses.length;i++){
    coursesID.push(storedCourses[i].id);
}

function validInputs(){
    const cName = document.getElementById("courseName").value;
    var letters = /^[A-Za-z]+[0-9]?$/;
    if(!cName.match(letters) ){
        alert("Invalid Name:\nThe name must start with letters "); 
        document.getElementById("courseName").focus();
        return false;
    }

    var id=document.getElementById("courseID").value; 
    var m =/^([a-zA-Z])+([0-9])+$/
    if (!id.match(m)){  
        //document.getElementById("wrongInput").innerText=
        alert("Invalid ID:\nID must start with letters followed by numbers"); 
        document.getElementById("courseID").focus();
        return false;  
    } 
    if(coursesID.includes(id)){
        //document.getElementById("wrongInput").innerText=
        alert("Invalid ID:\nThere is a course with this ID"); 
        document.getElementById("courseID").focus();
        return false;
    }

    var department = document.getElementById("department").value;
    if (department == null) {
        alert("Please select a department.");
        document.getElementById("department").focus();
        window.scroll(10,10);
        return false;
    }
    return true;
}

function store() {
    var form=document.getElementById("form");
    if(validInputs()){
        const cName = document.getElementById("courseName").value;
        const cID = document.getElementById("courseID").value;
        const cHours = document.getElementById("courseHours");
        const depart = document.getElementById("department").value;
        const hlNumber = document.getElementById("hNumber").value;
        const lecDay = document.getElementById("lecDay").value;
        let newCourse = {
            name: cName,
            id: cID,
            department: depart,
            number_of_hours: JSON.stringify(cHours),
            lecture_day: lecDay,
            hall_number: JSON.stringify(hlNumber)
        };

        storedCourses.push(newCourse);
        localStorage.setItem("courses", JSON.stringify(storedCourses));
        
        var departments =JSON.parse(localStorage.getItem('departments'));
        
        if(depart=="Computer Science"){
            departments[0].push(cID);
        }
        if(depart=="Information System"){
            departments[1].push(cID);
        }
        if(depart=="Operation Research"){//in local storage = DS?
            departments[2].push(cID);
        }
        if(depart=="Information Technology"){
            departments[3].push(cID);
        }
        if(depart=="Artificial Intelligence"){
            departments[4].push(cID);
        }
        localStorage.setItem('departments', JSON.stringify(departments));
    // array_of_department[0]->CS which is an 1d array of strings(IDs of courses)
    // [1]->IS 
    // [2]->DS
    // [3]->IT
    // [4]->AI
        return true;
    }   
    else{
        return false;
    }
}  

const myButton = document.getElementById("submit");

myButton.addEventListener("click", function(e) {
    e.preventDefault();
    if(store()){
        location.reload();
    }
});


/**
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(cName == "sama"){
        
    }
 */

