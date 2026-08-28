const appearanceItems = [
	{
		id: 'auto-hide-player',
		label: '自动隐藏播放栏',
		description: '<s>自动隐藏任务栏</s>',
		type: 'checkbox',
		model: 'autoHidePlayer'
	},
	{
		id: 'custom-fonts',
		label: '自定义字体',
		description: '使用主题提供的字体',
		type: 'checkbox',
		model: 'customFonts'
	},
];

const clickEffectItems = [
	{
		id: 'cfx-trail-always',
		label: '始终展示轨迹',
		description: '无需按下鼠标，移动即显示拖尾',
		type: 'checkbox',
		model: 'trailAlways'
	},
	{
		id: 'cfx-color',
		label: '主要颜色',
		description: '特效和拖尾的颜色',
		type: 'color',
		model: 'themeColor'
	},
	{
		id: 'cfx-scale',
		label: '缩放倍率',
		description: '整体大小，最小 1',
		type: 'number',
		min: 1,
		model: 'scale'
	},
	{
		id: 'cfx-opacity',
		label: '透明度',
		description: '整体透明度，最小 0.01',
		type: 'number',
		min: 0.01,
		step: 0.1,
		model: 'opacity'
	},
	{
		id: 'cfx-click-time',
		label: '点击效果时间倍率',
		description: '波纹、旋转和碎片的时间倍率，最小 0.01',
		type: 'number',
		min: 0.01,
		step: 0.1,
		model: 'clickTimeScale'
	},
	{
		id: 'cfx-trail-time',
		label: '轨迹时间倍率',
		description: '拖尾衰减和拖尾碎片的时间倍率，最小 0.01',
		type: 'number',
		min: 0.01,
		step: 0.1,
		model: 'trailTimeScale'
	},
	{
		id: 'cfx-max-dpr',
		label: '设备像素比上限',
		description: '可按设备性能显式提高，最小 1',
		type: 'number',
		min: 1,
		step: 0.1,
		model: 'maxDpr'
	}
];

export default {
	appearanceItems,
	clickEffectItems
}
