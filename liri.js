require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var request = require('request');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var action = process.argv[2];
var parameter = process.argv.slice(3).join(" ");


var getArtistName = function(artist){
    return artist.name;
}

//Spotify Function
var spotifySong = function(songName) {

    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
        console.log('Error occurred: ' + err);
        return;
        }
    
    // console.log(data.tracks.items[0]); 
        var songs = data.tracks.items;
        for (var i=0; i < songs.length; i++){
            console.log[i];
            console.log("Artist: " + songs[i].artists.map(getArtistName));
            console.log("Song Name: " + songs[i].name);
            console.log("Preview: " + songs[i].preview_url);
            console.log("Album: " + songs[i].album.name);
            console.log("********************************");
        }

});
}

// Movie  Function
var getMovie = function(movieName){
    //NPM REQUEST
    request('http://www.omdbapi.com/?apikey=fa170b27&t=' + movieName + '&y=&plot=short&r=json', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // 

        
    });

}
var pick = function(caseData, functionData){

    switch(caseData){
        
        case "spotify-this-song" :
             spotifySong(functionData);
             break;
        case "movie-this":
            getMovie(functionData);
        default:
        console.log("Huh? That makes no sense...");
    }

}

var runThis = function(argOne, argTwo){
    pick (argOne, argTwo);
};

//This passes the third and fourth arguments in the array through run this, skipping node and liri.js in command line
runThis(process.argv[2], process.argv[3]);