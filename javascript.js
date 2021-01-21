 //Login Form
function form1(){
	var username=document.forms["loginform"]["username"].value;
       var pwd=document.forms["loginform"]["pwd"].value;
       
       

if((username==null || username=="") && (pwd==null ||pwd=="")){
  
        alert("Enter the Username and Password")
        return false;
}

if(username==null || username==""){
  
  alert("Enter the Username")
	return false;
}

if(pwd==null || pwd==""){
  
  alert("Enter the Password")
	return false;
}
if(username="shwetadinkale" && pwd=="Shweta@123"){
  alert('Correct Password!'); 
  location.href="Mainpage.html"
}



if(username != '' && pwd != ''){
	alert("Login successfully");
}



}


//Signup Form

var letter = /[a-z]/;
var letter1 = /[A-Z]/;
var number = /[0-9]/;
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function form2(){


	var signup_username=document.forms["signupform"]["signup_username"].value;
	var signup_useremail=document.forms["signupform"]["signup_useremail"].value;
	var signup_pwd=document.forms["signupform"]["signup_pwd"].value;
	var repwd=document.forms["signupform"]["repwd"].value;



	 
	if(signup_username==null || signup_username=="" ){
                 alert("Enter the Username")
                 return false;
        }

        if(signup_useremail==null || signup_useremail==""){
                   alert("Enter the E-mail")
                 return false;

        if (reg.test(signup_useremail) == false) 
                 {
                     alert('Invalid Email Address');
                     return (false);
                 } 

        }

        if(signup_pwd==null || signup_pwd==""){

                   alert("Enter the Password")
                  
                 return false;
        }

        if(repwd==null || repwd==""){
                   alert("Enter Retype Password")
                 return false;
             }
      if (repwd.length < 6) {
              alert("Please make sure password is longer than 6 characters.")
              return false;
            } 

      if (!letter.test(repwd)) {
              alert("Please make sure Password Includes an LowerCase character")
              return false;
          }
      if (!letter1.test(repwd)) {
            alert("Please make sure Password Includes an UpperCase")
            return false;
        }    
      if (!number.test(repwd)) {
              alert("Please make sure Password Includes a Digit")
              return false;
          }          

 		if(signup_pwd != repwd){
                  document.getElementById("errorbox").innerHTML = "Password Don't Match";
                 return false;
             }
        

        
             
        if (signup_username != '' && signup_useremail != '' && signup_pwd != '' && repwd != '' && signup_pwd == repwd)


          alert("Register/Signup Successfull");
                         

}
