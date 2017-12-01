var express = require('express');
var db = require('./db').mongoose;
var bodyParser = require('body-parser');
var path = require('path');

var Exercise = require('./db').exerciseModel;
var User = require('./db').userModel;
var ObjectID = require('mongodb').ObjectID;
var session = require('express-session')
var FileStore = require('session-file-store')(session);

var app = express();

var bcrypt = require('bcrypt');
var saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);

app.listen(process.env.PORT || 3000);
console.log('server is running');


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Middleware
* * * * * * * * * * * * * * * * * * * * * * * * * * */

app.use('/public', express.static('client/public'));
app.use('/react', express.static('node_modules/react/dist'));
app.use('/react-dom', express.static('node_modules/react-dom/dist'));
app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  User Persistent Session
* * * * * * * * * * * * * * * * * * * * * * * * * * */

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  store: new FileStore(),
  saveUninitialized: true,
  cookie: { secret: 'hello', maxAge: 1000 * 60 * 60 *24 * 365, secure: false}
}))

app.use(function(req, res, next) {
  var sess = req.session
  if (sess.views) {
    sess.views++
  } else {
    sess.views = 1
  }
  console.log('this is the session id', req.session.id)
  next();
})


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  API Routes
* * * * * * * * * * * * * * * * * * * * * * * * * * */

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.get('/islogged', checkSession);
app.get('/workout', getWorkout);
app.get('/history', getHistory);

app.post('/addWorkout', addWorkout);
app.post('/login', checkLogin);
app.post('/signup', addSignup);


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Request Handlers
* * * * * * * * * * * * * * * * * * * * * * * * * * */

function getHistory(req, res) {
  var name = req.query.username;
  User.findOne({username: name}, function(err, data) {
    if(err) {
      console.log('err happened with cooldown retrieval: ' + err);
    } else{
      res.send(data.workoutHistory);
    }
  });
}

function getWorkout(req, res) {
  var returnObj = [];

  Exercise.find({type: 'warmup'}, function(err,data) {
    if(err) {
      console.log('err happened with cooldown retrieval: ' + err);
    } else {
      returnObj.push(data[Math.floor(Math.random()*data.length)]);
      returnObj.push(data[Math.floor(Math.random()*data.length)]);
      returnObj.push(data[Math.floor(Math.random()*data.length)]);

      Exercise.find({type: 'workout'}, function(err,data) {
        if(err) {
          console.log('err happened with cooldown retrieval: ' + err);
        } else {
          returnObj.push(data[Math.floor(Math.random()*data.length)]);
          returnObj.push(data[Math.floor(Math.random()*data.length)]);
          returnObj.push(data[Math.floor(Math.random()*data.length)]);
          returnObj.push(data[Math.floor(Math.random()*data.length)]);
          returnObj.push(data[Math.floor(Math.random()*data.length)]);
          returnObj.push(data[Math.floor(Math.random()*data.length)]);
          returnObj.push(data[Math.floor(Math.random()*data.length)]);
          returnObj.push(data[Math.floor(Math.random()*data.length)]);
          returnObj.push(data[Math.floor(Math.random()*data.length)]);

          Exercise.find({type: 'cooldown'}, function(err,data) {
            if(err) {
              console.log('err happened with cooldown retrieval: ' + err);
            } else {
              returnObj.push(data[Math.floor(Math.random()*data.length)]);
              returnObj.push(data[Math.floor(Math.random()*data.length)]);
              returnObj.push(data[Math.floor(Math.random()*data.length)]);

              console.log('exercise data sent succesfully');
              res.status('200').send(returnObj);
            }
          });
        }
      });
    }
  });
}

function addWorkout(req, res) {
  var name = req.body.username;
  var workoutObj = {};
  workoutObj.currentWorkout = req.body.currentWorkout;
  workoutObj.date = req.body.date;
  workoutObj.lengthOfWorkout = req.body.lengthOfWorkout;

  User.findOne({username: name}, function(err, user) {
    if (err) {
      console.log('err happened with cooldown retrieval: ' + err);
    } else {
      user.workoutHistory.unshift(workoutObj);
      user.save(function(err) {
        if (err) {
          console.log(err + ' error happened!');
        } else {
          console.log('user workouts updated');
          res.status(202).send('user workout history updated');
        }
      });
    }
  });
}


function checkLogin(req, res) {
  var name = req.body.username;
  var pass = req.body.password;

  User.findOne({username:name}, function(err, data) {
    if (err) {
      console.log("Database access error" + err);
    } else {
      if (data) {
        if (bcrypt.compareSync(pass, data.password)=== true) {
          req.session.name = name
          res.status(200).send('Log in success');
        } else {
          res.status(400).send('Log in attempt failed');
        }
      } else {
        res.status(400).send('Log in attempt failed');
      }
    }
  });
}


function checkSession(req, res) {
  console.log('this is the session name from checkSession cb', req.session.name)
  if (req.session.name) {
    User.findOne({username: req.session.name}, function(err, data) {
      if (err) {
        console.log("Database access error" + err);
      } else {
        if (data) {
          res.status(200).send(req.session.name);
        } else {
          res.status(400).send(false);
        }
      }
    });
  }
}


function addSignup(req, res) {
  var name = req.body.username;
  var pass = req.body.password;
  var hash = bcrypt.hashSync(pass, salt);
  var id = new ObjectID();

  User.find({username: name}, function(err, user) {
    if (err) {
      console.log("Database access error" + err);
    } else {
      if (!user[0]) {
        var newUser = new User({
          _id: id,
          username: name,
          password: hash,
          preferences: {}
        });
        newUser.save(function(err) {
          if (err) {
            console.log(err);
          } else {
            res.status(200).send('User Created');
          }
        });
      } else {
        res.status(400).send('User exists');
      }
    }
  });
}


