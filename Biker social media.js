var database = [
	{
		username: "mike",
		password: "jones"
	},
	{
		username: "mrjohnson",
		password: "123"
	}
	{
		username: "Sam c",
		password: "123"
	}

]; 


var bikernewsfeed = [
	{
		username: "jr",
		post: "I am ready for another ride"
	},
	{
		username: "joe",
		post: "heading to an 90 mile"
	}

];

function isUserValid(username,password) {
	for (var i = 0; i < database.length; i++) {
		if(database[i].username === username && database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username,password)) {
		console.log(newsfeed);
	} else {
		alert("sorry you entered the wrong info");
	}
}

var userNamePromt = prompt("What\'s' your username?");
var passwordPromt = prompt("What\'s your password?")

signIn(userNamePromt, passwordPromt);

//key

