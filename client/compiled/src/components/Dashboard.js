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
			{ className: "start-button" },
			React.createElement(
				"a",
				{ href: "http://example.com" },
				React.createElement("img", { src: "http://pngimages.net/sites/default/files/right-triangle-png-image-80170.png", alt: "Start" })
			)
		),
		React.createElement(History, null)
	);
};

window.Dashboard = Dashboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC5qc3giXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwicHJvcHMiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsWUFBWSxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxRQUNmO0FBQUE7QUFBQSxJQUFLLFdBQVUsV0FBZjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FERDtBQUVJO0FBQUE7QUFBQSxLQUFLLFdBQVUsY0FBZjtBQUNDO0FBQUE7QUFBQSxNQUFHLE1BQUssb0JBQVI7QUFDSSxpQ0FBSyxLQUFJLDZFQUFULEVBQXVGLEtBQUksT0FBM0Y7QUFESjtBQURELEdBRko7QUFPSSxzQkFBQyxPQUFEO0FBUEosRUFEZTtBQUFBLENBQWhCOztBQWFBQyxPQUFPRixTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJEYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRGFzaGJvYXJkID0gKHByb3BzKSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkXCI+XG5cdFx0PGgxPlN0YXJ0IFdvcmtvdXQ8L2gxPlxuXHQgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFydC1idXR0b25cIj5cblx0XHQgICAgPGEgaHJlZj1cImh0dHA6Ly9leGFtcGxlLmNvbVwiPiBcblx0XHQgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3BuZ2ltYWdlcy5uZXQvc2l0ZXMvZGVmYXVsdC9maWxlcy9yaWdodC10cmlhbmdsZS1wbmctaW1hZ2UtODAxNzAucG5nXCIgYWx0PVwiU3RhcnRcIiAvPlxuXHRcdCAgICA8L2E+XG5cdFx0PC9kaXY+XG5cdCAgICA8SGlzdG9yeSAvPlxuXHQ8L2Rpdj5cbik7XG5cblxud2luZG93LkRhc2hib2FyZCA9IERhc2hib2FyZDtcbiJdfQ==