<template lang="html">
	<div class="">
		<h2>vuex 实现的计数器demo</h2>
		<div class="">
			{{count}}
		</div>
		<input type="button" name="" value="+" @click='plus'>
		<input type="button" name="" value="-" @click='reduce'>
	</div>

</template>

<script>
import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		count:0
	},
	mutations:{
		increment: state => state.count++,
		decrement: state => state.count--
	}
})
export default {
	computed:{
		count(){
			return store.state.count
		}
	},
	methods:{
		plus(){
			store.commit('increment')
		},
		reduce(){
			store.commit('decrement')
		}
	}
}
</script>

<style lang="css">
	input{
		width: 50px;
		height: 50px;
	}
</style>
