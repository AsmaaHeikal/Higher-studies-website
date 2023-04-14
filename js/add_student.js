function validate_form(){
    let name = document.getElementById("name");
    var letters = /^[A-Za-z]+$/;
    if(!name.value.match(letters) ){
        alert("Invalid Name:\nName must contain only letters"); 
        document.getElementById("name").focus();
        window.scroll({top:1});
        return false;
    }

    var id=document.getElementById("id").value;  
    if (isNaN(id)){  
        alert("Invalid ID:\nID must contain only numbers"); 
        document.getElementById("id").focus();
        window.scroll({top:1});
        return false;  
    } 
    if(id.length != 8){
        alert("Invalid ID:\nID must be 8 digits long");
        document.getElementById("id").focus();
        window.scroll({top:1});
        return false;
    }

    var university = document.getElementById("university").value;
    if (university == "") {
        alert("Please select a university.");
        document.getElementById("university").focus();
        window.scroll({top:1});
        return false;
    }

    var department = document.getElementById("department").value;
    if (department == "") {
        alert("Please select a department.");
        document.getElementById("department").focus();
        window.scroll(50,50);
        return false;
    }

    var course1 = document.getElementById("c1").value;
    if (course1 == "") {
        alert("Please select a the first course.");
        document.getElementById("c1").focus();
        return false;
    }

    var course2 = document.getElementById("c2").value;
    if (course2 == "") {
        alert("Please select the second course.");
        document.getElementById("c2").focus();
        return false;
    }

    var course3 = document.getElementById("c3").value;
    if (course3 == "") {
        alert("Please select the third course.");
        document.getElementById("c3").focus();
        return false;
    }

    var c1 = document.getElementById("c1").value;
    var c2 = document.getElementById("c2").value;
    var c3 = document.getElementById("c3").value;

    if (c1 == c2 || c1 == c3 || c2 == c3) {
        alert("Please select different courses for each option.");
        return false;
    }
    return true;
}

function storeData() {
    var form=document.getElementById("form");
    if(validate_form()){
        let name = document.getElementById("name").value;
        let id = document.getElementById("id").value;
        let dateOfBirth = document.getElementById("DateOfBirth").value;
        let university = document.getElementById("university").value;
        let gender = document.querySelector('input[name="gender"]:checked').value;
        let department = document.getElementById("department").value;
        let status = document.querySelector('input[name="status"]:checked').value;
        let course1 = document.getElementById("c1").value;
        let course2 = document.getElementById("c2").value;
        let course3 = document.getElementById("c3").value;
    
        let data = JSON.parse(localStorage.getItem("data")) || [];
    
        let studentData = {
        name,
        id,
        dateOfBirth,
        university,
        gender,
        department,
        status,
        course1,
        course2,
        course3,
        };
    
        data.push(studentData);
    
        localStorage.setItem("data", JSON.stringify(data));
        return true;
    }   
    else{
        return false;
    }
}  

const form = document.getElementById('form');

form.addEventListener('submit', function() {
  location.reload();
});



  