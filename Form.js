const btn = document.getElementById("showData");
const firstName=document.getElementById("firstName")
const lastName=document.getElementById("lastName")
const age=document.getElementById("age")
const email=document.getElementById("mail")
const course=document.getElementById("course")


btn.addEventListener(("click"),()=>{
    console.log("First Name:", firstName.value);
    console.log("Last Name:", lastName.value);
    console.log("Email:", email.value);
    console.log("Age:", age.value);
    console.log("Course:", course.value);
})