
let storedCourses = JSON.parse(localStorage.getItem("courses")) || [];

let coursesID=[];
for(let i=0;i<storedCourses.length;i++){
    coursesID.push(storedCourses[i].id);
}
const myButton = document.getElementById("add");
myButton.addEventListener("click", function(e) {
    e.preventDefault();
    alert("Course added successfully!");
    // Get form values
    const courseName = document.getElementById("courseName").value;
    const courseID = document.getElementById("courseID").value;
    const courseHours = document.getElementById("courseHours").value;
    const department = document.getElementById("department").value;
    const lectureDay = document.getElementById("lecDay").value;
    const hallNumber = document.getElementById("hNumber").value;
    
    // Create an object to store the form data
    let course3 = {
        name: courseName,
        id: courseID,
        department: department,
        number_of_hours: JSON.stringify(courseHours),
        lecture_day: lectureDay,
        hall_number: hallNumber
    };
    storedCourses.push(course);
    // Save the form data to local storage
    localStorage.setItem("courses", JSON.stringify(storedCourses));

    var departments =JSON.parse(localStorage.getItem('departments'));
        
    if(depart=="cs"){
        departments[0].push(courseID);
    }
    if(depart=="IS"){
        departments[1].push(courseID);
    }
    if(depart=="OR"){
        departments[2].push(courseID);
    }
    if(depart=="IT"){
        departments[3].push(courseID);
    }
    if(depart=="AI"){
        departments[4].push(courseID);
    }
    localStorage.setItem('departments', JSON.stringify(departments));
    
    // Reload the page
    //location.reload();
});



/*
let storedCourses = JSON.parse(localStorage.getItem("courses")) || [];

function validInputs(){
    const cName = document.getElementById("courseName").value;
    var letters = /^[A-Za-z]+[0-9]?$/;
    if(!cName.match(letters) ){
        document.getElementById("cNameError").innerText="Invalid Name:\nThe name must start with letters "; 
        document.getElementById("cNameError").style.display = "block";
        document.getElementById("courseName").focus();
        return false;
    }

    var id=document.getElementById("courseID").value; 
    var m =/^([a-zA-Z])+([0-9])+$/
    if (!id.match(m)){  
        document.getElementById("idError").innerText="Invalid ID:\nID must start with letters followed by numbers"; 
        document.getElementById("idError")
        document.getElementById("courseID").focus();
        return false;  
    } 
    if(coursesID.includes(id)){
        document.getElementById("idError").innerText="Invalid ID:\nThere is a course with this ID"; 
        document.getElementById("idError").style.display = "block";
        document.getElementById("courseID").focus();
        return false;
    }

    var department = document.getElementById("department").value;
    if (department == null) {
        document.getElementById("departmentError").innerText="Please select a department.";
        document.getElementById("departmentError").style.display = "block";
        document.getElementById("department").focus();
        window.scroll(10,10);
        return false;
    }
    return true;
}

function store() {
    var form=document.getElementById("form");
    if(1){
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

const myButton = document.getElementById("add");

myButton.addEventListener("click", function(e) {
    alert("added");
    e.preventDefault();
    if(store()){
        alert("added");
        //location.reload();
    }
});


*/
