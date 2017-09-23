'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      currentState: 'Dashboard',
      currentWorkout: [],
      workoutHistory: [],
      countdown: 3,
      time: null,
      workoutLengthInMins: 1
    };
    _this.goToWorkout = _this.goToWorkout.bind(_this);
    _this.goToSummary = _this.goToSummary.bind(_this);
    _this.goToDashboard = _this.goToDashboard.bind(_this);
    _this.goToCountdown = _this.goToCountdown.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'goToCountdown',
    value: function goToCountdown() {
      this.setState({ currentState: 'Countdown' });
      this.startCountdown();
    }
  }, {
    key: 'goToWorkout',
    value: function goToWorkout() {
      this.setState({ currentState: 'Workout' });
      //and start the workout timer
      this.startTimer();
    }
  }, {
    key: 'goToSummary',
    value: function goToSummary() {
      this.setState({ currentState: 'Summary' });
    }
  }, {
    key: 'goToDashboard',
    value: function goToDashboard() {
      this.setState({ currentState: 'Dashboard' });
    }
  }, {
    key: 'startCountdown',
    value: function startCountdown() {
      //reset countdown to 3
      this.setState({ countdown: 3 });
      //start interval, every 1 second
      var interval = setInterval(this.countdown.bind(this), 1000);
      this.setState({ interval: interval });
    }
  }, {
    key: 'countdown',
    value: function countdown() {
      //decrease countdown by 1
      //take the current value of this.state.countdown --
      var current = this.state.countdown;
      current--;
      this.setState({ countdown: current });
      //if countdown reaches 0
      if (this.state.countdown === 0) {
        //cancel interval
        clearInterval(this.state.interval);
        //go to workout
        this.goToWorkout();
      }
    }
  }, {
    key: 'startTimer',
    value: function startTimer() {
      console.log('start timer');
      //reset timer
      var current = this.state.workoutLengthInMins * 60;
      this.setState({ time: current });
      //start interval, every 1 second
      var interval = setInterval(this.timer.bind(this), 1000);
      this.setState({ interval: interval });
    }
  }, {
    key: 'timer',
    value: function timer() {
      //decrease timer by 1
      var current = this.state.time;
      current--;
      this.setState({ time: current });
      //if timer reaches 0
      if (this.state.time === 0) {
        //cancel interval
        clearInterval(this.state.interval);
        //go to summary
        this.goToSummary();
      }
    }
  }, {
    key: 'formatTime',
    value: function formatTime(seconds) {
      var mm = Math.floor(seconds / 60);
      var ss = seconds % 60;
      if (ss < 10) {
        ss = '0' + ss;
      }
      //return time in mm:ss
      return mm + ':' + ss;
    }
  }, {
    key: 'render',
    value: function render() {

      if (this.state.currentState === 'Dashboard') {
        return React.createElement(
          'div',
          { className: 'App' },
          React.createElement(Header, null),
          React.createElement(Dashboard, { goToCountdown: this.goToCountdown, workoutHistory: this.workoutHistory })
        );
      } else if (this.state.currentState === 'Countdown') {
        return React.createElement(
          'div',
          { className: 'App' },
          React.createElement(Header, null),
          React.createElement(Countdown, { countdown: this.state.countdown })
        );
      } else if (this.state.currentState === 'Workout') {
        return React.createElement(
          'div',
          { className: 'App' },
          React.createElement(Header, null),
          React.createElement(Workout, { currentWorkout: this.state.currentWorkout, timer: this.formatTime(this.state.time), countdown: this.state.countdown, goToSummary: this.goToSummary })
        );
      } else if (this.state.currentState === 'Summary') {
        return React.createElement(
          'div',
          { className: 'App' },
          React.createElement(Header, null),
          React.createElement(Summary, { goToDashboard: this.goToDashboard })
        );
      } else {
        return React.createElement(
          'p',
          null,
          'Error... sad face...'
        );
      }
    } //render

  }]);

  return App;
}(React.Component); //class

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJjdXJyZW50U3RhdGUiLCJjdXJyZW50V29ya291dCIsIndvcmtvdXRIaXN0b3J5IiwiY291bnRkb3duIiwidGltZSIsIndvcmtvdXRMZW5ndGhJbk1pbnMiLCJnb1RvV29ya291dCIsImJpbmQiLCJnb1RvU3VtbWFyeSIsImdvVG9EYXNoYm9hcmQiLCJnb1RvQ291bnRkb3duIiwic2V0U3RhdGUiLCJzdGFydENvdW50ZG93biIsInN0YXJ0VGltZXIiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY3VycmVudCIsImNsZWFySW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwidGltZXIiLCJzZWNvbmRzIiwibW0iLCJNYXRoIiwiZmxvb3IiLCJzcyIsImZvcm1hdFRpbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixpQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFBYyxXQURIO0FBRVhDLHNCQUFnQixFQUZMO0FBR1hDLHNCQUFnQixFQUhMO0FBSVhDLGlCQUFXLENBSkE7QUFLWEMsWUFBTSxJQUxLO0FBTVhDLDJCQUFxQjtBQU5WLEtBQWI7QUFRQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQixPQUFuQjtBQUNBLFVBQUtFLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkYsSUFBbkIsT0FBckI7QUFDQSxVQUFLRyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJILElBQW5CLE9BQXJCO0FBYlk7QUFjYjs7OztvQ0FFZTtBQUNkLFdBQUtJLFFBQUwsQ0FBYyxFQUFDWCxjQUFjLFdBQWYsRUFBZDtBQUNBLFdBQUtZLGNB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QyxPQUFELElBQVMsZ0JBQWdCLEtBQUtELEtBQUwsQ0FBV0UsY0FBcEMsRUFBb0QsT0FBTyxLQUFLeUIsVUFBTCxDQUFnQixLQUFLM0IsS0FBTCxDQUFXSyxJQUEzQixDQUEzRCxFQUE2RixXQUFXLEtBQUtMLEtBQUwsQ0FBV0ksU0FBbkgsRUFBOEgsYUFBYSxLQUFLSyxXQUFoSjtBQUZGLFNBREY7QUFNRCxPQVBNLE1BT0EsSUFBSSxLQUFLVCxLQUFMLENBQVdDLFlBQVgsS0FBNEIsU0FBaEMsRUFBMkM7QUFDaEQsZUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFZLEtBQWpCO0FBQ0ksOEJBQUMsTUFBRCxPQURKO0FBRUksOEJBQUMsT0FBRCxJQUFTLGVBQWUsS0FBS1MsYUFBN0I7QUFGSixTQURGO0FBTUQsT0FQTSxNQU9BO0FBQ0wsZUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFHRDtBQUNGLEssQ0FBQzs7Ozs7RUFqSWNrQixNQUFNQyxTLEdBa0l0Qjs7QUFFRkMsT0FBTy9CLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50U3RhdGU6ICdEYXNoYm9hcmQnLFxuICAgICAgY3VycmVudFdvcmtvdXQ6IFtdLFxuICAgICAgd29ya291dEhpc3Rvcnk6IFtdLFxuICAgICAgY291bnRkb3duOiAzLFxuICAgICAgdGltZTogbnVsbCxcbiAgICAgIHdvcmtvdXRMZW5ndGhJbk1pbnM6IDFcbiAgICB9O1xuICAgIHRoaXMuZ29Ub1dvcmtvdXQgPSB0aGlzLmdvVG9Xb3Jrb3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nb1RvU3VtbWFyeSA9IHRoaXMuZ29Ub1N1bW1hcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdvVG9EYXNoYm9hcmQgPSB0aGlzLmdvVG9EYXNoYm9hcmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdvVG9Db3VudGRvd24gPSB0aGlzLmdvVG9Db3VudGRvd24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdvVG9Db3VudGRvd24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXRlOiAnQ291bnRkb3duJ30pO1xuICAgIHRoaXMuc3RhcnRDb3VudGRvd24oKTtcbiAgfVxuXG4gIGdvVG9Xb3Jrb3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRTdGF0ZTogJ1dvcmtvdXQnfSk7XG4gICAgLy9hbmQgc3RhcnQgdGhlIHdvcmtvdXQgdGltZXJcbiAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgfTtcblxuICBnb1RvU3VtbWFyeSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdTdW1tYXJ5J30pO1xuICB9O1xuXG4gIGdvVG9EYXNoYm9hcmQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXRlOiAnRGFzaGJvYXJkJ30pO1xuICB9O1xuXG4gIHN0YXJ0Q291bnRkb3duKCkge1xuICAgIC8vcmVzZXQgY291bnRkb3duIHRvIDNcbiAgICB0aGlzLnNldFN0YXRlKHtjb3VudGRvd246IDN9KTtcbiAgICAvL3N0YXJ0IGludGVydmFsLCBldmVyeSAxIHNlY29uZFxuICAgIHZhciBpbnRlcnZhbD0gc2V0SW50ZXJ2YWwodGhpcy5jb3VudGRvd24uYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aW50ZXJ2YWw6IGludGVydmFsfSk7XG4gIH1cblxuICBjb3VudGRvd24oKSB7XG4gICAgLy9kZWNyZWFzZSBjb3VudGRvd24gYnkgMVxuICAgIC8vdGFrZSB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGlzLnN0YXRlLmNvdW50ZG93biAtLVxuICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5jb3VudGRvd247XG4gICAgY3VycmVudC0tO1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50ZG93bjogY3VycmVudH0pO1xuICAgIC8vaWYgY291bnRkb3duIHJlYWNoZXMgMFxuICAgIGlmICh0aGlzLnN0YXRlLmNvdW50ZG93biA9PT0gMCkge1xuICAgICAgLy9jYW5jZWwgaW50ZXJ2YWxcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbCk7XG4gICAgICAvL2dvIHRvIHdvcmtvdXRcbiAgICAgIHRoaXMuZ29Ub1dvcmtvdXQoKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKCkge1xuICAgIGNvbnNvbGUubG9nKCdzdGFydCB0aW1lcicpO1xuICAgIC8vcmVzZXQgdGltZXJcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuc3RhdGUud29ya291dExlbmd0aEluTWlucyAqIDYwO1xuICAgIHRoaXMuc2V0U3RhdGUoe3RpbWU6IGN1cnJlbnR9KTtcbiAgICAvL3N0YXJ0IGludGVydmFsLCBldmVyeSAxIHNlY29uZFxuICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudGltZXIuYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aW50ZXJ2YWw6IGludGVydmFsfSk7XG4gIH1cblxuICB0aW1lcigpIHtcbiAgICAvL2RlY3JlYXNlIHRpbWVyIGJ5IDFcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuc3RhdGUudGltZTtcbiAgICBjdXJyZW50LS07XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGltZTogY3VycmVudH0pO1xuICAgIC8vaWYgdGltZXIgcmVhY2hlcyAwXG4gICAgaWYgKHRoaXMuc3RhdGUudGltZSA9PT0gMCkge1xuICAgICAgLy9jYW5jZWwgaW50ZXJ2YWxcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbCk7XG4gICAgICAvL2dvIHRvIHN1bW1hcnlcbiAgICAgIHRoaXMuZ29Ub1N1bW1hcnkoKTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXRUaW1lKHNlY29uZHMpIHtcbiAgICB2YXIgbW0gPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgdmFyIHNzID0gc2Vjb25kcyAlIDYwO1xuICAgIGlmIChzcyA8IDEwKSB7XG4gICAgICBzcyA9ICcwJyArIHNzO1xuICAgIH1cbiAgICAvL3JldHVybiB0aW1lIGluIG1tOnNzXG4gICAgcmV0dXJuIG1tICsgJzonICsgc3M7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcblxuICAgIGlmKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAnRGFzaGJvYXJkJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIkFwcFwiPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8RGFzaGJvYXJkIGdvVG9Db3VudGRvd249e3RoaXMuZ29Ub0NvdW50ZG93bn0gd29ya291dEhpc3Rvcnk9e3RoaXMud29ya291dEhpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09ICdDb3VudGRvd24nKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiQXBwXCI+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxDb3VudGRvd24gY291bnRkb3duPXt0aGlzLnN0YXRlLmNvdW50ZG93bn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gJ1dvcmtvdXQnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiQXBwXCI+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxXb3Jrb3V0IGN1cnJlbnRXb3Jrb3V0PXt0aGlzLnN0YXRlLmN1cnJlbnRXb3Jrb3V0fSB0aW1lcj17dGhpcy5mb3JtYXRUaW1lKHRoaXMuc3RhdGUudGltZSl9IGNvdW50ZG93bj17dGhpcy5zdGF0ZS5jb3VudGRvd259IGdvVG9TdW1tYXJ5PXt0aGlzLmdvVG9TdW1tYXJ5fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAnU3VtbWFyeScpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJBcHBcIj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxTdW1tYXJ5IGdvVG9EYXNoYm9hcmQ9e3RoaXMuZ29Ub0Rhc2hib2FyZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxwPkVycm9yLi4uIHNhZCBmYWNlLi4uPC9wPlxuICAgICAgKVxuICAgIH1cbiAgfSAvL3JlbmRlclxufSAvL2NsYXNzXG5cbndpbmRvdy5BcHAgPSBBcHA7Il19