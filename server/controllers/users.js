var User = mongoose.model('User');

module.exports = (function() {
	return {
		index: function(request, response) {
			console.log("Server / Ctrl / Users - Index")
			// var users = [{first_name: 'Winners!!!!!'}];
			User.find({}, function(err, users){
				if(err) {
					response.json(err);
				}
				else {
					response.json(users);
				}
			})

		},
		new: function(request, response) {
			console.log("Server / Ctrl / Users - New");
		},
		create: function(request, response) {
			console.log("Server / Ctrl / Users - Create");
			var user = new User;
			user.first_name = request.body.first_name;
			user.save(function(err){
				if(err) {
					response.json({status:false});
				}
				else {
					response.json({status:true});
				}
			})
		},
		edit: function(request, response) {
			console.log("Server / Ctrl / Users - Edit");
		},
		update: function(request, response) {
			console.log("Server / Ctrl / Users - Update");
		},
		show: function(request, response) {
			console.log("Server / Ctrl / Users - Show");
		},
		destroy: function(request, response) {
			console.log("Server / Ctrl / Users - Destroy");
			console.log("Destroy params id: ", request.params.id);
			User.remove({_id:request.params.id}, function(err) {
				if(err) {
					response.json({status:false});
				}
				else {
					response.json({status:true});
				}
			})
		}
	}
})();