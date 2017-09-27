"use strict";

var Exercise = function Exercise(props) {
  return React.createElement(
    "div",
    { className: "exercise" },
    React.createElement(
      "div",
      { className: "exerciseDescription" },
      React.createElement("img", { className: "exerciseImage", src: "../src/images/pushUps.png" }),
      React.createElement(
        "p",
        null,
        React.createElement(
          "span",
          { className: "exerciseName" },
          "Push Ups"
        )
      ),
      "- Get into plank position and place hands wide apart, supporting your body on your toes. - Your body should be straight and elbows extended. Keep abs engages and hips lifted off the floor. - Allow the elbows to flex and lower your chest to the floor. - Pause and then repeat."
    )
  );
};

window.Exercise = Exercise;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0V4ZXJjaXNlLmpzeCJdLCJuYW1lcyI6WyJFeGVyY2lzZSIsInByb3BzIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUEsTUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHFCQUFmO0FBQ0ksbUNBQUssV0FBVSxlQUFmLEVBQStCLEtBQUksMkJBQW5DLEdBREo7QUFFSTtBQUFBO0FBQUE7QUFBRztBQUFBO0FBQUEsWUFBTSxXQUFVLGNBQWhCO0FBQUE7QUFBQTtBQUFILE9BRko7QUFBQTtBQUFBO0FBREYsR0FEYTtBQUFBLENBQWY7O0FBZUFDLE9BQU9GLFFBQVAsR0FBa0JBLFFBQWxCIiwiZmlsZSI6IkV4ZXJjaXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEV4ZXJjaXNlID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZXhlcmNpc2VcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImV4ZXJjaXNlRGVzY3JpcHRpb25cIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJleGVyY2lzZUltYWdlXCIgc3JjPVwiLi4vc3JjL2ltYWdlcy9wdXNoVXBzLnBuZ1wiIC8+XG4gICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cImV4ZXJjaXNlTmFtZVwiPlB1c2ggVXBzPC9zcGFuPjwvcD5cbiAgICAgICAgICAtIEdldCBpbnRvIHBsYW5rIHBvc2l0aW9uIGFuZCBwbGFjZSBoYW5kcyB3aWRlIGFwYXJ0LCBzdXBwb3J0aW5nIHlvdXIgYm9keSBvbiB5b3VyIHRvZXMuIFxuICAgICAgICAgIC0gWW91ciBib2R5IHNob3VsZCBiZSBzdHJhaWdodCBhbmQgZWxib3dzIGV4dGVuZGVkLiBLZWVwIGFicyBlbmdhZ2VzIGFuZCBoaXBzIGxpZnRlZCBvZmYgdGhlIGZsb29yLiBcbiAgICAgICAgICAtIEFsbG93IHRoZSBlbGJvd3MgdG8gZmxleCBhbmQgbG93ZXIgeW91ciBjaGVzdCB0byB0aGUgZmxvb3IuIFxuICAgICAgICAgIC0gUGF1c2UgYW5kIHRoZW4gcmVwZWF0LlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuKTtcblxuXG53aW5kb3cuRXhlcmNpc2UgPSBFeGVyY2lzZTtcbiJdfQ==