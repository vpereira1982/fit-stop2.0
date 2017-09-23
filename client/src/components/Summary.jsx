var Summary = (props) => (
  <div className="summary">
    <h1>Workout Summary</h1>
    <span className="summaryCongrats">You did it! Congratulations!</span> <br />
    <span className="summaryTime">Total Time: 15:00 </span> <br />
    <span className="summaryWorkoutType">Workout Type: Upper Body</span> <br />
    <span className="summaryExercisesCompleted">Exercises Completed: Push Ups, Pull Ups, More Push Ups, Some Other Stuff</span> <br />
    <button className="blackButton">Back To Dashboard</button>
  </div>
);


window.Summary = Summary;
