import { combineReducers } from 'redux';
import AcharyaReducer from './reducer_acharya';
import AcharyaReducerDetails from './reducer_acharya_details';


const rootReducer = combineReducers({
	acharyas:AcharyaReducer,
	acharyaDetail:AcharyaReducerDetails
});

export default rootReducer;
