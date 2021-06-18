import 'regenerator-runtime/runtime';

import { API_URL, URL_COMICS } from './constants/api';

import getDataApi from './utlis/get-data-api';

(async () => {
	const data = await getDataApi.getData(API_URL + URL_COMICS);
	console.log('results', data);
})();
