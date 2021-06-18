import { API_URL, URL_COMICS } from '../../constants/api';

import getDataApi from '../../utils/get-data-api';

import './app.css';

class App {
	async render() {
		const data = await getDataApi.getData(API_URL + URL_COMICS);
		console.log('results', data);
	}
}

export default new App();
