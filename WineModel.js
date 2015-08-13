Wine = BackBone.Model.extend({
	initialize: function(){
		this.on("change", function(){
			console.log("Model has changed");
		});
	},

	defaults: {
		name: "Chardonay",
		vintner: "McDonalds"
	},

});