var OwnerExerciseList = (props) => {
  var warm = props.ownerExerciseList.filter(ex => ex.type === 'warmup');
  var work = props.ownerExerciseList.filter(ex => ex.type === 'workout');
  var cool = props.ownerExerciseList.filter(ex => ex.type === 'cooldown');

  return (
    <div>
      <h2>Your customized exercise list...</h2><br></br>
      <div className="list">
        <h3>Warmups</h3>
        {warm.map((ex, ind) => (<div onClick={() => props.changeProfileView('ownerExerciseCard', ex)}key={ind}>{ex.name}</div>))}
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
  );
};

window.OwnerExerciseList = OwnerExerciseList;

/*
 <div>
      <h2>Your customized exercise list...</h2><br></br>
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
*/