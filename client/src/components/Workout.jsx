var Workout = (props) => (
  <div className="workout">
  <Timer timer= {props.timer} />
    <span className ='warmupTitle activeTitle'>Warmup</span>
    <span className ='workoutTitle'>Workout</span>
    <span className ='cooldownTitle'>Cooldown</span>





  <Exercise exercise= {props.exercise} />
  <button onClick={props.goToSummary} className="blackButton">Summary</button>
  </div>
);


window.Workout = Workout;
