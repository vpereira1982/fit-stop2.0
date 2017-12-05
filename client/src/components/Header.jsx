var Header = (props) => (
  <div className="header">
    {props.showButtons && props.loggedIn && (
      <div>
        <button className='blackButton' onClick={props.logOut}>Log Out</button>
        <button className='blackButton' onClick={props.createWorkout}>Add Workout</button>
        <button className='blackButton' onClick={props.goToProfile}>Profile</button>
      </div>)
    }
    {props.showButtons && !props.loggedIn && (<button className='blackButton' onClick={props.goToLogin}>Log In</button>)}
    {!props.loggedIn && props.showButtons && (<button className='blackButton' onClick={props.goToSignUp}>Sign Up</button>)}
    <div>
      <h1>
        <span className="logo"> FitStop </span>
        <span className="version">v2.0</span>
        <span className='username'>{props.username}</span>
      </h1>
    </div>
  </div>
);


window.Header = Header;
