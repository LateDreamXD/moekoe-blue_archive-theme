import { BAClickFX, type BAClickFXConfig } from 'ba-click-fx';

let clickFx: BAClickFX | null = null;

// ba-click-fx 似乎有自己的一套 resize 处理机制
// 先不用看看
// const WindowResizeHandler = () => {
// 	const dpr = devicePixelRatio || 1;
// 	const w = (clickFx?.width || innerWidth) * dpr;
// 	const h = (clickFx?.height || innerHeight) * dpr;
// 	clickFx?.resize(w, h, dpr);
// }

const init = (config?: BAClickFXConfig) => {
	clickFx = new BAClickFX(config);
	// window.addEventListener('resize', WindowResizeHandler);
}

const destroy = () => {
	clickFx?.destroy();
	// window.removeEventListener('resize', WindowResizeHandler);
	clickFx = null;
}

const onConfigChanged = (newConfig: BAClickFXConfig) => {
	return clickFx?.updateConfig(newConfig);
}

export default {
	init,
	destroy,
	onConfigChanged
}
