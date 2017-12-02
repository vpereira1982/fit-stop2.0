const CreateWorkout = (props) => (
  <div>
    <form method="POST" encType="multipart/form-data" action="http://localhost:3000/createworkout">
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
  </div>
)



window.CreateWorkout = CreateWorkout;