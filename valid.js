    //validation Code for inputs

    var email = document.forms['form']['email'];
    var password = document.forms['form']['password'];

    var email_error = document.getElementById('email_error');
    var password_error = document.getElementById('password_error');

    email.addEventListener("textInput", email_verify);
    password.addEventListener("textInput", password_verify);

    function validated(){
    	if (email.value.length < 11){
    		email.style.border = "1px solid red";
    		email_error.style.display="block";
    		email.focus();
    		return false;
    	}
    	if (password.value.length < 9){
    		password.style.border = "1px solid red";
    		password_error.style.display="block";
    		password.focus();
    		return false;
    	}

    }
    function email_verify(){
    	if(email.value.length >= 8){
    		email.style.border = "1px solid red";
    		email_error.style.disply="block";
    		
    		return true;

    	}
    }
    function password_verify(){
    	if(password.value.length >= 8){
    		password.style.border = "1px solid red";
    		password_error.style.disply="block";
    		
    		return true;

    	}
    }


    function show(){
          var pswrd = document.getElementById('pswrd');
          var icon = document.querySelector('.fas');
          if (pswrd.type === "password") {
           pswrd.type = "text";
           pswrd.style.marginTop = "20px";
           icon.style.color = "#F5B041";
          }else{
           pswrd.type = "password";
           icon.style.color = "#FBEEE6";
          }  
         }
