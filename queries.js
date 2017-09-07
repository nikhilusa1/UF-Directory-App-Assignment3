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

var findLibraryWest = function() {
  Listing.find({ code: 'LBW' }, function(err, listing) {
if (err) throw err;

// object of the user
console.log(listing);
});

  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */


};
var removeCable = function() {
  Listing.findOneAndRemove({ code: 'CABL' }, function(err) {
    if (err) throw err;

    // we have deleted the user
    console.log('Code:CABL Room deleted!');
  });
};
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */

var updatePhelpsLab = function() {

  Listing.findOneAndUpdate({ code: 'PHL' }, { address: '102 Phelps Lab, 32603, Gainesville, FL' }, function(err, listing) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(listing);
});
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
};
var retrieveAllListings = function() {
  Listing.find({}, function(err, listing) {
  if (err) throw err;

  console.log(listing);
});
  /*
    Retrieve all listings in the database, and log them to the console.
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
