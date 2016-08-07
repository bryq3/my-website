document.addEventListener("DOMContentLoaded", function(){
	//open nav 
	
	function openNav(){
		document.getElementById("myNav").style.height="100%"
	}
	//close nav
	function closeNav(){
		document.getElementById("myNav").style.height="0%"
	}
	
	var triangle= document.querySelector(".triangle");
	// open after click on triangle
	triangle.onclick= function(){
		openNav();
		triangle.style.display="none";
		
	}
	//close after click on X
	document.querySelector(".closebtn").onclick= function(){
		closeNav();
		triangle.style.display="block";
		
	}

 //form validation
var name= document.querySelector("#name");
var email= document.querySelector("#email");
var message= document.querySelector("#message");
var submit= document.querySelector("#submit");

	submit.addEventListener("click", function(e){
		e.preventDefault();
		if(name.value.length<2){
			alert("Name field has to contain at least 2 characters");
		}else if(email.value.includes("@")== false){
			alert("Email address has to contain @ character");
		}else if(message.value.length<1){
			alert("Write your message!!!");
		}else{
			name.value = "";
			email.value= "";
			message.value= "";
		}
	});
});
