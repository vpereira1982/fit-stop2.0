class CreateWorkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form type="POST" encType="multipart/form-data" action="/createWorkout">
          <div>
            <label className="createWorkout">Workout Name:
              <input type="text" name="name" required />
            </label>
            <br />
          </div>
            <label className="createWorkout">Description:
              <input type="text" name="description" required />
            </label>
            <br />
          <div>
            <label className="createWorkout">Upload Video:
              <input type="file" name="upload" />
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
      </div>
    )
  }
}

window.CreateWorkout = CreateWorkout;