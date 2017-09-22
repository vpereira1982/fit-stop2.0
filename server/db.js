var mongoose = require('mongoose');
var dbUri = require('./dbInfo').dbUri;

var Schema = mongoose.Schema;

mongoose.connect('mongodb://' + dbUri);

mongoose.connection.once('open', function() {
  console.log('database is connected');
});

mongoose.connection.on('error', function(error) {
  console.log('database connection error: ' + error);
});

var exerciseSchema = new Schema({
  name: String,
  Description: String,
  type: String,
  Picture: String, 
  Environment: String,
  muscleGroup: String,
  Difficulty: String
});

var userSchema = new Schema({
  username: String,
  Password: String,
  Preferences: {},
  workoutHistory: []
});

var Exercise = mongoose.model('Exercise', exerciseSchema);
var User = mongoose.model('User', userSchema);

module.exports.exerciseModel = Exercise;
module.exports.userModel = User;
module.exports.mongoose = mongoose;
