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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Bhc3RXb3Jrb3V0LmpzeCJdLCJuYW1lcyI6WyJQYXN0V29ya291dCIsInByb3BzIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxLQUFEO0FBQUEsUUFDZjtBQUFBO0FBQUEsSUFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxNQUFNLFdBQVUsYUFBaEI7QUFBQTtBQUFBLElBQUo7QUFBQTtBQUFnRDtBQUFBO0FBQUEsTUFBTSxXQUFVLGFBQWhCO0FBQUE7QUFBQSxJQUFoRDtBQUFBO0FBQUE7QUFERixFQURlO0FBQUEsQ0FBbEI7O0FBT0FDLE9BQU9GLFdBQVAsR0FBcUJBLFdBQXJCIiwiZmlsZSI6IlBhc3RXb3Jrb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFBhc3RXb3Jrb3V0ID0gKHByb3BzKSA9PiAoXG5cdCAgPGRpdiBjbGFzc05hbWU9XCJwYXN0V29ya291dFwiPlxuXHQgICAgPHA+IDxzcGFuIGNsYXNzTmFtZT1cImRhdGVBbmRUaW1lXCI+RGF0ZTwvc3Bhbj4gfCA8c3BhbiBjbGFzc05hbWU9XCJkYXRlQW5kVGltZVwiPlRpbWU8L3NwYW4+IHwgRXhlcmNpc2UxLCBFeGVyY2lzZTIsIEV4ZXJjaXNlMyA8L3A+XG5cdCAgPC9kaXY+XG4pO1xuXG5cbndpbmRvdy5QYXN0V29ya291dCA9IFBhc3RXb3Jrb3V0O1xuIl19