var Countdown = (props) => (
  <div className="countdownCircle">
    <span className="countNumbers">{props.count}</span>
  </div>
);

window.Countdown = Countdown;
