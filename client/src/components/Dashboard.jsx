var Dashboard = (props) => (
  <div className="dashboard">
    <h1>Start Workout</h1>
    <div className="startButton">
      <img onClick={props.goToCountdown} src="public/images/pizzablue.png" alt="Start"/>
    </div>
    <p></p>
    <h2>*Enter weight (in lbs):</h2>
      <p><input value={props.userWeight} onChange={props.getUserWeight}/></p>
      <p><h5>* To estimate calories burned.</h5></p>
    <History
      workoutHistory={props.workoutHistory}
      workoutDate={props.workoutDate}
      workoutLength={props.workoutLength}
      loggedIn={props.loggedIn}/>
  </div>
);

window.Dashboard = Dashboard;