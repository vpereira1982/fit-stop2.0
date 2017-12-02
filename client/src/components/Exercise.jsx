var Exercise = (props) => {
  var description = props.exercise.description;
  // console.log('description', description)
  var instructions = description.split('.');
  // console.log('instructions before', instructions)
  if (instructions[instructions.length - 1] === '') {
    instructions = instructions.slice(0, -1);
  };
  console.log('instructions', instructions)
  return(
    <div className="exercise">
      <div className="exerciseDescription">
        <img className="exerciseImage" src={props.exercise.picture} />
        <p><span className="exerciseName">{props.exercise.name}</span></p>
        {instructions.map((line, index) => (
          <li className="exerciseBullet" key={index}>{line}</li>
        ))}
      </div>
    </div>
  )
};


window.Exercise = Exercise;
