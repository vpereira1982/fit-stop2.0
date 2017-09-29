var Workout = (props) => (
  <div className="workout">


    <span className='warmupTitle activeTitle'>Warmup</span>
    <span className='workoutTitle'>Workout</span>
    <span className='cooldownTitle'>Cooldown</span>
  <Timer timer= {props.timer} />


  <Exercise exercise= {props.exercise} />
  <button onClick={props.goToDashboard} className="blackButton">Quit & Go Back To Dashboard</button>
  <a onClick={props.goToSummary} href="#">Summary</a>
  </div>
);


window.Workout = Workout;
