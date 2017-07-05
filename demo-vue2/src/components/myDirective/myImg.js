import Vue from 'vue';

Vue.directive('myImg',{
	inserted:function(el, binding){
		var color = Math.floor(Math.random()*1000000)
		el.style.backgroundColor = '#' + color

		var img = new Image()
		img.src = binding.value
		// console.log(binding.value);
		img.onload = function(){
			el.style.background = 'url('+binding.value+')'
		}
	}
})
