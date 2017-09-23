'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
    //countdown numbers
    //workout timer
  }

  //getExercises

  //start countdown

  //start timer

  //

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Hi'
        ),
        React.createElement(
          'div',
          { className: 'App' },
          React.createElement(Header, null),
          React.createElement(Dashboard, null),
          React.createElement(Workout, { exercises: ['a', 'b', 'c'], timer: 15, count: 3 })
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osaUJBQWM7QUFBQTs7QUFBQTtBQUVaO0FBQ0E7QUFDRDs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs2QkFFUztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBWSxLQUFqQjtBQUNBLDhCQUFDLE1BQUQsT0FEQTtBQUVBLDhCQUFDLFNBQUQsT0FGQTtBQUdBLDhCQUFDLE9BQUQsSUFBUyxXQUFXLENBQUMsR0FBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLENBQXBCLEVBQW9DLE9BQU8sRUFBM0MsRUFBK0MsT0FBTyxDQUF0RDtBQUhBO0FBRkYsT0FERjtBQVdEOzs7O0VBM0JlQyxNQUFNQyxTOztBQStCeEJDLE9BQU9ILEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIC8vY291bnRkb3duIG51bWJlcnNcbiAgICAvL3dvcmtvdXQgdGltZXJcbiAgfVxuXG4gIC8vZ2V0RXhlcmNpc2VzXG5cbiAgLy9zdGFydCBjb3VudGRvd25cblxuICAvL3N0YXJ0IHRpbWVyXG5cbiAgLy9cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5IaTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJBcHBcIj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8RGFzaGJvYXJkIC8+XG4gICAgICAgIDxXb3Jrb3V0IGV4ZXJjaXNlcz17WydhJywnYicsICdjJ119IHRpbWVyPXsxNX0gY291bnQ9ezN9IC8+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==