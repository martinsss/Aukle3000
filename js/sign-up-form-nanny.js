$("#registration").click(function(){
	var nameAndSurname = document.getElementById("name-and-surname").value;
	var address = document.getElementById("adress").value;
	var personalCode = document.getElementById("personalCode").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	let post = {nameAndSurname:nameAndSurname, address:address, personalCode:personalCode, email:email, password:password};
		//Post
		http.post('/register/nanny',post);
});