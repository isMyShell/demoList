<template lang="html">
  <div class="father">
  	{{fatherName}}
		<div class="sonsBox">
			<click></click>
			<show></show>
		</div>
  </div>
</template>

<script>
import Click from './click.vue'
import Show from './show.vue'

export default {
	data(){
		return{
			fatherName:'i am father Box'
		}
	},
	components:{
		Click,
		Show
	}
}
</script>

<style lang="css">
.father{
	display: flex;
	flex-direction: column;
	padding: 20px 0 0 0;
	width: 100%;
	height: 100%;
	background: #ddf;

}
.title{
	margin-top: 30px;
	background-color: #dff;
	padding: 3px;
}
.sonsBox{
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-around;
}
</style>
