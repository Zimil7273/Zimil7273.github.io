var Name;
var Surname;
var Email;
var Passwd;
var Passwd1;
var logged;
function LogIn () {
    Email = document.getElementById("email").value;
    Passwd = document.getElementById("passwd").value;
    logged;
    if (Email == "" || Passwd == "") {
        alert("Invalid Username or Password");
        logged = false;
    }
    else{
        logged = true;
        console.log(Email, Passwd, logged);
        document.location='index.html';
    }
}

function Sign_in() {
    Name = document.getElementById("Name").value;
    Surname = document.getElementById("surname").value;
    Email = document.getElementById("email").value;
    Passwd = document.getElementById("passwd").value;
    Passwd1 = document.getElementById("passwd1").value;
    if (Email == "" || Passwd == "" || Name == "" || Surname == "" || Passwd1 == "" ) {
        alert("Invalid Username or Password");
        logged = false;
    }else {
        if(Passwd != Passwd1){
            alert("The password is not correct, try again");
            logged = false;
        }else{
            logged = true 
        }
    }
}
