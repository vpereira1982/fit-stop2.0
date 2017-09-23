'use strict';

var Workout = function Workout(props) {
  return React.createElement(
    'div',
    { className: 'workout' },
    React.createElement(Timer, { timer: props.timer }),
    React.createElement(
      'span',
      { className: 'warmupTitle activeTitle' },
      'Warmup '
    ),
    React.createElement(
      'span',
      { className: 'workoutTitle' },
      'Workout '
    ),
    React.createElement(
      'span',
      { className: 'cooldownTitle' },
      'Cooldown '
    ),
    React.createElement(Exercise, { exercise: props.exercise }),
    React.createElement(
      'button',
      { onClick: props.goToSummary, className: 'blackButton' },
      'Summary'
    )
  );
};

window.Workout = Workout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1dvcmtvdXQuanN4Il0sIm5hbWVzIjpbIldvcmtvdXQiLCJwcm9wcyIsInRpbWVyIiwiZXhlcmNpc2UiLCJnb1RvU3VtbWFyeSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRDtBQUFBLFNBQ1o7QUFBQTtBQUFBLE1BQUssV0FBVSxTQUFmO0FBQ0Esd0JBQUMsS0FBRCxJQUFPLE9BQVFBLE1BQU1DLEtBQXJCLEdBREE7QUFHRTtBQUFBO0FBQUEsUUFBTSxXQUFVLHlCQUFoQjtBQUFBO0FBQUEsS0FIRjtBQUlFO0FBQUE7QUFBQSxRQUFNLFdBQVUsY0FBaEI7QUFBQTtBQUFBLEtBSkY7QUFLRTtBQUFBO0FBQUEsUUFBTSxXQUFVLGVBQWhCO0FBQUE7QUFBQSxLQUxGO0FBUUEsd0JBQUMsUUFBRCxJQUFVLFVBQVdELE1BQU1FLFFBQTNCLEdBUkE7QUFTQTtBQUFBO0FBQUEsUUFBUSxTQUFTRixNQUFNRyxXQUF2QixFQUFvQyxXQUFVLGFBQTlDO0FBQUE7QUFBQTtBQVRBLEdBRFk7QUFBQSxDQUFkOztBQWVBQyxPQUFPTCxPQUFQLEdBQWlCQSxPQUFqQiIsImZpbGUiOiJXb3Jrb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFdvcmtvdXQgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ3b3Jrb3V0XCI+XG4gIDxUaW1lciB0aW1lcj0ge3Byb3BzLnRpbWVyfSAvPlxuXG4gICAgPHNwYW4gY2xhc3NOYW1lPSd3YXJtdXBUaXRsZSBhY3RpdmVUaXRsZSc+V2FybXVwIDwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzc05hbWU9J3dvcmtvdXRUaXRsZSc+V29ya291dCA8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3NOYW1lPSdjb29sZG93blRpdGxlJz5Db29sZG93biA8L3NwYW4+XG5cblxuICA8RXhlcmNpc2UgZXhlcmNpc2U9IHtwcm9wcy5leGVyY2lzZX0gLz5cbiAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5nb1RvU3VtbWFyeX0gY2xhc3NOYW1lPVwiYmxhY2tCdXR0b25cIj5TdW1tYXJ5PC9idXR0b24+XG4gIDwvZGl2PlxuKTtcblxuXG53aW5kb3cuV29ya291dCA9IFdvcmtvdXQ7XG4iXX0=