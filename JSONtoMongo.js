'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

    mongoose.connect(config.db.uri);
    var connection = mongoose.connection;
    connection.on("connected", function(){
      console.log("database connected");
    })
/* Connect to your database */

var fs = require('fs');
var list;
fs.readFile('listings.json','utf8',function(err,data)
  {
  if(err) throw err;
  list=JSON.parse(data).entries;
  var size=list.length;

  for(var k=0 ; k<size; k++){
    var kdata= new Listing(list[k]);
    kdata.save(function(err){
      if(err) throw err;
    });
  }


});




/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */


/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
