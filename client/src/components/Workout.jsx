var Workout = (props) => (
  <div className="workout">
  <Timer timer= {props.timer} />
    <h1 className='workoutTitle'>Warmup </h1>




  <Exercise exercise= {props.exercise} />
  <button onClick={props.goToSummary} className="blackButton">Summary</button>
  </div>
);


window.Workout = Workout;
