export const BASPARK_FULL_VIEWPORT_STYLE = Object.freeze({
	width: '100vw',
	height: '100vh'
});

export const handleBASParkCanvasResize = () => {
	const canvas = document.querySelector<HTMLCanvasElement>('.ba-spark');
	if (!canvas) return;

	const dpr = window.devicePixelRatio || 1;
	canvas.width = canvas.clientWidth * dpr;
	canvas.height = canvas.clientHeight * dpr;

	const ctx = canvas.getContext('2d');
	if (ctx) {
		ctx.scale(dpr, dpr);
	}
};
