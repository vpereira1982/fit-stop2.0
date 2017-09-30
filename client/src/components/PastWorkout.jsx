
var PastWorkout = (props) => (
  <div className="pastWorkout">
    <p> <span className="dateAndTime">{props.date}</span> | <span>{props.lengthOfWorkout}</span> </p>
  </div>
);


window.PastWorkout = PastWorkout;

