import { createApp } from 'vue';
import BASpark from 'vue-ba-spark';

const basePath = chrome.runtime.getURL('');

const injectCSS = (path: string, id: string) => {
	document.getElementById(id)?.remove();
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = path;
	document.head.appendChild(link);
}

const injectStyle = (content: string, id: string) => {
	document.getElementById(id)?.remove();
	const style = document.createElement('style');
	style.id = id;
	style.innerText = content;
	document.head.appendChild(style);
}

const injectBASpark = (options: import('vue-ba-spark').Options) => {
	document.getElementById('--ba-spark')?.remove();
	const node = document.createElement('div');
	node.id = '--ba-spark';
	document.body.appendChild(node);
	const baspark = createApp(BASpark, { opts: options });
	baspark.mount(node);
}

const generateStyle = (cfg: BAConfig) => {
	let base = `#app {
		--ba-player-bottom: ${cfg.appearance.autoHidePlayer ? '80%' : '0%'};
		--ba-library-fav-display: ${cfg.appearance.hideMyFavInLib ? 'none' : 'block'};
	}`;
	if(cfg.appearance.wallpaper) {
		const wallpaperPath = cfg.appearance.wallpaper.match(/\/|\\/g)?.length! > 0?
			  cfg.appearance.wallpaper: `${basePath}assets/wallpaper/${cfg.appearance.wallpaper}`;
		base += `html {
			--ba-back-image: url('${wallpaperPath}');
		}`;
	}
	return base;
}

export const init = (cfg: BAConfig) => {
	injectStyle(generateStyle(cfg), '--ba-base-style');
	if(cfg.appearance.customFonts) injectCSS(basePath + 'assets/fonts/index.css', '--ba-fonts');
	else document.getElementById('--ba-fonts')?.remove();
	if(cfg.appearance.clickEffect.enable) injectBASpark(cfg.appearance.clickEffect.config);
	else document.getElementById('--ba-spark')?.remove();
}
