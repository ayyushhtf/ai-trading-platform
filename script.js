function login(){

let pass=document.getElementById("password").value;

if(pass=="Ayush"){
alert("Login Successful");
}else{
document.getElementById("msg").innerHTML="Wrong Password";
}

}
