var mongoose = require('mongoose');

var Schema = mongoose.Schema

mongoose.connect('mongodb://fsadmin:fitstop@ds141524.mlab.com:41524/fit-stop');

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
})

var Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports.exerciseModel = Exercise;
module.exports.mongoose = mongoose;
