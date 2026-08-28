import configHelper from '@shared/config-helper';
import { init as initStyles } from './styles';

const init = async () => {
	if(location.hash === '#/lyrics') return; // ignore lyrics window
	document.documentElement.dataset.theme = 'ba'; // theme sign
	const app = document.querySelector('#app:not([data-v-app])')!;

	chrome.storage.onChanged.addListener((changes, area) => {
		if(area === 'local' && changes['ba-theme-config']) {
			const config = changes['ba-theme-config'].newValue as BAConfig;
			console.log('[ba-theme] ba-theme-config changed, reload styles');
			initStyles(config);
			app.classList.toggle('--ba-auto-hide-player', config.appearance.autoHidePlayer);
		}
	});

	const config = await configHelper.get();
	if(config.appearance.autoHidePlayer) app.classList.add('--ba-auto-hide-player');
	initStyles(config);
}

if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
