import { createApp } from 'vue';
import BASpark from 'vue-ba-spark';
import { BASPARK_FULL_VIEWPORT_STYLE, handleBASParkCanvasResize } from '../shared/constants';
import checkHelper from '../shared/check-helper';

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
	const baspark = createApp(BASpark, {
		opts: options,
		style: BASPARK_FULL_VIEWPORT_STYLE
	});
	baspark.mount(node);

	window.addEventListener('resize', handleBASParkCanvasResize);

	node.addEventListener('DOMNodeRemoved', () => {
		window.removeEventListener('resize', handleBASParkCanvasResize);
	}, { once: true });
}

const generateStyle = (cfg: BAConfig) => {
	const sidebarWidth = cfg.appearance.sidebarMaxWidth
		? `min(20vw, ${cfg.appearance.sidebarMaxWidth}px)`
		: '20vw';
	let base = `#app {
		--ba-player-bottom: ${cfg.appearance.autoHidePlayer ? '80%' : '0%'};
		--ba-library-fav-display: ${cfg.appearance.hideMyFavInLib && !checkHelper('hideMyFavInLib').result ? 'none' : 'block'};
		--ba-sidebar-width: ${sidebarWidth};
	}`;
	if(cfg.appearance.wallpaper) {
		const wallpaperPath = cfg.appearance.wallpaper.match(/\/|\\/g)?.length! > 0?
			  cfg.appearance.wallpaper: `${basePath}assets/wallpaper/${cfg.appearance.wallpaper}`;
		const wallpaperSize = {
			'cover': 'cover',
			'contain': 'contain',
			'fill': '100% 100%'
		}[cfg.appearance.wallpaperSize] || 'cover';
		base += `html {
			--ba-back-image: url('${wallpaperPath}');
			--ba-back-size: ${wallpaperSize};
		}`;
	}
	return base;
}

export const init = (cfg: BAConfig) => {
	injectStyle(generateStyle(cfg), '--ba-base-style');
	if(cfg.appearance.customFonts) injectCSS(basePath + 'assets/fonts/index.css', '--ba-fonts');
	else document.getElementById('--ba-fonts')?.remove();
	if(cfg.appearance.clickEffect.enable) injectBASpark(cfg.appearance.clickEffect.config);
	else {
		document.getElementById('--ba-spark')?.remove();
	}
}
