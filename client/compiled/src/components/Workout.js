"use strict";

var Workout = function Workout(props) {
  return React.createElement(
    "div",
    { className: "workout" },
    "Workout View Here",
    React.createElement(Countdown, { count: props.count }),
    React.createElement(Timer, { timer: props.timer }),
    React.createElement(Exercise, { exercise: props.exercise }),
    React.createElement(Summary, null)
  );
};

window.Workout = Workout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1dvcmtvdXQuanN4Il0sIm5hbWVzIjpbIldvcmtvdXQiLCJwcm9wcyIsImNvdW50IiwidGltZXIiLCJleGVyY2lzZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRDtBQUFBLFNBQ1o7QUFBQTtBQUFBLE1BQUssV0FBVSxTQUFmO0FBQUE7QUFFQSx3QkFBQyxTQUFELElBQVcsT0FBUUEsTUFBTUMsS0FBekIsR0FGQTtBQUdBLHdCQUFDLEtBQUQsSUFBTyxPQUFRRCxNQUFNRSxLQUFyQixHQUhBO0FBSUEsd0JBQUMsUUFBRCxJQUFVLFVBQVdGLE1BQU1HLFFBQTNCLEdBSkE7QUFLQSx3QkFBQyxPQUFEO0FBTEEsR0FEWTtBQUFBLENBQWQ7O0FBWUFDLE9BQU9MLE9BQVAsR0FBaUJBLE9BQWpCIiwiZmlsZSI6IldvcmtvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgV29ya291dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtvdXRcIj5cbiAgV29ya291dCBWaWV3IEhlcmVcbiAgPENvdW50ZG93biBjb3VudD0ge3Byb3BzLmNvdW50fSAvPlxuICA8VGltZXIgdGltZXI9IHtwcm9wcy50aW1lcn0gLz5cbiAgPEV4ZXJjaXNlIGV4ZXJjaXNlPSB7cHJvcHMuZXhlcmNpc2V9IC8+XG4gIDxTdW1tYXJ5IC8+XG5cbiAgPC9kaXY+XG4pO1xuXG5cbndpbmRvdy5Xb3Jrb3V0ID0gV29ya291dDtcbiJdfQ==