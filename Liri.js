// Vendor
var fs = require('fs');
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');

//My Scripts
var keys = require('./keys/js');

var app = {
    "my-tweets": function() {
        var client = Twitter(keys);
        client.get('statuses/user_timeline', function(error.tweetData, response) {
            if(!error) {
                console.log(' ');
                console.log('================ My Tweets ================');
                tweetData.forEach(funciton(obj) {
                    console.log('---------------------');
                    cosnole.log('Time: ' + obj.created_at);
                    console.log('Tweet: ' + obj.text);
                    console.log('----------------');
                    console,log(' ');
                });
                console.log('===========================================');
                console.log(' ');
                // console.log(tweets);

                app.logData(tweetData);
            } else {
                console.log(error);

            }
        });
    },
    "spotify-this-song": function(keyboard) {
        spotify.search({ type: 'track', query: keyword || 'Fortunate Son Creedence Clearwater Revival' }, function(err, data) {
            if (err) {
                console.log('Error occured: ' + err);
                return;
            }if(data.tracks.items.length > 0) {
                var record = data.tracks.items[0];

                console.log(' ');
                console.log('================ Song Info ================');
                console.log('Artist: ' + record.artist[0].name);
                console.log('Name: ' + record.name);
                console.log('Link: ' + record.album.name);
                console.log('================================')
                console.log(' ');

                app.logData(data);
            } else {
                console.log('No data found, please try another song.');
            }


            });
    },
    "move-this": function(query) {
        request('http://www.omdbapi.com/?t=' + (query || 'John Wick') + &tomatoes=true', function (error, response, info) {
            if (!error && response.statusCode == 200) {

                var movieData = JSON.parse(info);

                console.log(' ');
                console.log('================ Movie Info ================');
                console.log('Title: ' + movieData.Title);
                console.log('Year: ' + movieData.Year);
                console.log('IMDB Rating: ' + movieData.imdbRating);
                console.log('Country: ' + movieData.Country);
                console.log('Language: ' + movieData.Language);
                console.log('Plot: ' + movieData.Plot);
                console.log('Actors: ' + movieData.Actors);
                console.log('Rotten Tomatoes Rating: ' + movieData.tomatoRating);
                console.log('Rotten Tomatoes URL: ' + movieData.tomatoURl);
                    console.log(' ');

        app.logData(movieData);
      }
    });
  },
    

            "do-what-it-says": function() {
                fs.readFile('ranadom.txt', 'utf8', function(err, data) {
                    if(err) throw err;
                    if(err) throw err;
                    console.log(data.toString());

                    var cmds = data.toString().split(',');

                    app[cmds[0].trim()](cmds[1].trim());
                });
            },
            logData: Function(data) {
                fs.appendFile('log.txt', JSON.stringify(data, null, 2) + '\n====================================================================================', function(err) {
      if(err) {
        console.log(err);
      }
    });
  }
};


app[process.argv[2]](process.argv[3]);



        
    