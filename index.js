var Twit = require('twit')
var T = new Twit({
    consumer_key:         '8l4fHAvqXUOHPU4SMuqWK2aed',
    consumer_secret:      '7WS3iIpZK6epgSgcTtMbXa7cNk2I5Aas0gx5fIgOl7yvhSBpK6',
    access_token:         '65795011-G9bDditfseNuORZnqYRdEhdoEtQOVvVRPs00BbKa2',
    access_token_secret:  'uauycg3SyWlV6balyD51BuolIBQFIhyjixWJB9KlnSZv1',
})


var users = ["51241574", "116994659", "14293310", "9300262"];
var stream = T.stream('statuses/filter', {follow: users});
stream.on('tweet', function (tweet) {
    if (users.indexOf(tweet.user.id_str) > -1) {
        console.log(tweet.user.name + ": " + tweet.text);
        T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
            console.log(data)
        })
    }
})
