export default function(state=[],action){
	switch(action.type){
	case'ACTIVE_ACHARYA':
		return [action.payload];
	}

	return state;
}