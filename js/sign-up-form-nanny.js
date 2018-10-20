$("#registration").click(function(){
	var nameAndSurname = document.getElementById("name-and-surname").value;
	var address = document.getElementById("adress").value;
	var personalCode = document.getElementById("personalCode").value;
	var email = document.getElementById("email").value;
	let post = {nameAndSurname:nameAndSurname, address:address, personalCode:personalCode, email:email};
		console.log(nameAndSurname);
		alert("post", post);
		//Post
		http.post(post);
});