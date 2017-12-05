var Summary = (props) => {
  var warmups = props.completedWorkouts.filter((item) => {
    return item.type === 'warmup';
  });

  var mainWorkouts = props.completedWorkouts.filter((item) => {
    return item.type === 'workout';
  });

  var cooldowns = props.completedWorkouts.filter((item) => {
    return item.type === 'cooldown';
  });

 return (
    <div className="summary">
      <h1>Workout Summary</h1>
      <span className="summaryCongrats congratulations">All Done! Congratulations! 🎉</span> <br />
      {!props.loggedIn && (<span className="alert">⚠️  You are currently not logged in. Workout Summary data will not be saved.</span>)}
      <div className="summaryStats">
        <h3 className="summaryTitle"> Date: </h3> {props.workoutDate}
        <h3 className="summaryTitle"> Length of Workout: </h3> {props.formatTime(props.elapsedTime)}

         <h3 className="summaryTitle"> Warmup: </h3>
         {warmups.length > 0 ? warmups.map( item => {
           return (
             <div>
               <ul>
                 <li> {item.name} </li>
               </ul>
             </div>
           )
         })
        : null}

        <h3 className="summaryTitle"> Workout: </h3>
        {mainWorkouts.length > 0 ? mainWorkouts.map( item => {
          return (
            <div>
              <ul>
                <li> {item.name} </li>
              </ul>
            </div>
          )
        })
       : null}

       <h3 className="summaryTitle"> Cooldown: </h3>
       {cooldowns.length > 0 ? cooldowns.map( item => {
         return (
           <div>
             <ul>
               <li> {item.name} </li>
             </ul>
           </div>
         )
       })
      : null}

      <h3 className="summaryTitle">Calories expended: </h3>{props.expendedCalories}

      </div>
      <span className="summaryQuote">"Good things come to those who sweat."</span>
      <button onClick={props.goToDashboard} className="blackButton">Back To Dashboard</button>
    </div>
    )
};

window.Summary = Summary;