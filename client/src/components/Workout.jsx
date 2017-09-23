var Workout = (props) => (
  <div className="workout">

  <Summary />
    <h1>Upper Body </h1>

  <Exercise exercise= {props.exercise} />
  <Timer timer= {props.timer} />
  <Countdown count= {props.count} />
  </div>
);


window.Workout = Workout;
