"use strict";

var Workout = function Workout(props) {
  return React.createElement(
    "div",
    { className: "workout" },
    "Workout View Here",
    React.createElement(Countdown, null),
    React.createElement(Timer, null),
    React.createElement(Exercise, null),
    React.createElement(Summary, null)
  );
};

window.Workout = Workout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1dvcmtvdXQuanN4Il0sIm5hbWVzIjpbIldvcmtvdXQiLCJwcm9wcyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRDtBQUFBLFNBQ1o7QUFBQTtBQUFBLE1BQUssV0FBVSxTQUFmO0FBQUE7QUFFQSx3QkFBQyxTQUFELE9BRkE7QUFHQSx3QkFBQyxLQUFELE9BSEE7QUFJQSx3QkFBQyxRQUFELE9BSkE7QUFLQSx3QkFBQyxPQUFEO0FBTEEsR0FEWTtBQUFBLENBQWQ7O0FBWUFDLE9BQU9GLE9BQVAsR0FBaUJBLE9BQWpCIiwiZmlsZSI6IldvcmtvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgV29ya291dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtvdXRcIj5cbiAgV29ya291dCBWaWV3IEhlcmVcbiAgPENvdW50ZG93biAvPlxuICA8VGltZXIgLz5cbiAgPEV4ZXJjaXNlIC8+XG4gIDxTdW1tYXJ5IC8+XG5cbiAgPC9kaXY+XG4pO1xuXG5cbndpbmRvdy5Xb3Jrb3V0ID0gV29ya291dDtcbiJdfQ==