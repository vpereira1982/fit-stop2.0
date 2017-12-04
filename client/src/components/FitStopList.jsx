var FitStopList = (props) => {
  var wup = props.warmupList.filter(ex => !ex.createdBy);
  var work = props.workoutList.filter(ex => !ex.createdBy);
  var cool = props.cooldownList.filter(ex => !ex.createdBy);
  // console.log('fitsopt', props)
  return (
    <div className="fitStopList">
      <div className="list">
        <h3>Warmups</h3>
        {wup.map((ex, ind) => (<div onClick={() => props.changeProfileView('exerciseCard', ex)} key={ind}>{ex.name}</div>))}
      </div>
      <div className="list">
        <h3>Workouts</h3>
        {work.map((ex, ind) => (<div key={ind}>{ex.name}</div>))}
      </div>
      <div className="list">
        <h3>Cooldowns</h3>
        {cool.map((ex, ind) => (<div key={ind}>{ex.name}</div>))}
      </div>
    </div>
  )
}

window.FitStopList = FitStopList;


/*

   <div className="fitStopList">
      <div className="list">
        <h3>Warmups</h3>
        {wup.map((ex, ind) => (<div key={ind}>{ex.name}</div>))}
      </div>
      <div className="list">
        <h3>Workouts</h3>
        {work.map((ex, ind) => (<div key={ind}>{ex.name}</div>))}
      </div>
      <div className="list">
        <h3>Cooldowns</h3>
        {cool.map((ex, ind) => (<div key={ind}>{ex.name}</div>))}
      </div>
    </div>

*/