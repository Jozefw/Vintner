var express = require('express');
var WineApp = express();
var bodyParser = require('body-parser');
var WineId = 100;
console.log(WineApp);

WineApp.use(bodyParser.json());

// http GET Method should return a list of wines
WineApp.get('/Data/wineList', function(resquest, response){

	console.log ("in GET function");
	response.json(wineList);
});

// http GET Specific wine
WineApp.get('/Data/wineList/:id', function (request, response) {

	console.log('Getting a wine with id ' + request.params.id);
	var wine = findWine(parseInt(request.params.id,10));
	if(wine === null){
		response.send(404);
	}
	else{
		response.json(wine);
	}
});


// HTTP POST data/wineList/ creates a book, the body contains the book you create


WineApp.post('/Data/wineList/', function (request, response) {

	var wine = request.body;
	console.log('Saving wine with the following structure ' + JSON.stringify(wine));
	wine.id = wineId++;
	wineList.push(wine);
	response.send(wine);
});

// HTTP PUT  updates a book

WineApp.put ('/Data/wineList/:id', function (request,response){

	var wine = request.body;
	console.log('Updating Wine' + JSON.stringify(wine));
	var currentWine = findWine(parseInt(request.params.id,10));
	if (currentWine === null){
		response.send(404);
	}
	else {
		// save the wine locally
		currentWine.name = wine.name;
		currentWine.vintner = wine.vintner;
		currentWine.year = wine.year;
		response.send(wine);
	}
});

// HTTP DELETE's a specific book

WineApp.delete('Data/wineList/:id',function (request,response){
	console.log("calling DElETE");

	var wine = findWine(parseInt)(request.params.id,10);
	if ( wine === null ){
		console.log("no such wine");
		response.send(404);
	}
	else{
		cosnole.log("Deleting" + request.params.id);
		removeWineItem(parseInt(request.params.id,10));
		response.send(200);
	}
	response.send(200);

});



//start up the app on port 8080
WineApp.listen(8080);




