var Countdown = (props) => (
  <div className="countdown">
    <div className="countdownCircle">
      <span className="countdownNumber">{props.countdown}</span>
    </div>

  </div>
);

window.Countdown = Countdown;
