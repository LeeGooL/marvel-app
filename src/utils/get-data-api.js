import axios from 'axios';

import { API_KEY } from '../constants/api';

class GetDataApi {
	async getData(url) {
		try {
			const {
				data: {
					data: { results },
				},
			} = await axios.get(url, {
				params: {
					apikey: API_KEY,
					limit: 100,
				},
			});

			return results;
		} catch (error) {
			console.log(error.message);
			return false;
		}
	}
}

export default new GetDataApi();
