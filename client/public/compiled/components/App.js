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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJjdXJyZW50U3RhdGUiLCJjdXJyZW50RXhlcmNpc2VzIiwid29ya291dEhpc3RvcnkiLCJjb3VudGRvd24iLCJ0aW1lIiwid29ya291dExlbmd0aEluTWlucyIsImdvVG9Xb3Jrb3V0IiwiYmluZCIsImdvVG9TdW1tYXJ5IiwiZ29Ub0Rhc2hib2FyZCIsImdvVG9Db3VudGRvd24iLCJzZXRTdGF0ZSIsInN0YXJ0Q291bnRkb3duIiwic3RhcnRUaW1lciIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50IiwiY2xlYXJJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lciIsInNlY29uZHMiLCJtbSIsIk1hdGgiLCJmbG9vciIsInNzIiwiZm9ybWF0VGltZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGlCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG9CQUFjLFdBREg7QUFFWEMsd0JBQWtCLEVBRlA7QUFHWEMsc0JBQWdCLEVBSEw7QUFJWEMsaUJBQVcsQ0FKQTtBQUtYQyxZQUFNLElBTEs7QUFNWEMsMkJBQXFCO0FBTlYsS0FBYjtBQVFBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLE9BQW5CO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUNBLFVBQUtHLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkgsSUFBbkIsT0FBckI7QUFiWTtBQWNiOzs7O29DQUVlO0FBQ2QsV0FBS0ksUUFBTCxDQUFjLEVBQUNYLGNBQWMsV0FBZixFQUFkO0FBQ0EsV0FBS1ks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QUFDLE9BQUQsSUFBUyxrQkFBa0IsS0FBS0QsS0FBTCxDQUFXRSxnQkFBdEMsRUFBd0QsT0FBTyxLQUFLeUIsVUFBTCxDQUFnQixLQUFLM0IsS0FBTCxDQUFXSyxJQUEzQixDQUEvRCxFQUFpRyxXQUFXLEtBQUtMLEtBQUwsQ0FBV0ksU0FBdkgsRUFBa0ksYUFBYSxLQUFLSyxXQUFwSjtBQUZGLFNBREY7QUFNRCxPQVBNLE1BT0EsSUFBSSxLQUFLVCxLQUFMLENBQVdDLFlBQVgsS0FBNEIsU0FBaEMsRUFBMkM7QUFDaEQsZUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFZLEtBQWpCO0FBQ0ksOEJBQUMsTUFBRCxPQURKO0FBRUksOEJBQUMsT0FBRCxJQUFTLGVBQWUsS0FBS1MsYUFBN0I7QUFGSixTQURGO0FBTUQsT0FQTSxNQU9BO0FBQ0wsZUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFHRDtBQUNGLEssQ0FBQzs7Ozs7RUFqSWNrQixNQUFNQyxTLEdBa0l0Qjs7QUFFRkMsT0FBTy9CLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGN1cnJlbnRTdGF0ZTogJ0Rhc2hib2FyZCcsXHJcbiAgICAgIGN1cnJlbnRFeGVyY2lzZXM6IFtdLFxyXG4gICAgICB3b3Jrb3V0SGlzdG9yeTogW10sXHJcbiAgICAgIGNvdW50ZG93bjogMyxcclxuICAgICAgdGltZTogbnVsbCxcclxuICAgICAgd29ya291dExlbmd0aEluTWluczogMVxyXG4gICAgfTtcclxuICAgIHRoaXMuZ29Ub1dvcmtvdXQgPSB0aGlzLmdvVG9Xb3Jrb3V0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmdvVG9TdW1tYXJ5ID0gdGhpcy5nb1RvU3VtbWFyeS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5nb1RvRGFzaGJvYXJkID0gdGhpcy5nb1RvRGFzaGJvYXJkLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmdvVG9Db3VudGRvd24gPSB0aGlzLmdvVG9Db3VudGRvd24uYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGdvVG9Db3VudGRvd24oKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdDb3VudGRvd24nfSk7XHJcbiAgICB0aGlzLnN0YXJ0Q291bnRkb3duKCk7XHJcbiAgfVxyXG5cclxuICBnb1RvV29ya291dCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRTdGF0ZTogJ1dvcmtvdXQnfSk7XHJcbiAgICAvL2FuZCBzdGFydCB0aGUgd29ya291dCB0aW1lclxyXG4gICAgdGhpcy5zdGFydFRpbWVyKCk7XHJcbiAgfTtcclxuXHJcbiAgZ29Ub1N1bW1hcnkoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdTdW1tYXJ5J30pO1xyXG4gIH07XHJcblxyXG4gIGdvVG9EYXNoYm9hcmQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdEYXNoYm9hcmQnfSk7XHJcbiAgfTtcclxuXHJcbiAgc3RhcnRDb3VudGRvd24oKSB7XHJcbiAgICAvL3Jlc2V0IGNvdW50ZG93biB0byAzXHJcbiAgICB0aGlzLnNldFN0YXRlKHtjb3VudGRvd246IDN9KTtcclxuICAgIC8vc3RhcnQgaW50ZXJ2YWwsIGV2ZXJ5IDEgc2Vjb25kXHJcbiAgICB2YXIgaW50ZXJ2YWw9IHNldEludGVydmFsKHRoaXMuY291bnRkb3duLmJpbmQodGhpcyksIDEwMDApO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7aW50ZXJ2YWw6IGludGVydmFsfSk7XHJcbiAgfVxyXG5cclxuICBjb3VudGRvd24oKSB7XHJcbiAgICAvL2RlY3JlYXNlIGNvdW50ZG93biBieSAxXHJcbiAgICAvL3Rha2UgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhpcy5zdGF0ZS5jb3VudGRvd24gLS1cclxuICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5jb3VudGRvd247XHJcbiAgICBjdXJyZW50LS07XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjb3VudGRvd246IGN1cnJlbnR9KTtcclxuICAgIC8vaWYgY291bnRkb3duIHJlYWNoZXMgMFxyXG4gICAgaWYgKHRoaXMuc3RhdGUuY291bnRkb3duID09PSAwKSB7XHJcbiAgICAgIC8vY2FuY2VsIGludGVydmFsXHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbCk7XHJcbiAgICAgIC8vZ28gdG8gd29ya291dFxyXG4gICAgICB0aGlzLmdvVG9Xb3Jrb3V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFydFRpbWVyKCkge1xyXG4gICAgY29uc29sZS5sb2coJ3N0YXJ0IHRpbWVyJyk7XHJcbiAgICAvL3Jlc2V0IHRpbWVyXHJcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuc3RhdGUud29ya291dExlbmd0aEluTWlucyAqIDYwO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7dGltZTogY3VycmVudH0pO1xyXG4gICAgLy9zdGFydCBpbnRlcnZhbCwgZXZlcnkgMSBzZWNvbmRcclxuICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudGltZXIuYmluZCh0aGlzKSwgMTAwMCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtpbnRlcnZhbDogaW50ZXJ2YWx9KTtcclxuICB9XHJcblxyXG4gIHRpbWVyKCkge1xyXG4gICAgLy9kZWNyZWFzZSB0aW1lciBieSAxXHJcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuc3RhdGUudGltZTtcclxuICAgIGN1cnJlbnQtLTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3RpbWU6IGN1cnJlbnR9KTtcclxuICAgIC8vaWYgdGltZXIgcmVhY2hlcyAwXHJcbiAgICBpZiAodGhpcy5zdGF0ZS50aW1lID09PSAwKSB7XHJcbiAgICAgIC8vY2FuY2VsIGludGVydmFsXHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbCk7XHJcbiAgICAgIC8vZ28gdG8gc3VtbWFyeVxyXG4gICAgICB0aGlzLmdvVG9TdW1tYXJ5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JtYXRUaW1lKHNlY29uZHMpIHtcclxuICAgIHZhciBtbSA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcclxuICAgIHZhciBzcyA9IHNlY29uZHMgJSA2MDtcclxuICAgIGlmIChzcyA8IDEwKSB7XHJcbiAgICAgIHNzID0gJzAnICsgc3M7XHJcbiAgICB9XHJcbiAgICAvL3JldHVybiB0aW1lIGluIG1tOnNzXHJcbiAgICByZXR1cm4gbW0gKyAnOicgKyBzcztcclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgaWYodGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09ICdEYXNoYm9hcmQnKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIkFwcFwiPlxyXG4gICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgPERhc2hib2FyZCBnb1RvQ291bnRkb3duPXt0aGlzLmdvVG9Db3VudGRvd259IHdvcmtvdXRIaXN0b3J5PXt0aGlzLndvcmtvdXRIaXN0b3J5fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAnQ291bnRkb3duJykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJBcHBcIj5cclxuICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgIDxDb3VudGRvd24gY291bnRkb3duPXt0aGlzLnN0YXRlLmNvdW50ZG93bn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gJ1dvcmtvdXQnKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIkFwcFwiPlxyXG4gICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgPFdvcmtvdXQgY3VycmVudEV4ZXJjaXNlcz17dGhpcy5zdGF0ZS5jdXJyZW50RXhlcmNpc2VzfSB0aW1lcj17dGhpcy5mb3JtYXRUaW1lKHRoaXMuc3RhdGUudGltZSl9IGNvdW50ZG93bj17dGhpcy5zdGF0ZS5jb3VudGRvd259IGdvVG9TdW1tYXJ5PXt0aGlzLmdvVG9TdW1tYXJ5fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAnU3VtbWFyeScpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiQXBwXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPFN1bW1hcnkgZ29Ub0Rhc2hib2FyZD17dGhpcy5nb1RvRGFzaGJvYXJkfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxwPkVycm9yLi4uIHNhZCBmYWNlLi4uPC9wPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfSAvL3JlbmRlclxyXG59IC8vY2xhc3NcclxuXHJcbndpbmRvdy5BcHAgPSBBcHA7Il19