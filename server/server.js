var express = require('express')
var db = require('./db').mongoose;
var Exercise = require('./db').exerciseModel;
var User = require('./db').userModel;

//import database info

//handle all the data gathering methods
// querying the database
// routing

var app = express();
app.listen(3000);
console.log('server is running');

//testing db
var jogging = new Exercise({
  name: 'High Knees',
  Description: 'Moving your legs back and forth!',
  type: 'Workout',
  Picture: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fworkoutlabs.com%2Fwp-content%2Fuploads%2Fwatermarked%2FHigh_Knees_M_WorkoutLabs.png&imgrefurl=http%3A%2F%2Fworkoutlabs.com%2Fexercise-guide%2Fhigh-knees-front-knee-lifts-run-on-the-spot%2F&docid=NxBSaJpAlFlqYM&tbnid=Lehw-ftQ5xtAWM%3A&vet=10ahUKEwicyefv5rfWAhWIJCYKHXfvBhYQMwimASgCMAI..i&w=540&h=360&bih=953&biw=1680&q=high%20knees&ved=0ahUKEwicyefv5rfWAhWIJCYKHXfvBhYQMwimASgCMAI&iact=mrc&uact=8', 
  Environment: 'Indoors', // what about exercises that can be done anywhere?
  muscleGroup: 'Legs', // should this be an object?
  Difficulty: 'Easy'
});

jogging.save((error)=>{
  if(error){
    console.log('error with saving exercise: ' + error);
  }
});

var harsh = new User({
  username: 'harshsikka',
  Password: 'nothashedyet',
  Preferences: {
    something: 'something else',
  },
  workoutHistory: [{
    some: 'info',
  }]
});

harsh.save((error)=>{
  if(error){
    console.log('error with saving exercise: ' + error);
  }
})

// define api routes here