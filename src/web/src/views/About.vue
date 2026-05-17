<script setup lang="ts">
import packageJson from '@package.json';
import lkpUtilsJson from '@lkp_utils.json';
import aboutItems from '@web/src/data/about-items';
</script>

<template>
	<div>
		<hgroup>
			<h2>关于</h2>
			<p>主题的详细信息。</p>
		</hgroup>

		<div class="info">
			<img class="icon" src="/assets/icon.png" />
			<div class="badges">
				<a v-for="item in aboutItems.badges" :href="item.url" :title="item.title" target="_blank" rel="noopener noreferrer">
					<img :src="item.src" alt="badge" />
				</a>
			</div>
			<h4>{{ lkpUtilsJson.meta.name }} <sup>v{{ packageJson.version }}</sup></h4>
			<p>{{ packageJson.description }}</p>
		</div>

		<div class="author">
			<hgroup>
				<h4>贡献者</h4>
				<p>感谢以下人员对本主题的贡献！</p>
			</hgroup>
			<img title="贡献者" :src="`https://contrib.rocks/image?repo=${packageJson.repository}`" />
		</div>

		<div class="thanks">
			<hgroup>
				<h4>特别感谢</h4>
				<p></p>
			</hgroup>

			<ul>
				<li v-for="item in aboutItems.thanks">
					<a :href="item.url" target="_blank" rel="noopener noreferrer">
						{{ item.title }}
					</a> - {{ item.description }}
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
div {
	margin-top: 2rem;
}
.info {
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.2rem;

	.badges {
		display: flex;
		gap: 0.2rem;
		margin: 0;
		margin-bottom: 0.2rem;
	}
}
</style>
