
# Schema of Data

## Student (key-Value pairs)
<!-- <pre> -->
```js
{
    name: "mina",
    id:"",
    date_of_birth:,
    university:,
    gender:,
    department:,
    status:,
    courses: "id ": "12,13",//(final,coursework)
    pass: "",
    gpa:""
}

```
# Admin
```js
{
    username:"",
    pass: ""
}

```
<!-- </pre> -->

## Course (key-calue pairs)
```js
{
    name:" ",
    id: " ",
    department: " ",
    number_of_hours: ,
    lecture_day: " ",
    hall_number : " "
}
```
# Department (array)
```
 [id1, id2, id3, id4, id5, id6, id7] // IDs of courses
```

## localStorage
```js
{
    students: "",
    admins: "",
    coures: "",
    departments: "",
    logged_user: "", 
                // "0"-> for sessionstorage
                // "-1" -> if no one is already logged in the website!
                // numeric -> student (8-digit number)
                // alphanumeric -> admin 
    saved: ""
        // "0" -> for sessionstorage 
        // "1" -> localStorage

}
```
 ## sessionStorage (Use only when remember me option is not checked )
 ```js
 {
 id: ""
 }
