<template lang="html">
	<div class="box">
		<h2>vue 自定义指令</h2>
		<div v-my-img='item.url' v-for='item in dataList' class="item">

		</div>
	</div>
</template>

<script>
import myImg from './myImg'
export default {
	data(){
		return{
			dataList:''
		}
	},
	created(){
		this.dataList = [
			{
				url:'http://img1.3lian.com/2015/a1/124/d/234.jpg'
			},
			{
				url:'http://pic.35pic.com/normal/07/89/45/11295670_190951512136_2.jpg'
			},
			{
				url:'http://pic.58pic.com/58pic/10/96/99/18u58PICXCS.jpg'
			},
			{
				url:'http://img02.tooopen.com/images/20151119/tooopen_sy_148988477255.jpg'
			},
			{
				url:'http://img4.imgtn.bdimg.com/it/u=938946740,2496936570&fm=214&gp=0.jpg'
			}

		]
	}
}
</script>

<style lang="css">
	.box{
		background: #ddf;
	}
	.item{
		width: 100%;
		min-height: 300px;
		margin-top: 10px;
		background-size: cover;
	}
</style>
