import { createApp } from 'vue';
import BASpark from 'vue-ba-spark';

const injectCSS = (path: string, id?: string) => {
	if(id)
		document.getElementById(id)?.remove();
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = path;
	document.head.appendChild(link);
}

const injectStyle = (content: string, id?: string) => {
	if(id)
		document.getElementById(id)?.remove();
	const style = document.createElement('style');
	style.innerText = content;
	document.head.appendChild(style);
}

const injectBASpark = (options: import('vue-ba-spark').Options) => {
	document.getElementById('ba-spark')?.remove();
	const node = document.createElement('div');
	node.id = 'ba-spark';
	document.body.appendChild(node);
	const baspark = createApp(BASpark, { opts: options });
	baspark.mount(node);
}

export const init = (cfg: BAConfig) => {
	const basePath = chrome.runtime.getURL('');
	if(cfg.appearance.wallpaper) {
		const wallpaperPath = cfg.appearance.wallpaper.match(/\/|\\/g)?.length! > 0?
			  cfg.appearance.wallpaper: `${basePath}assets/wallpaper/${cfg.appearance.wallpaper}`;
		injectStyle(`html { --ba-back-image: url('${wallpaperPath}'); }`);
	}
	if(cfg.appearance.customFonts) injectCSS(basePath + 'assets/fonts/index.css', 'ba-fonts');
	if(cfg.appearance.clickEffect.enable) injectBASpark(cfg.appearance.clickEffect.config);
	if(cfg.appearance.autoHidePlayer) injectStyle('#app { --ba-player-bottom: 80%; }', 'ba-auto-hide-player');
	if(cfg.appearance.verticalTab) injectCSS(basePath + 'css/vertical-tab.css', 'ba-vertical-tab');
	if(cfg.appearance.hideMyFavInLib) injectStyle('#app { --ba-library-fav-display: none; }', 'ba-hide-my-fav-in-lib');
}
