<template lang="html">
	<div class="show">
		<div class="title">
			我是show子组件
		</div>
		<div class="num">
			{{data}}
		</div>
	</div>
</template>

<script>
import eventBus from './bus.js'

export default {
	data(){
		return{
			data:'子组件click的index'
		}
	},
	created(){
		eventBus.$on('showIndeFn', (text) => {
			// console.log(text);
			this.data = text
		})
	}
}
</script>

<style lang="css">
.show{
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid #eee;
}
.num{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80px;
	height: 80px;
	background: yellow;
	border-radius: 100%;
	margin-top: 150px;

}
</style>
