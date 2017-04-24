<template lang="html">
  <div class="waterfall">
    <div v-for='data in datas' class="item">
    	<img :src="data.img" alt="">
    </div>
  </div>
</template>

<script>
export default {
	data(){
		return{
			datas:[]
		}
	},
	created(){
		let _this = this
		// http://test-biz.jvtalking.com/api/v2/edu/homeV5?formal=1
		this.$axios.get('http://test-biz.jvtalking.com/api/v2/edu/homeV5', {
		    params: {
		      formal: 1
		    }
		  })
		  .then(function (response) {
		  	let resData = response.data.data
		    // console.log(resData);
		    let left = resData.left
		    let right = resData.right
		    _this.datas = left.concat(right).reverse()
		    console.log(left.concat(right))
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	},
	mounted(){

	}
}
</script>

<style lang="less">
  .waterfall{
    width: 100%;
	-moz-column-count:4; /* Firefox */
    -webkit-column-count:4; /* Safari 和 Chrome */
    column-count:4;
    -moz-column-gap: 1em;
  	-webkit-column-gap: 1em;
  	column-gap: 1em;
  	.item{
  		
  		img{
  			width:100%
  		}
  	}
  }
</style>
