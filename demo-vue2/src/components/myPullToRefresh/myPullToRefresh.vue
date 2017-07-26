<template>
	<div class="main">
		<div id="content" @scroll='scrollFn' @click='scrollFn'>
			<div class="sildeDown">
				<div v-show='sildePull' id="sildePull">
					{{sildePullContent}}
				</div>
				<div v-show='sildeUpdate' id="sildeUpdate">
					{{sildeUpdateContent}}
				</div>
			</div>
			<div class="slideConten">
				<ul>
					<li v-for='(item ,index) in 30'>{{index + 1}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

import myPullToRefresh from './myPullToRefresh.js'

export default {
	data (){
		return {
			sildePull:false,
			sildeUpdate:false,
			sildePullContent:'下拉刷新',
			sildeUpdateContent:'正在加载',
			moveStart:0,
			moveLen:0
		}
	},
	methods:{
		scrollFn(){
			let content = document.getElementById('content')
			let sildePull = document.getElementById('sildePull')
		}
	},
	mounted(){
		let that = this

		let content = document.getElementById('content')
		let sildePull = document.getElementById('sildePull')
		document.addEventListener('touchmove', function(e) {
				e.preventDefault();
		}, false);
		content.addEventListener('scroll',this.scrollFn)

		document.addEventListener('touchstart',function(e){
			console.log(e.targetTouches[0].pageY + '-------touchstart');
			that.moveStart = e.targetTouches[0].pageY
		},false)
		document.addEventListener('touchmove',function(e){
			console.log(e.targetTouches[0].pageY + '-------touchmove');
			that.moveLen = e.targetTouches[0].pageY - that.moveStart,10
			console.log(that.moveStart);
			console.log(e.targetTouches[0].pageY);
			console.log(that.moveLen);

			if(that.moveLen > 100){
				that.sildePullContent = '松开刷新'
			}
			else{
				that.sildePullContent = '下拉刷新'
			}
			that.sildePull = true
			that.sildeUpdate = false
			content.scrollTop = that.moveLen + 'px';
			sildePull.style.height = that.moveLen + 'px'
			//console.log(sildePull.style.height);

		},false)
		document.addEventListener('touchend',function(e){
			console.log('-------touchend');

			that.sildePull = false
			that.sildeUpdate = true
			setTimeout(function(){//模拟加载数据过程
				that.sildePull = false
				that.sildeUpdateContent = '刷新成功'
				setTimeout(function(){
					that.sildeUpdate = false
					that.sildeUpdateContent = '正在加载'
				},1000)

			},3000)
		},false)

	}
}
</script>

<style scoped>
	@import "./myPullToRefresh.less"
</style>
