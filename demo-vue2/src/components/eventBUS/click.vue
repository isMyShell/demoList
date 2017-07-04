<template lang="html">
	<div class="click">
		<div class="title">
			我是click子组件
		</div>
		<div v-for='(item,index) in 10' @click='getIndexFn(index)' class="itemDiv" >
			{{index}}
		</div>
	</div>
</template>

<script>
import eventBus from './bus.js'

export default {
	data(){
		return{

		}
	},
	methods:{
		getIndexFn(index){
			eventBus.$emit('showIndeFn',index)
			// console.log(index);
		}
	}
}
</script>

<style lang="css">
	.click{
		border: 1px solid #eee;
	}
	.itemDiv{
		padding: 10px 5px;
		background: pink;
		box-sizing: border-box;
		border: 1px solid blue;
	}
</style>
