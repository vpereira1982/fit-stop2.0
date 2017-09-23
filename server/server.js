var express = require('express')
var db = require('./db').mongoose;
var Exercise = require('./db').exerciseModel;
var User = require('./db').userModel;
var path = require('path');

//import database info

//handle all the data gathering methods
// querying the database
// routing

var app = express();
app.listen(3000);
app.use('/public', express.static('client/public'));
app.use('/react', express.static('node_modules/react/dist'));
app.use('/react-dom', express.static('node_modules/react-dom/dist'));

console.log('server is running');


// define api routes here

//get workout

function getWorkout(req,res){ // this disgusting, callback infected function grabs random workout data and sends it to the front for us
  var workoutData = {};

  Exercise.findOne({type: 'warmup'},function(err,data){
    if(err) {
      console.log(err)
    } else {
      workoutData.warmup = data;
      Exercise.findOne({type: 'workout'},function(err,data){
        if(err) {
          console.log(err)
        } else {
          workoutData.workout = data;
          Exercise.findOne({type: 'cooldown'},function(err,data){
            if(err) {
              console.log(err)
            } else {
              workoutData.cooldown = data;
              if( workoutData.warmup && workoutData.workout && workoutData.cooldown) {
                    res.send(200, workoutData)

                  } else {
                    res.send(200, workoutData)
                  }
            }
          })
        }
      })
    }
  })

  // {
  //   warmup: [
  //   ],
  //   workout: [
  //   ],
  //   cooldown: [
  //   ]
  // }

}

app.get('/', (req,res)=>{
  res.sendFile('index.html', { root: 'client/public'});
});

app.get('/workout', getWorkout);
app.get('/history',()=>{})
app.post('/addworkout',()=>{})