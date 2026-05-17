const appearanceItems = [
	{
		id: 'auto-hide-player',
		label: '自动隐藏播放器',
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
	{
		id: 'vertical-tab',
		label: '垂直导航栏',
		type: 'checkbox',
		model: 'verticalTab'
	},
	{
		id: 'hide-my-fav-in-lib',
		label: '在库中隐藏“我喜欢听”',
		description: '隐藏音乐库页面的“我喜欢听”及其歌曲列表',
		type: 'checkbox',
		model: 'hideMyFavInLib'
	},
];

const clickEffectItems = [
	{
		id: 'ba-spark-always-trail',
		label: '始终显示拖尾',
		description: '无论鼠标是否按下，都显示拖尾',
		type: 'checkbox',
		model: 'alwaysTrail'
	},
	{
		id: 'ba-spark-color',
		label: '颜色',
		type: 'color',
		model: 'color'
	},
	{
		id: 'ba-spark-scale',
		label: '缩放倍率',
		type: 'number',
		model: 'scale'
	},
	{
		id: 'ba-spark-opacity',
		label: '透明度',
		type: 'number',
		model: 'opacity'
	},
	{
		id: 'ba-spark-speed',
		label: '动画速度',
		type: 'number',
		model: 'speed'
	},
	{
		id: 'ba-spark-max-trail',
		label: '拖尾最大长度',
		type: 'number',
		model: 'maxTrail'
	}
];

export default {
	appearanceItems,
	clickEffectItems
}
