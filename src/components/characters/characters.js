import { IMG_STANDART_XLARGE } from '../../constants/api';
import { ROOT_MODAL } from '../../constants/root';
import getDataApi from '../../utils/get-data-api';

import Notification from '../notification';

import imgCloseWhite from './img/close-white.svg';
import classes from './characters.module.css';

class Characters {
	renderContent(data) {
		let htmlContent = '';

		data.forEach(({ name, thumbnail: { path, extension } }) => {
			const imgSrc = `${path}/${IMG_STANDART_XLARGE}.${extension}`;

			htmlContent += `
				<li class="${classes.characters__item}">
					<img class="img-cover ${classes.characters__img}" src="${imgSrc}" alt="character image" />
					<span class="${classes.characters__name}">${name}</span>
				</li>
			`;
		});

		const htmlWrapper = `
			<div class="${classes.wrapper}">
				<ul class="${classes.characters__container}">${htmlContent}</ul>

				<button
					class="bg-contain btn ${classes.characters__close}"
					onclick="modal.innerHTML = ''"
					style="background-image: url(${imgCloseWhite})"
				></button>
			</div>
		`;

		ROOT_MODAL.innerHTML = htmlWrapper;
	}

	async render(url) {
		const data = await getDataApi.getData(url);

		data.length ? this.renderContent(data) : Notification.render();
	}
}

export default new Characters();
