class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'fitStopList',
      warmups: props.warmupList,
      workouts: props.workoutList,
      cooldowns: props.cooldownList
    }
    this.changeView = this.changeView.bind(this);
    console.log('props in profile', props)
  }

  changeView(view) {
    this.setState({currentView: view});
  }

  render() {
    var view = null;
    // if (this.state.currentview = 'profile') {
    //   view = <UserProfile />
    // }
    if (this.state.currentView = 'fitStopList') {
      view = <FitStopList
        warmups={this.state.warmups}
        workoutList={this.state.workouts}
        cooldownList={this.state.cooldowns}
      />
    }
    // if (this.state.currentView = 'UsersList') {

    // }
    return (
      <div className="user-profile">
        Welcome to Profile page
        <div className="profile-nav-buttons">
          <button className="blackButton" onClick={this.changeView}>Users Exercise List</button>
          <button className="blackButton" onClick={this.changeView}>FitStop Exercise List</button>
          <button className="blackButton" onClick={this.changeView}>Your Exercise List</button>
          <button className="blackButton" onClick={this.changeView}>Profile</button>
        </div>
        <div>
          {view}
        </div>
      </div>
    )
  }
}


window.Profile = Profile;