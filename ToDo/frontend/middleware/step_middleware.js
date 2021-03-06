import {fetchSteps, 
	createStep, 
	updateStep, 
	destroyStep} from '../util/step_api_util';

import {
	requestSteps,
	receiveStep,
	receiveSteps,
	removeStep,
	REQUEST_STEPS,
	CREATE_STEP,
	UPDATE_STEP,
	DESTROY_STEP} from '../actions/step_actions';


const StepMiddleware = ({getState, dispatch}) => next => action => { 
		let success = null; 
		let error = e => console.log(e); // same error callback for all cases 

	switch(action.type){
		case REQUEST_STEPS:
			success = data => dispatch(receiveSteps(data));
			fetchSteps(action.todo_id, success);
			return next(action);

		case CREATE_STEP:
			success = data => dispatch(receiveStep(data));
			createStep(action.todo_id, action.step, success, error);
			return next(action);

		case UPDATE_STEP:
			success = data => dispatch(receiveStep(data)); //call your new API utility function updateStep and pass 
			//receiveTodo as its success callback
			updateStep(action.step, success)
			return next(action);


		case DESTROY_STEP: // call your new API utility function destroySteps and pass removeSteps as its success callback
			success = data => dispatch(removeStep(data))
			destroyStep(action.todo_id, action.step, success)
			return next(action);	

		default: 
			return next(action)
	}
}


export default StepMiddleware;