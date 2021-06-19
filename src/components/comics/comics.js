import {
	API_URL,
	URL_COMICS,
	IMG_STANDART_XLARGE,
	IMG_NOT_AVAILABLE,
	URL_CHARACTERS,
} from '../../constants/api';
import { ROOT_INDEX } from '../../constants/root';

import getDataApi from '../../utils/get-data-api';

import './comics.css';

class Comics {
	async render() {
		const data = await getDataApi.getData(API_URL + URL_COMICS);

		let htmlContent = '';

		data.forEach(({ id, title, thumbnail: { extension, path } }) => {
			if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
				const url = `${API_URL}${URL_COMICS}/${id}/${URL_CHARACTERS}`;
				const imgSrc = `${path}/${IMG_STANDART_XLARGE}.${extension}`;

				htmlContent += `
				<li class="comics__item" data-url="${url}">
					<span class="comics__title">${title}</span>
					<img class="comics__img" src="${imgSrc}" alt="Poster" />
				</li>
			`;
			}
		});

		let htmlWrapper = `
			<ul class="comics__container">
				${htmlContent}
			</ul>
		`;

		ROOT_INDEX.innerHTML = htmlWrapper;
	}

	eventListener() {
		document.querySelectorAll('.comics__item').forEach((element) => {
			const url = element.getAttribute('data-url');

			element.addEventListener('click', () => {
				console.log(url);
			});
		});
	}
}

export default new Comics();
