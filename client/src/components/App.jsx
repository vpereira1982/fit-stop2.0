class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentState: 'Dashboard',
      currentWorkout: window.exampleExerciseData,
      currentExercise: 0,
      workoutDate: null,
      workoutHistory: [],
      countdown: 3,
      time: null,
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
  }

  componentDidMount() {
    this.getWorkoutHistory();
  }

  goToDashboard() {
    this.setState({currentState: 'Dashboard'});
  };

  getWorkoutHistory() {
    var settings = {
      method: 'GET',
      url: '/history',
      dataType: 'json',
      complete: (data) => {
        console.log('workout history data', data);
        this.setState({workoutHistory: JSON.parse(data.responseText)})
      },
      error: function(err) {
        console.error(err);
      }
    }
    $.ajax(settings);
  };

  goToLogin() {
    this.setState({currentState: 'Login'})
  };

  goToSignUp() {
    this.setState({currentState: 'SignUp'})
  };

  goToCountdown() {
    this.setState({currentState: 'Countdown'});
    this.getExercises();
    this.setState({currentExercise: 0});
    this.startCountdown();
  }

  goToWorkout() {
    this.setState({currentState: 'Workout'});
    //and start the workout timer
    this.startTimer();
  };

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
  };

  startTimer() {
    console.log('start timer');
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
    //cancel interval
    clearInterval(this.state.interval);
    this.setState({currentState: 'Summary'});
    this.sendWorkoutDataToServer();
    this.setState({workoutDate: Date()});
  };

  sendWorkoutDataToServer() {

    console.log('send data');
      var settings = {
      method: 'POST',
      url: '/addworkout',
      dataType: 'json',
      data: {
        currentWorkout: this.state.currentWorkout,
        date: this.state.workoutDate,
        lengthOfWorkout: this.state.workoutLengthInMins
      },
      complete: (data) => {
        console.log('add workout data to db:', data);
      },
      error: function(err) {
        console.error(err);
      }
    }
    $.ajax(settings);
  }

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

    if(this.state.currentState === 'Dashboard') {
      return (
        <div className = "App">
          <Header goToLogin={this.goToLogin} goToSignUp={this.goToSignUp}/>
          <Dashboard goToCountdown={this.goToCountdown} workoutHistory={this.workoutHistory} />
        </div>
      )
    } else if (this.state.currentState === 'Login') {
      return (
        <div className = "App">
          <Header goToLogin={this.goToLogin} goToSignUp={this.goToSignUp}/>
          <Login />
        </div>
      )
    } else if (this.state.currentState === 'SignUp') {
      return (
        <div className = "App">
          <Header goToLogin={this.goToLogin} goToSignUp={this.goToSignUp}/>
          <SignUp />
        </div>
      )
    } else if (this.state.currentState === 'Countdown') {
      return (
        <div className = "App">
          <Header goToLogin={this.goToLogin} goToSignUp={this.goToSignUp}/>
          <Countdown countdown={this.state.countdown} />
        </div>
      )
    } else if (this.state.currentState === 'Workout') {
      return (
        <div className = "App">
          <Header goToLogin={this.goToLogin} goToSignUp={this.goToSignUp}/>
          <Workout exercise={this.state.currentWorkout[this.state.currentExercise]} timer={this.formatTime(this.state.time)} countdown={this.state.countdown} goToSummary={this.goToSummary} goToDashboard={this.goToDashboard} ref="workoutPage" />
        </div>
      )
    } else if (this.state.currentState === 'Summary') {
      return (
        <div className = "App">
            <Header goToLogin={this.goToLogin} goToSignUp={this.goToSignUp}/>
            <Summary goToDashboard={this.goToDashboard} currentWorkout={this.state.currentWorkout} workoutDate={this.state.workoutDate} workoutLengthInMins={this.state.workoutLengthInMins}/>
        </div>
      )
    } else {
      return (
        <p>Error... sad face...</p>
      )
    }
  } //render
} //class

window.App = App;