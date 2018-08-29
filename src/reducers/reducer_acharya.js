export default function(state=[],action){
	switch(action.type){

	case'FETCH_ACHARYA':
		return [action.payload.data];
	}

	return state;
}