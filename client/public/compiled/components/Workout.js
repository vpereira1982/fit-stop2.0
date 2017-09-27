'use strict';

var Workout = function Workout(props) {
  return React.createElement(
    'div',
    { className: 'workout' },
    React.createElement(
      'span',
      { className: 'warmupTitle activeTitle' },
      'Warmup'
    ),
    React.createElement(
      'span',
      { className: 'workoutTitle' },
      'Workout'
    ),
    React.createElement(
      'span',
      { className: 'cooldownTitle' },
      'Cooldown'
    ),
    React.createElement(Timer, { timer: props.timer }),
    React.createElement(Exercise, { exercise: props.exercise }),
    React.createElement(
      'button',
      { onClick: props.goToSummary, className: 'blackButton' },
      'Summary'
    )
  );
};

window.Workout = Workout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1dvcmtvdXQuanN4Il0sIm5hbWVzIjpbIldvcmtvdXQiLCJwcm9wcyIsInRpbWVyIiwiZXhlcmNpc2UiLCJnb1RvU3VtbWFyeSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRDtBQUFBLFNBQ1o7QUFBQTtBQUFBLE1BQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQU0sV0FBVSx5QkFBaEI7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBTSxXQUFVLGNBQWhCO0FBQUE7QUFBQSxLQUZGO0FBR0U7QUFBQTtBQUFBLFFBQU0sV0FBVSxlQUFoQjtBQUFBO0FBQUEsS0FIRjtBQUlBLHdCQUFDLEtBQUQsSUFBTyxPQUFRQSxNQUFNQyxLQUFyQixHQUpBO0FBVUEsd0JBQUMsUUFBRCxJQUFVLFVBQVdELE1BQU1FLFFBQTNCLEdBVkE7QUFXQTtBQUFBO0FBQUEsUUFBUSxTQUFTRixNQUFNRyxXQUF2QixFQUFvQyxXQUFVLGFBQTlDO0FBQUE7QUFBQTtBQVhBLEdBRFk7QUFBQSxDQUFkOztBQWlCQUMsT0FBT0wsT0FBUCxHQUFpQkEsT0FBakIiLCJmaWxlIjoiV29ya291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBXb3Jrb3V0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwid29ya291dFwiPlxuICAgIDxzcGFuIGNsYXNzTmFtZT0nd2FybXVwVGl0bGUgYWN0aXZlVGl0bGUnPldhcm11cDwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzc05hbWU9J3dvcmtvdXRUaXRsZSc+V29ya291dDwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzc05hbWU9J2Nvb2xkb3duVGl0bGUnPkNvb2xkb3duPC9zcGFuPlxuICA8VGltZXIgdGltZXI9IHtwcm9wcy50aW1lcn0gLz5cblxuXG5cblxuXG4gIDxFeGVyY2lzZSBleGVyY2lzZT0ge3Byb3BzLmV4ZXJjaXNlfSAvPlxuICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmdvVG9TdW1tYXJ5fSBjbGFzc05hbWU9XCJibGFja0J1dHRvblwiPlN1bW1hcnk8L2J1dHRvbj5cbiAgPC9kaXY+XG4pO1xuXG5cbndpbmRvdy5Xb3Jrb3V0ID0gV29ya291dDtcbiJdfQ==