var OwnerExerciseList = (props) => {
  // console.log('in owner ex list', props.OwnerExerciseList)
  var warm = props.ownerExerciseList[0];
  var work = props.ownerExerciseList[1];
  var cool = props.ownerExerciseList[2];
  return (
    <div>
      <h2>Your customized exercise list</h2><br>
      <div className="list">
        <h3>Warmups</h3>
        {warm.map((ex, ind) => (<div key={ind}>{ex.name}</div>))}
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

window.OwnerExerciseList = OwnerExerciseList;