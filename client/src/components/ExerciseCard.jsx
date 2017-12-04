var ExerciseCard = (props) => {
  var card = props.exerciseCard;
  console.log('exercise card props', card)
  return (
    <div>
      <div className="ex-card-name">
        <div className="ex-card-piece">
          <span ><b>Name: </b>{card.name}</span>
        <span className="ex-card-addButton">
          <button id="ex-card-addButton" onClick={() => props.addExerciseToUser(card)}>Add To Your Workout!</button>
        </span>
        </div>
      </div>
      <div className="ex-card-piece"><b>Target Muscle Group: </b>{card.muscleGroup}
      </div>
      <div className="ex-card-piece">
        <span><b>Description: </b>{card.description}</span>
      </div>
      <div>
        <img src={card.picture}/>
      </div>

    </div>
  )
}

window.ExerciseCard = ExerciseCard;