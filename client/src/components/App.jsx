class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className = "App">
    	<Header />
      <Dashboard />
      <Workout />
      </div>
    )
  }
}

window.App = App;