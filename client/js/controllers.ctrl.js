app.controller('MainController', function(){
	console.log("MainController Loaded");
})
app.controller('MainTwoController', function(){
	console.log("MainTwoController Loaded");
})

app.controller('UsersController', function(UsersFactory){
	console.log("UsersController Loaded");
	var that = this;

	var getUsers = function() {
		console.log("UsersController getUsers");

		UsersFactory.getUsers(function(users) {
			console.log(this);
			that.users = users;
		});
	}

	this.addUser = function(newUser){
		console.log("Clicked - newUser through param ", newUser);
		// console.log("Clicked - newUser through scope ", that.newUser);
		if(newUser) {
			UsersFactory.addUser(newUser, function(){
				getUsers();
			})
		}
	}
	this.removeUser = function(user){
		console.log("removeUser ", user);
		UsersFactory.removeUser(user, function(){
			getUsers();
		})
	}

	getUsers();
})