import { combineReducers } from 'redux';
import _ from 'lodash';
let initialState;

function acharyas(state=[],action){

	switch(action.type){
		case'FETCH_ACHARYA':
			initialState=action.payload.data;
			if(action.payload.data != null)
				return _.assign({}, state, {
        			acharyas: action.payload.data
      			});
		default:
			return state;
	}
}

function cityfilter(state=[],action){

	switch(action.type){
		case'FILTER_BY_CITY':
			const filteredByCity=initialState.acharyas.filter((acharya)=>acharya.city==action.payload);
			console.log(filteredByCity);
			return filteredByCity;
		case'FILTER_BY_SALUTATION':
			const filteredBySalutation=initialState.acharyas.filter((acharya)=>acharya.salutation==action.payload);
			console.log(filteredBySalutation);
			return filteredBySalutation;

		default:
			if(initialState != undefined)
				return initialState.acharyas;
			else 
				return state;
	}
	
}

const rootReducer = combineReducers({
	acharyas,
	cityfilter

});

export default rootReducer;
