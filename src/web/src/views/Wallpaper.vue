<script setup lang="ts">
import { ref } from 'vue';
import { saveConfig } from '../utils';
import { ImagePlusIcon } from '@lucide/vue';

const { config } = defineProps<{
	config: BAConfig
}>();

const showCustomWallpaperDialog = ref(false);
const customWallpaperType = ref<'online' | 'local'>('online');
const customWallpaperUrl = ref('');

const localWallpapers = [
	'arona.jpg',
	'pv-2nd.png',
	'pv-3rd.png',
	'pv-4th.png',
	'shiroko-bike.jpg',
	'shiroko-bike-2.jpg',
	'yukkai-and-nora.jpg'
];

const openFileDialog = async() => {
	const result = await electronAPI.showOpenDialog({
		properties: ['openFile'],
		filters: [{ name: 'Images', extensions: ['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp'] }]
	});
	if (result.filePath) {
		const filePathUrl = `file:///${result.filePath.replace(/\\/g, '/')}`;
		customWallpaperUrl.value = filePathUrl;
	}
}

const getPath = (file: string) => {
	// return import.meta.env.DEV ? `/assets/${file}` : chrome.runtime.getURL(file);
	return `./assets/${file}`;
}
</script>

<template>
	<div>
		<hgroup>
			<h2>壁纸</h2>
			<p>选择或是手动上传主题的背景壁纸。</p>
		</hgroup>
		<div class="wallpaper-view">
			<img class="view" :class="{ selected: config.appearance.wallpaper === wallpaper }"
				v-for="wallpaper in localWallpapers" :key="wallpaper" :src="getPath(`wallpaper/${wallpaper}`)"
				:title="wallpaper" @click="config.appearance.wallpaper = wallpaper; saveConfig(config);" />
			<button title="自定义" @click="showCustomWallpaperDialog = true">
				<ImagePlusIcon v-if="!config.appearance.wallpaper || localWallpapers.includes(config.appearance.wallpaper)"
					/>
				<img v-else :src="config.appearance.wallpaper" />
			</button>
		</div>
		<dialog :open="showCustomWallpaperDialog">
			<article>
				<h2>自定义壁纸...</h2>
				<label for="custom-wallpaper-type">壁纸来源</label>
				<select id="custom-wallpaper-type" v-model="customWallpaperType">
					<option value="online">从链接加载</option>
					<option value="local">选择本地文件</option>
				</select>
				<img v-if="customWallpaperUrl" class="view" :src="customWallpaperUrl" title="图片预览" />
				<input v-if="customWallpaperType === 'online'" type="text" placeholder="https://xxx.com/..."
					v-model="customWallpaperUrl" />
				<button v-else @click="openFileDialog">选择文件</button>
				<footer>
					<button class="secondary" @click="showCustomWallpaperDialog = false">
						取消
					</button>
					<button @click="() => {
						if(!customWallpaperUrl) return;
						config.appearance.wallpaper = customWallpaperUrl;
						saveConfig(config);
						showCustomWallpaperDialog = false;
					}">确认</button>
				</footer>
			</article>
		</dialog>
	</div>
</template>

<style lang="scss" scoped>
.wallpaper-view {
	display: flex;
	flex-direction: column;
	max-height: 75vh;
	overflow: auto;
	grid-template-columns: repeat(8, 1fr);
	gap: 4px;

	.view {
		width: 100%;
		height: 250px;
		object-fit: cover;
		border: 2px solid color-mix(in srgb, var(--pico-muted-border-color), transparent 50%);
		border-radius: var(--pico-border-radius);

		&.selected {
			border-color: yellow;
		}
	}

	button {
		background-color: transparent;
	}
}

dialog {
	.view {
		border-radius: var(--pico-border-radius);
	}
}
</style>
