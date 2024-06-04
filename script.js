window.onload = () => {
    let year = new Date().getFullYear();
    document.getElementById('year').innerHTML = year;
}
const inputvalue = (id) =>{
    return document.getElementById(id).value;
}
const login = () => {
    event.preventDefault();
 let fullname = inputvalue("fullname")
 let  email =   inputvalue("email")
 let fullpassword= inputvalue("password")
 if(fullname.length < 3) {
    alert("Please enter a valid name")
 }
 document.getElementById("loginbutton").style.display = "none"
 document.getElementById("logincard").style.display = "none"
 document.getElementById("homepage").style.display = "block"
 document.getElementById("logoutbutton").style.display = "block"
 document.getElementById("namepreview").innerHTML = fullname;
 document.getElementById("footer1").style.display = "none"


}