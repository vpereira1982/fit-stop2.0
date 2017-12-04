var Profile = (props) => {
  console.log('props in profile', props)
  var view = null;
  if (props.profileView === 'profile') {
    view = <UserProfile />
  }
  if (props.profileView === 'fitStopList') {
    view = <FitStopList
      warmupList={props.warmupList}
      workoutList={props.workoutList}
      cooldownList={props.cooldownList}
    />
  }
  if (props.profileView === 'usersList') {
    view = <UsersExerciseList
      warmupList={props.warmupList}
      workoutList={props.workoutList}
      cooldownList={props.cooldownList}
    />
  }
  if (props.profileView === 'ownerExerciseList') {
    view = <OwnerExerciseList />
  }

  return (
    <div className="user-profile">
      Welcome to Profile page
      <div className="profile-nav-buttons">
        <button className="tablink" onClick={() => props.changeProfileView('usersList')}>Users Exercise List</button>
        <button className="tablink" onClick={() => props.changeProfileView('fitStopList')}>FitStop Exercise List</button>
        <button className="tablink" onClick={() => props.changeProfileView('ownerList')}>Your Exercise List</button>
        <button className="tablink" id="defaultOpen" onClick={() => props.changeProfileView('profile')}>Profile</button>
      </div>
      <div>
        {view}
      </div>
    </div>
  )
}


window.Profile = Profile;