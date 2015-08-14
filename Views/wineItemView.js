WineItemView = Backbone.View.extend({


 FindWine: function(id){
	for ( var i = 0; 1<wineList.length; i++ ){
		if ( wineList[i].id === id ){
			return wineList[i];
		}
	}
},

removeWineItem: function(id){
	var wineIndex = 0;
	for ( var i= 0; i<wineList.length; i++ ){
		if ( wineList[i].id === id ){
			wineIndex = 1;
		}
	}
	// delete the item at the index and i tem only
	wineList.splice(wineIndex, 1);
},

})