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
      currentExercises: [],
      workoutHistory: [],
      countdown: 3,
      time: null,
      workoutLengthInMins: 15
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
          React.createElement(Workout, { currentExercises: this.state.currentExercises, timer: this.formatTime(this.state.time), countdown: this.state.countdown, goToSummary: this.goToSummary })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJjdXJyZW50U3RhdGUiLCJjdXJyZW50RXhlcmNpc2VzIiwid29ya291dEhpc3RvcnkiLCJjb3VudGRvd24iLCJ0aW1lIiwid29ya291dExlbmd0aEluTWlucyIsImdvVG9Xb3Jrb3V0IiwiYmluZCIsImdvVG9TdW1tYXJ5IiwiZ29Ub0Rhc2hib2FyZCIsImdvVG9Db3VudGRvd24iLCJzZXRTdGF0ZSIsInN0YXJ0Q291bnRkb3duIiwic3RhcnRUaW1lciIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50IiwiY2xlYXJJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lciIsInNlY29uZHMiLCJtbSIsIk1hdGgiLCJmbG9vciIsInNzIiwiZm9ybWF0VGltZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGlCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG9CQUFjLFdBREg7QUFFWEMsd0JBQWtCLEVBRlA7QUFHWEMsc0JBQWdCLEVBSEw7QUFJWEMsaUJBQVcsQ0FKQTtBQUtYQyxZQUFNLElBTEs7QUFNWEMsMkJBQXFCO0FBTlYsS0FBYjtBQVFBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLE9BQW5CO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUNBLFVBQUtHLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkgsSUFBbkIsT0FBckI7QUFiWTtBQWNiOzs7O29DQUVlO0FBQ2QsV0FBS0ksUUFBTCxDQUFjLEVBQUNYLGNBQWMsV0FBZixFQUFkO0FBQ0EsV0FBS1ks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QUFDLE9BQUQsSUFBUyxrQkFBa0IsS0FBS0QsS0FBTCxDQUFXRSxnQkFBdEMsRUFBd0QsT0FBTyxLQUFLeUIsVUFBTCxDQUFnQixLQUFLM0IsS0FBTCxDQUFXSyxJQUEzQixDQUEvRCxFQUFpRyxXQUFXLEtBQUtMLEtBQUwsQ0FBV0ksU0FBdkgsRUFBa0ksYUFBYSxLQUFLSyxXQUFwSjtBQUZGLFNBREY7QUFNRCxPQVBNLE1BT0EsSUFBSSxLQUFLVCxLQUFMLENBQVdDLFlBQVgsS0FBNEIsU0FBaEMsRUFBMkM7QUFDaEQsZUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFZLEtBQWpCO0FBQ0ksOEJBQUMsTUFBRCxPQURKO0FBRUksOEJBQUMsT0FBRCxJQUFTLGVBQWUsS0FBS1MsYUFBN0I7QUFGSixTQURGO0FBTUQsT0FQTSxNQU9BO0FBQ0wsZUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFHRDtBQUNGLEssQ0FBQzs7Ozs7RUFqSWNrQixNQUFNQyxTLEdBa0l0Qjs7QUFFRkMsT0FBTy9CLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50U3RhdGU6ICdEYXNoYm9hcmQnLFxuICAgICAgY3VycmVudEV4ZXJjaXNlczogW10sXG4gICAgICB3b3Jrb3V0SGlzdG9yeTogW10sXG4gICAgICBjb3VudGRvd246IDMsXG4gICAgICB0aW1lOiBudWxsLFxuICAgICAgd29ya291dExlbmd0aEluTWluczogMTVcbiAgICB9O1xuICAgIHRoaXMuZ29Ub1dvcmtvdXQgPSB0aGlzLmdvVG9Xb3Jrb3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nb1RvU3VtbWFyeSA9IHRoaXMuZ29Ub1N1bW1hcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdvVG9EYXNoYm9hcmQgPSB0aGlzLmdvVG9EYXNoYm9hcmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdvVG9Db3VudGRvd24gPSB0aGlzLmdvVG9Db3VudGRvd24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdvVG9Db3VudGRvd24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXRlOiAnQ291bnRkb3duJ30pO1xuICAgIHRoaXMuc3RhcnRDb3VudGRvd24oKTtcbiAgfVxuXG4gIGdvVG9Xb3Jrb3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRTdGF0ZTogJ1dvcmtvdXQnfSk7XG4gICAgLy9hbmQgc3RhcnQgdGhlIHdvcmtvdXQgdGltZXJcbiAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgfTtcblxuICBnb1RvU3VtbWFyeSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdTdW1tYXJ5J30pO1xuICB9O1xuXG4gIGdvVG9EYXNoYm9hcmQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXRlOiAnRGFzaGJvYXJkJ30pO1xuICB9O1xuXG4gIHN0YXJ0Q291bnRkb3duKCkge1xuICAgIC8vcmVzZXQgY291bnRkb3duIHRvIDNcbiAgICB0aGlzLnNldFN0YXRlKHtjb3VudGRvd246IDN9KTtcbiAgICAvL3N0YXJ0IGludGVydmFsLCBldmVyeSAxIHNlY29uZFxuICAgIHZhciBpbnRlcnZhbD0gc2V0SW50ZXJ2YWwodGhpcy5jb3VudGRvd24uYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aW50ZXJ2YWw6IGludGVydmFsfSk7XG4gIH1cblxuICBjb3VudGRvd24oKSB7XG4gICAgLy9kZWNyZWFzZSBjb3VudGRvd24gYnkgMVxuICAgIC8vdGFrZSB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGlzLnN0YXRlLmNvdW50ZG93biAtLVxuICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5jb3VudGRvd247XG4gICAgY3VycmVudC0tO1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50ZG93bjogY3VycmVudH0pO1xuICAgIC8vaWYgY291bnRkb3duIHJlYWNoZXMgMFxuICAgIGlmICh0aGlzLnN0YXRlLmNvdW50ZG93biA9PT0gMCkge1xuICAgICAgLy9jYW5jZWwgaW50ZXJ2YWxcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbCk7XG4gICAgICAvL2dvIHRvIHdvcmtvdXRcbiAgICAgIHRoaXMuZ29Ub1dvcmtvdXQoKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKCkge1xuICAgIGNvbnNvbGUubG9nKCdzdGFydCB0aW1lcicpO1xuICAgIC8vcmVzZXQgdGltZXJcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuc3RhdGUud29ya291dExlbmd0aEluTWlucyAqIDYwO1xuICAgIHRoaXMuc2V0U3RhdGUoe3RpbWU6IGN1cnJlbnR9KTtcbiAgICAvL3N0YXJ0IGludGVydmFsLCBldmVyeSAxIHNlY29uZFxuICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudGltZXIuYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aW50ZXJ2YWw6IGludGVydmFsfSk7XG4gIH1cblxuICB0aW1lcigpIHtcbiAgICAvL2RlY3JlYXNlIHRpbWVyIGJ5IDFcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuc3RhdGUudGltZTtcbiAgICBjdXJyZW50LS07XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGltZTogY3VycmVudH0pO1xuICAgIC8vaWYgdGltZXIgcmVhY2hlcyAwXG4gICAgaWYgKHRoaXMuc3RhdGUudGltZSA9PT0gMCkge1xuICAgICAgLy9jYW5jZWwgaW50ZXJ2YWxcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbCk7XG4gICAgICAvL2dvIHRvIHN1bW1hcnlcbiAgICAgIHRoaXMuZ29Ub1N1bW1hcnkoKTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXRUaW1lKHNlY29uZHMpIHtcbiAgICB2YXIgbW0gPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgdmFyIHNzID0gc2Vjb25kcyAlIDYwO1xuICAgIGlmIChzcyA8IDEwKSB7XG4gICAgICBzcyA9ICcwJyArIHNzO1xuICAgIH1cbiAgICAvL3JldHVybiB0aW1lIGluIG1tOnNzXG4gICAgcmV0dXJuIG1tICsgJzonICsgc3M7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcblxuICAgIGlmKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAnRGFzaGJvYXJkJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIkFwcFwiPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8RGFzaGJvYXJkIGdvVG9Db3VudGRvd249e3RoaXMuZ29Ub0NvdW50ZG93bn0gd29ya291dEhpc3Rvcnk9e3RoaXMud29ya291dEhpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09ICdDb3VudGRvd24nKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiQXBwXCI+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxDb3VudGRvd24gY291bnRkb3duPXt0aGlzLnN0YXRlLmNvdW50ZG93bn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gJ1dvcmtvdXQnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiQXBwXCI+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxXb3Jrb3V0IGN1cnJlbnRFeGVyY2lzZXM9e3RoaXMuc3RhdGUuY3VycmVudEV4ZXJjaXNlc30gdGltZXI9e3RoaXMuZm9ybWF0VGltZSh0aGlzLnN0YXRlLnRpbWUpfSBjb3VudGRvd249e3RoaXMuc3RhdGUuY291bnRkb3dufSBnb1RvU3VtbWFyeT17dGhpcy5nb1RvU3VtbWFyeX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gJ1N1bW1hcnknKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiQXBwXCI+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8U3VtbWFyeSBnb1RvRGFzaGJvYXJkPXt0aGlzLmdvVG9EYXNoYm9hcmR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8cD5FcnJvci4uLiBzYWQgZmFjZS4uLjwvcD5cbiAgICAgIClcbiAgICB9XG4gIH0gLy9yZW5kZXJcbn0gLy9jbGFzc1xuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==