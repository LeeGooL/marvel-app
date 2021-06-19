import Comics from '../comics';

import './app.css';

class App {
	async render() {
		await Comics.render();
	}
}

export default new App();
