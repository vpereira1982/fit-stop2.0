"use strict";

var Dashboard = function Dashboard(props) {
	return React.createElement(
		"div",
		{ className: "dashboard" },
		React.createElement(
			"h1",
			null,
			"Start Workout"
		),
		React.createElement(
			"div",
			{ className: "startButton" },
			React.createElement("img", { onClick: props.goToCountdown, src: "../src/images/pizzablue.png", alt: "Start" })
		),
		React.createElement(History, null)
	);
};

window.Dashboard = Dashboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC5qc3giXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwicHJvcHMiLCJnb1RvQ291bnRkb3duIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxLQUFEO0FBQUEsUUFDZDtBQUFBO0FBQUEsSUFBSyxXQUFVLFdBQWY7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBREE7QUFFRztBQUFBO0FBQUEsS0FBSyxXQUFVLGFBQWY7QUFDQyxnQ0FBSyxTQUFVQSxNQUFNQyxhQUFyQixFQUFvQyxLQUFJLDZCQUF4QyxFQUFzRSxLQUFJLE9BQTFFO0FBREQsR0FGSDtBQUtDLHNCQUFDLE9BQUQ7QUFMRCxFQURjO0FBQUEsQ0FBaEI7O0FBV0FDLE9BQU9ILFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6IkRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBEYXNoYm9hcmQgPSAocHJvcHMpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZFwiPlxyXG5cdFx0PGgxPlN0YXJ0IFdvcmtvdXQ8L2gxPlxyXG5cdCAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJ0QnV0dG9uXCI+XHJcblx0XHQgICAgPGltZyBvbkNsaWNrPSB7cHJvcHMuZ29Ub0NvdW50ZG93bn0gc3JjPVwiLi4vc3JjL2ltYWdlcy9waXp6YWJsdWUucG5nXCIgYWx0PVwiU3RhcnRcIi8+XHJcblx0XHQgIDwvZGl2PlxyXG5cdCAgPEhpc3RvcnkgLz5cclxuXHQ8L2Rpdj5cclxuKTtcclxuXHJcblxyXG53aW5kb3cuRGFzaGJvYXJkID0gRGFzaGJvYXJkO1xyXG4iXX0=