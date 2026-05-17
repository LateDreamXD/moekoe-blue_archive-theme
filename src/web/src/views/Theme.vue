<script setup lang="ts">
import items from '../data/config-items';
import { saveConfig } from '../utils';

const { config } = defineProps<{
	config: BAConfig
}>();
</script>

<template>
	<div>
		<h2>主题配置</h2>
		<hgroup>
			<h4>外观</h4>
			<p>自定义主题的外观或行为。</p>
		</hgroup>
		<form>
			<label v-for="appearanceItem of items.appearanceItems" class="config-item" :for="appearanceItem.id">
				<span>
					{{ appearanceItem.label }}
					<small v-if="appearanceItem.description">{{ appearanceItem.description }}</small>
				</span>
				<input :type="appearanceItem.type" :id="appearanceItem.id" role="switch"
					v-model="config.appearance[appearanceItem.model]" @change="saveConfig(config);" />
			</label>

			<i class="splitter" />
			<hgroup>
				<h5>点击特效</h5>
				<p>自定义点击特效效果。</p>
			</hgroup>

			<div>
				<label class="config-item" for="clickEffectEnabled">
					开启
					<input type="checkbox" id="clickEffectEnabled" role="switch"
						v-model="config.appearance.clickEffect.enable" @change="saveConfig(config);" />
				</label>
				<label v-if="false" v-for="clickEffectItem of items.clickEffectItems" class="config-item" :for="clickEffectItem.id">
					<span>
						{{ clickEffectItem.label }}
						<small v-if="clickEffectItem.description">{{ clickEffectItem.description }}</small>
					</span>
					<input :type="clickEffectItem.type" :id="clickEffectItem.id" role="switch"
						v-model="config.appearance.clickEffect.config[clickEffectItem.model]" @change="saveConfig(config);" />
				</label>
			</div>
		</form>
	</div>
</template>

<style scoped>
form {
	display: flex;
	gap: 0.8rem;
	flex-direction: column;

	.config-item {
		width: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;

		span {
			display: flex;
			flex-direction: column;

			small {
				color: var(--pico-muted-color);
			}
		}
	}
}

.splitter {
	width: 100%;
	height: 1px;
	background-color: var(--pico-muted-border-color);
}
</style>
