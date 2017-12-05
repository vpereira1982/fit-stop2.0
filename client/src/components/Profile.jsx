var Profile = (props) => {
  // console.log('Profile props', props)
  let view = null;
  if (props.profileView === 'profile') {
    view = <UserProfile />;
  }
  if (props.profileView === 'fitStopList') {
    view = <FitStopList
      warmupList={props.warmupList}
      workoutList={props.workoutList}
      cooldownList={props.cooldownList}
      changeProfileView={props.changeProfileView}
    />;
  }
  if (props.profileView === 'usersList') {
    view = <UsersExerciseList
      warmupList={props.warmupList}
      workoutList={props.workoutList}
      cooldownList={props.cooldownList}
    />;
  }
  if (props.profileView === 'ownerExerciseList') {
    view = <OwnerExerciseList
      ownerExerciseList={props.ownerExerciseList}
      removeExerciseFromUser={props.removeExerciseFromUser}
      changeProfileView={props.changeProfileView}

    />;
  }
  if (props.profileView === 'exerciseCard') {
    view = <ExerciseCard
      exerciseCard={props.exerciseCard}
      addExerciseToUser={props.addExerciseToUser}
    />;
  }
  if (props.profileView === 'ownerExerciseCard') {
    view = <OwnerExerciseCard
      exerciseCard={props.exerciseCard}
      removeExerciseFromUser={props.removeExerciseFromUser}
    />;
  }
  return (
    <div className="user-profile">
      Welcome to Profile page
      <div className="profile-nav-buttons">
        <button className="tablink" id="defaultOpen" onClick={() => props.changeProfileView('profile')}>Profile</button>
        <button className="tablink" onClick={() => props.changeProfileView('ownerExerciseList')}>Your Exercise List</button>
        <button className="tablink" onClick={() => props.changeProfileView('fitStopList')}>FitStop Exercise List</button>
        <button className="tablink" onClick={() => props.changeProfileView('usersList')}>Users Exercise List</button>
      </div>
      <div>
        {view}
      </div>
    </div>
  )
}


window.Profile = Profile;