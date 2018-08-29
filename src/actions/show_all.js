import axios from 'axios';

export function fetchAcharya()
{
	const url=`http://staging.chinmayamission.com/wp-json/gcmw/v1/acharya-list`;
	const request =axios.get(url);
	return{
		type:'FETCH_ACHARYA',
		payload:request
	};
}