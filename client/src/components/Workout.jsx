var Workout = (props) => (
  <div className="">
  Workout View Here
  <Countdown count= {props.count} />
  <Timer timer= {props.timer} />
  <Exercise exercise= {props.exercise} />
  <Summary />

  </div>
);


window.Workout = Workout;
