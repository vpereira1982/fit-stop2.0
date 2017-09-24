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

app.use('/jquery', express.static('node_modules/jquery/dist'));

console.log('server is running');


// define api routes here

//get workout

// function getWorkout(obj, res){ // this disgusting, callback infected function grabs random workout data and sends it to the front for us
//   Exercise.findOne({type: 'warmup'},function(err,data){
//     if(err) {
//       console.log(err)
//     } else {
//       obj.warmup.push(data);
//       Exercise.findOne({type: 'cooldown'},function(err,data){
//         if(err) {
//           console.log(err)
//         } else {
//           obj.cooldown.push(data);
//           Exercise.findOne({type: 'workout'},function(err,data){
//             if(err) {
//               console.log(err)
//             } else {
//               obj.workout.push(data);
//               Exercise.findOne({type: 'workout'},function(err,data){
//                 if(err) {
//                   console.log(err)
//                 } else {
//                   obj.workout.push(data);
//                   Exercise.findOne({type: 'workout'},function(err,data){
//                     if(err) {
//                       console.log(err)
//                     } else {
//                       obj.workout.push(data);
//                       obj.counter++
//                       console.log(obj);
//                       if(obj.counter === 3) {
//                         res.send(obj);
//                       }
//                     }
//                   });
//                 };
//               })
//             }
//           })
//         }
//       })
//     }
//   })


  // {
  //   warmup: [
  //   ],
  //   workout: [
  //   ],
  //   cooldown: [
  //   ]
  // }
// }



app.get('/', (req,res)=>{
  res.sendFile('index.html', { root: 'client/public'});
});




app.get('/', (req,res)=>{
  res.sendFile('index.html', { root: 'client/public'});
});

app.get('/workout', (req,res)=>{
  var returnObj = {
    warmup: [],
    workout: [],
    cooldown: [],
    counter: 0
  }

  for(var i = 0; i < 3; i++) {
    getWorkout(returnObj, res)
  }
});



app.get('/history',()=>{})
app.post('/addworkout',()=>{})