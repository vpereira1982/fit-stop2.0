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
      <Summary />
      </div>
    )
  }
}

window.App = App;