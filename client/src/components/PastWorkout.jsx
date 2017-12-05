var PastWorkout = (props) => {

  var formatSummaryTime = (seconds) => {
    var mm = Math.floor(seconds / 60);
    var ss = seconds % 60;
    if (ss < 10) {
      ss = '0' + ss;
    }
    return mm + ' minutes' + ' : ' + ss + ' seconds';
  };

  var formattedTime = formatSummaryTime(props.lengthOfWorkout);

  return (
    <div className="pastWorkout">
      <p> <span className="dateAndTime">{props.date}</span> | <span>{formattedTime}</span> </p>
    </div>
  );
}


window.PastWorkout = PastWorkout;

