var History = (props) => (
	  <div className="history">
	    <h1> History </h1>
	    {props.workoutHistory
	    	.map(indivWorkout => <PastWorkout date={indivWorkout.date} lengthOfWorkout={indivWorkout.lengthOfWorkout} key={indivWorkout._id}/>
	      
	    )}	
	  </div>
);


window.History = History;
