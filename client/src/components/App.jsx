class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedin: true, //should all start off false, marking dashboard true after this becomes true
      displayDashboard: true,
      displayWorkout: false,
      displaySummary: false
    };
  }

  handleLoginClick = () => {
    this.setState({isLoggedin: true});
  };

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false});
  };

  handleWorkoutStartClick = () => {
    this.setState({displayDashboard: false, displayWorkout: true });
  };

  handleWorkoutFinish = () => {
    this.setState({displayWorkout: false, displaySummary: true});
  };

  handleBackToDashBoardClick = () => {
    this.setState({displaySummary: false, displayDashboard: true});
  };



  render() {
    return (
      <div className = "App">
    	<Header handleLoginClick={this.handleLoginClick} handleLogoutClick={this.handleLogoutClick} />
      <Dashboard handleWorkoutStartClick={this.handleWorkoutStartClick} />
      <Workout handleWorkoutFinish={this.handleWorkoutFinish} />
      <Summary handleBackToDashBoardClick={this.handleBackToDashBoardClick} />
      </div>
    )
  }
}

window.App = App;