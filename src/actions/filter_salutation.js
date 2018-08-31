export function fetchAcharyaBySalutation(term)
{	
	return{
		type:'FILTER_BY_SALUTATION',
		payload:term
	};
}