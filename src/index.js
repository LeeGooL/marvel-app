import 'regenerator-runtime/runtime';

import App from './components/app';
import Comics from './components/comics';

(async () => {
	await App.render();
	Comics.eventListener();
})();
