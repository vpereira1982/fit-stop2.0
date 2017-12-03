class CreateWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let form = document.getElementsByTagName('form')[0];
    let formData = new FormData(form);
    this.props.submitExercise(formData);
  }

 render() {
  return (
    <div>
      <form encType="multipart/form-data" onSubmit={this.handleSubmit} >
        <div>
          <label className="createWorkout">Exercise Type:
            <select className="workoutType" required>
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
          <label className="createWorkout">Description:
            <input type="text" name="description" className="description" required />
          </label>
          <br />
        <div>
          <label className="createWorkout">Upload Video:
            <input type="file" name="upload" accept="video/*" />
          </label>
          <br />
        </div>
        <div>
          <label className="createWorkout">Video URL (optional):
            <input type="text" name="upload" />
          </label>
          <br />
        </div>
        <div>
          <input type="submit" value="Submit" className="btn-createWorkout-Form" />
        </div>
      </form>
      {this.props.visible ? <p style={{'color': 'green'}} > The form has been submitted </p> : <span></span>}
    </div>
    )
  }
}



window.CreateWorkout = CreateWorkout;