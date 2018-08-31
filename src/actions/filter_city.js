export function fetchAcharyaByCity(term)
{	
	return{
		type:'FILTER_BY_CITY',
		payload:term
	};

	
}