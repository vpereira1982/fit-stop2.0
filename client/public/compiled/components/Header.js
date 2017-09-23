"use strict";

var Header = function Header(props) {
  return React.createElement(
    "div",
    { className: "header" },
    React.createElement(
      "button",
      { className: "blackButton" },
      "Log In"
    ),
    React.createElement(
      "button",
      { className: "blackButton" },
      "Sign Up"
    ),
    React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        " FitStop "
      )
    )
  );
};

window.Header = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qc3giXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUNYO0FBQUE7QUFBQSxNQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQSxRQUFRLFdBQVUsYUFBbEI7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBUSxXQUFVLGFBQWxCO0FBQUE7QUFBQSxLQUZGO0FBR0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBSEYsR0FEVztBQUFBLENBQWI7O0FBV0FDLE9BQU9GLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBIZWFkZXIgPSAocHJvcHMpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJibGFja0J1dHRvblwiPkxvZyBJbjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJibGFja0J1dHRvblwiPlNpZ24gVXA8L2J1dHRvbj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT4gRml0U3RvcCA8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5cclxud2luZG93LkhlYWRlciA9IEhlYWRlcjtcclxuIl19