"use strict";

var PastWorkout = function PastWorkout(props) {
  return React.createElement(
    "div",
    { className: "pastWorkout" },
    React.createElement(
      "p",
      null,
      " ",
      React.createElement(
        "span",
        { className: "dateAndTime" },
        "Date"
      ),
      " | ",
      React.createElement(
        "span",
        { className: "dateAndTime" },
        "Time"
      ),
      " | Exercise1, Exercise2, Exercise3 "
    )
  );
};

window.PastWorkout = PastWorkout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Bhc3RXb3Jrb3V0LmpzeCJdLCJuYW1lcyI6WyJQYXN0V29ya291dCIsInByb3BzIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxLQUFEO0FBQUEsU0FDaEI7QUFBQTtBQUFBLE1BQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsVUFBTSxXQUFVLGFBQWhCO0FBQUE7QUFBQSxPQUFKO0FBQUE7QUFBZ0Q7QUFBQTtBQUFBLFVBQU0sV0FBVSxhQUFoQjtBQUFBO0FBQUEsT0FBaEQ7QUFBQTtBQUFBO0FBREYsR0FEZ0I7QUFBQSxDQUFsQjs7QUFPQUMsT0FBT0YsV0FBUCxHQUFxQkEsV0FBckIiLCJmaWxlIjoiUGFzdFdvcmtvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUGFzdFdvcmtvdXQgPSAocHJvcHMpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInBhc3RXb3Jrb3V0XCI+XHJcbiAgICA8cD4gPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZUFuZFRpbWVcIj5EYXRlPC9zcGFuPiB8IDxzcGFuIGNsYXNzTmFtZT1cImRhdGVBbmRUaW1lXCI+VGltZTwvc3Bhbj4gfCBFeGVyY2lzZTEsIEV4ZXJjaXNlMiwgRXhlcmNpc2UzIDwvcD5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcblxyXG53aW5kb3cuUGFzdFdvcmtvdXQgPSBQYXN0V29ya291dDtcclxuIl19