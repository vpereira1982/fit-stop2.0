"use strict";

var Summary = function Summary(props) {
  return React.createElement(
    "div",
    { className: "summary" },
    React.createElement(
      "h1",
      null,
      "Workout Summary"
    ),
    React.createElement(
      "span",
      { className: "summaryCongrats" },
      "You did it! Congratulations!"
    ),
    " ",
    React.createElement("br", null),
    React.createElement(
      "span",
      { className: "summaryTime" },
      "Total Time: 15:00 "
    ),
    " ",
    React.createElement("br", null),
    React.createElement(
      "span",
      { className: "summaryWorkoutType" },
      "Workout Type: Upper Body"
    ),
    " ",
    React.createElement("br", null),
    React.createElement(
      "span",
      { className: "summaryExercisesCompleted" },
      "Exercises Completed: Push Ups, Pull Ups, More Push Ups, Some Other Stuff"
    ),
    " ",
    React.createElement("br", null),
    React.createElement(
      "button",
      { onClick: props.goToDashboard, className: "blackButton" },
      "Back To Dashboard"
    )
  );
};

window.Summary = Summary;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N1bW1hcnkuanN4Il0sIm5hbWVzIjpbIlN1bW1hcnkiLCJwcm9wcyIsImdvVG9EYXNoYm9hcmQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsVUFBVSxTQUFWQSxPQUFVLENBQUNDLEtBQUQ7QUFBQSxTQUNaO0FBQUE7QUFBQSxNQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFdBQVUsaUJBQWhCO0FBQUE7QUFBQSxLQUZGO0FBQUE7QUFFd0UsbUNBRnhFO0FBR0U7QUFBQTtBQUFBLFFBQU0sV0FBVSxhQUFoQjtBQUFBO0FBQUEsS0FIRjtBQUFBO0FBRzBELG1DQUgxRDtBQUlFO0FBQUE7QUFBQSxRQUFNLFdBQVUsb0JBQWhCO0FBQUE7QUFBQSxLQUpGO0FBQUE7QUFJdUUsbUNBSnZFO0FBS0U7QUFBQTtBQUFBLFFBQU0sV0FBVSwyQkFBaEI7QUFBQTtBQUFBLEtBTEY7QUFBQTtBQUs4SCxtQ0FMOUg7QUFNRTtBQUFBO0FBQUEsUUFBUSxTQUFTQSxNQUFNQyxhQUF2QixFQUFzQyxXQUFVLGFBQWhEO0FBQUE7QUFBQTtBQU5GLEdBRFk7QUFBQSxDQUFkOztBQVlBQyxPQUFPSCxPQUFQLEdBQWlCQSxPQUFqQiIsImZpbGUiOiJTdW1tYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFN1bW1hcnkgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgPGgxPldvcmtvdXQgU3VtbWFyeTwvaDE+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic3VtbWFyeUNvbmdyYXRzXCI+WW91IGRpZCBpdCEgQ29uZ3JhdHVsYXRpb25zITwvc3Bhbj4gPGJyIC8+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic3VtbWFyeVRpbWVcIj5Ub3RhbCBUaW1lOiAxNTowMCA8L3NwYW4+IDxiciAvPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1bW1hcnlXb3Jrb3V0VHlwZVwiPldvcmtvdXQgVHlwZTogVXBwZXIgQm9keTwvc3Bhbj4gPGJyIC8+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic3VtbWFyeUV4ZXJjaXNlc0NvbXBsZXRlZFwiPkV4ZXJjaXNlcyBDb21wbGV0ZWQ6IFB1c2ggVXBzLCBQdWxsIFVwcywgTW9yZSBQdXNoIFVwcywgU29tZSBPdGhlciBTdHVmZjwvc3Bhbj4gPGJyIC8+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5nb1RvRGFzaGJvYXJkfSBjbGFzc05hbWU9XCJibGFja0J1dHRvblwiPkJhY2sgVG8gRGFzaGJvYXJkPC9idXR0b24+XG4gIDwvZGl2PlxuKTtcblxuXG53aW5kb3cuU3VtbWFyeSA9IFN1bW1hcnk7XG4iXX0=