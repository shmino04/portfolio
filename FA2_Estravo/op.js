function MyFunction() {

var firstName = document.getElementById("fname").value.trim();
var lastName = document.getElementById("lname").value.trim();
var email = document.getElementById("email").value.trim();
var pass = document.getElementById("pass").value.trim();
var phone = document.getElementById("phone").value.trim();
var gender = document.querySelector('input[name="gender"]:checked')?.value;
var bday = document.getElementById("bday").value.trim();
var course = document.getElementById("course").value.trim();
var agree = document.querySelector('input[name="agree"]:checked')?.value;








if (firstName !== "" && lastName !== "" && email !== "" && pass !=="" && phone !== "" && gender && bday !== "" && course !== "" && agree) {
    alert("Registration Successfully!");

        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("bday").value = "";
        document.getElementById("course").value = "";


        document.querySelectorAll('input[name="gender"]').forEach(radio => radio.checked = false);
        document.querySelectorAll('input[name="agree"]').forEach(checkbox => checkbox.checked = false);



} else {
    alert("Please fill in all required fields!");
    
}
    
}



