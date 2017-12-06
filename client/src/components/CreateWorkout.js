class CreateWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let form = document.querySelector("form");
    let formData = new FormData(form);
    this.props.submitExercise(formData);
  }

 render() {
  return (
    <div>
      <form method="POST" encType="multipart/form-data" onSubmit={this.handleSubmit} >
        <div>
          <label className="createWorkout">Exercise Type:
            <select className="workoutType" name="type" required>
              <option value="warmup">Warm Up</option>
              <option value="workout">Workout</option>
              <option value="cooldown">Cooldown</option>
            </select>
          </label>
        </div>
        <div>
          <label className="createWorkout">Name:
            <input type="text" name="name" required />
          </label>
          <br />
        </div>
        <div>
          <label className="createWorkout">Description:
            <input type="text" name="description" className="description" required />
          </label>
          <br />
        </div>
        <div>
          <label className="createWorkout">Difficulty:
            <select className="workoutType" name="difficulty" required>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
        </div>
        <div>
          <label className="createWorkout">Muscle Group:
            <input type="text" name="musclegroup" required />
          </label>
          <br />
        </div>
        <div>
          <label className="createWorkout">Upload Video:
            <input type="file" name="videoFile" accept="video/*" />
          </label>
          <br />
        </div>
        <div>
          <label className="createWorkout">Video URL (optional):
            <input type="text" name="videoURL" />
          </label>
          <br />
        </div>
        <div>
          <label className="createWorkout">Upload Picture:
            <input type="file" name="pictureFile" accept="image/*" />
          </label>
          <br />
        </div>
        <div>
          <label className="createWorkout"> Picture URL (optional):
            <input type="text" name="pictureURL" />
          </label>
          <br />
        </div>
        <div>
          <input type="submit" value="Submit" className="btn-createWorkout-Form" />
        </div>
      </form>
      {this.props.visible ? <p style={{'color': 'green'}} > Your Workout has been submitted </p> : <span></span>}
    </div>
    )
  }
}



window.CreateWorkout = CreateWorkout;