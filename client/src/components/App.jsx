class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentState: 'Dashboard',
      currentWorkout: window.exampleExerciseData,
      currentExercise: 0,
      workoutDate: null,
      workoutHistory: [],
      username: null,
      loggedIn: false,
      countdown: 3,
      time: null,
      showButtons: true,
      workoutLengthInMins: 15
    };

    this.goToWorkout = this.goToWorkout.bind(this);
    this.goToSummary = this.goToSummary.bind(this);
    this.goToDashboard = this.goToDashboard.bind(this);
    this.goToCountdown = this.goToCountdown.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
    this.goToSignUp = this.goToSignUp.bind(this);
    this.getWorkoutHistory = this.getWorkoutHistory.bind(this);
    this.sendWorkoutDataToServer = this.sendWorkoutDataToServer.bind(this);
    this.logOut = this.logOut.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);

  }

  goToDashboard() {
    this.setState({showButtons: true});
    if (this.state.loggedIn){
      this.getWorkoutHistory();
    }
    this.setState({currentState: 'Dashboard'});
    if (this.state.interval) {
      clearInterval(this.state.interval);
    }
  }

  getWorkoutHistory() {
    var settings = {
      method: 'GET',
      url: '/history',
      dataType: 'json',
      data: {
        username: this.state.username,
      },
      complete: (data) => {
        var firstFive = JSON.parse(data.responseText).slice(0, 5);
        this.setState({workoutHistory: firstFive})

      },
      error: function(err) {
        console.error(err);
      }
    }
    $.ajax(settings);
  }

  goToLogin() {
    this.setState({currentState: 'Login'})
  }

  login(event){
    event.preventDefault();
    const data = new FormData(event.target);
    var username = data.get('username');
    var password = data.get('password');


    $.ajax({
      type: "POST",
      url: '/login',
      data: JSON.stringify({
        username: username,
        password: password
      }),
      contentType: 'application/json',
      dataType: 'json',
      complete: data => {
        if (data.responseText === "Log in success") {
          this.setState({username: username});
          this.setState({loggedIn: true});
          this.goToDashboard();
        } else {
          alert("Username and Password Invalid");
          this.goToLogin();
        }
      },
      error: function (err) {
        //console.log('err', err);
      }
    })
  }

  goToSignUp() {
    this.setState({currentState: 'SignUp'})
  }

  signup(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    var username = data.get('username');
    var password = data.get('password');


    $.ajax({
      type: "POST",
      url: '/signup',
      data: JSON.stringify({
        username: username,
        password: password
      }),
      contentType: 'application/json',
      dataType: 'json',
      complete: data => {
        if (data.responseText === "User Created") {
          this.setState({username: username});
          this.setState({loggedIn: true});
          this.goToDashboard();
        } else {
          alert("Username and Password Invalid");
          this.goToSignUp();
        }
      },
      error: function (err) {
        //console.log('err', err);
      }
    })
  }
  sendWorkoutDataToServer() {
    console.log('sending data');
    $.ajax({
      type: "POST",
      url: '/addWorkout',
      data: JSON.stringify({
        username: this.state.username,
        date: Date(),
        currentWorkout: this.state.currentWorkout,
        lengthOfWorkout: this.state.workoutLengthInMins
      }),
      contentType: 'application/json',
      dataType: 'json',
      success: function (data) {
        console.log('succesfully posted data!');
      },
    })
  };

  logOut() {
    this.setState({loggedIn: false});
    this.setState({username: null});
    this.goToDashboard();
  }

  goToCountdown() {
    this.setState({currentState: 'Countdown'});
   // this.getExercises(); //uncomment to fetch from db
    this.setState({currentExercise: 0});
    this.startCountdown();
    this.setState({showButtons: false});
  }

  goToWorkout() {
    this.setState({currentState: 'Workout'});
    //and start the workout timer
    this.startTimer();
  }

  startCountdown() {
    //reset countdown to 3
    this.setState({countdown: 3});
    //start interval, every 1 second
    var interval= setInterval(this.countdown.bind(this), 1000);
    this.setState({interval: interval});
  }

  countdown() {
    //decrease countdown by 1
    //take the current value of this.state.countdown --
    var current = this.state.countdown;
    current--;
    this.setState({countdown: current});
    //if countdown reaches 0
    if (this.state.countdown === 0) {
      //cancel interval
      clearInterval(this.state.interval);
      //go to workout
      this.goToWorkout();
    }
  }

  getExercises() {
    var settings = {
      method: 'GET',
      url: '/workout',
      dataType: 'json',
      complete: (data) => {
        console.log('exercise data:', data);
        this.setState({currentWorkout: JSON.parse(data.responseText)})
      },
      error: function(err) {
        console.error(err);
      }
    }
    $.ajax(settings);
  }

  startTimer() {
    //reset timer
    var current = this.state.workoutLengthInMins * 60;
    this.setState({time: current});
    //start interval, every 1 second
    var interval = setInterval(this.timer.bind(this), 1000);
    this.setState({interval: interval});
  }

  //calls function on Workout component using ref
  triggerActiveTitleChange() {
    this.refs.workoutPage.highlightActiveTitle();
  }

  timer() {
    //decrease timer by 1
    var current = this.state.time;
    current--;
    this.setState({time: current});
    //every 60 seconds, change the exercise
    if (this.state.time % 60 === 0) {
      var next = this.state.currentExercise;
      next++;
      this.setState({currentExercise: next});
      this.triggerActiveTitleChange();
    }
    //if timer reaches 0
    if (this.state.time === 0) {
      //go to summary
      this.goToSummary();
    }
  }

  goToSummary() {
    this.setState({showButtons: true});
    //cancel interval
    clearInterval(this.state.interval);
    this.setState({currentState: 'Summary'});
    var currentDate = Date();
    this.setState({workoutDate: currentDate});
    console.log('workout date', this.state.workoutDate);
    if (this.state.loggedIn) {
      this.sendWorkoutDataToServer();
    }
  };

  formatTime(seconds) {
    var mm = Math.floor(seconds / 60);
    var ss = seconds % 60;
    if (ss < 10) {
      ss = '0' + ss;
    }
    //return time in mm:ss
    return mm + ':' + ss;
  }

  render() {
    var toBeRendered = () => {
      if (this.state.currentState === 'Dashboard') {
        return (<Dashboard goToCountdown={this.goToCountdown} workoutHistory={this.state.workoutHistory} loggedIn={this.state.loggedIn} />);
      }
      if (this.state.currentState === 'Login') {
          return (<Login login={this.login} />);
      }
      if (this.state.currentState === 'SignUp') {
          return (<SignUp signup={this.signup}  />);
      }
      if (this.state.currentState === 'Countdown') {
          return (<Countdown countdown={this.state.countdown} />);
      }
      if (this.state.currentState === 'Workout') {

          return (<Workout exercise={this.state.currentWorkout[this.state.currentExercise]} timer={this.formatTime(this.state.time)} countdown={this.state.countdown} goToSummary={this.goToSummary} goToDashboard={this.goToDashboard} ref="workoutPage"  />);
      }
      if (this.state.currentState === 'Summary') {
          return (<Summary goToDashboard={this.goToDashboard} currentWorkout={this.state.currentWorkout} workoutDate={this.state.workoutDate} workoutLengthInMins={this.state.workoutLengthInMins} loggedIn={this.state.loggedIn} />);
      }
    }

    return (
      <div className = "App">
        <Header username={this.state.username} goToLogin={this.goToLogin} goToSignUp={this.goToSignUp} loggedIn={this.state.loggedIn} logOut={this.logOut} showButtons={this.state.showButtons}/>
        {toBeRendered()}
      </div>
    )

  } //render
} //class

window.App = App;