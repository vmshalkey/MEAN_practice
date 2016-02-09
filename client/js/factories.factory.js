app.factory('UsersFactory', function($http, $location) {
	return {
		getUsers: function(callback){
			console.log("UsersFactory getUsers");
			$http.get('/users').success(function(response) {
				callback(response);
			})
			// var response = [{first_name: 'Winners!'}];
			// callback(response);
		},
		addUser: function(newUser, callback) {
			console.log("UsersFactory addUser ", newUser);
			$http.post('/users', newUser).success(function(response) {
				callback(response);
			})
		},
		removeUser: function(user, callback) {
			console.log("UsersFactory removeUser ", user);
			$http.delete('/users/'+user._id).success(function(response) {
				callback();
			})
		},
		updateUser: function(user) {
			console.log("UsersFactory updateUser ", user);
			$http.patch('/users/'+user._id, user).success(function(response) {
				$location.path('/users');
			})
		}
	}
})