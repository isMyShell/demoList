<template lang="html">
  <div class="imgUpload">
    <h3>图片上传 裁剪</h3>
    <input ref='input' type="file" class="file" accept="image/*;capture=camera" name="img" @change="clipImg($event)">
    <canvas id="canvas" style="display: none"></canvas>
    <div ref='cont' class="cont">
    	<img :src="imgSrc" alt="">
    </div>
  </div>
</template>

<script>
export default {
	data(){
		return{
			datas:[],
			imgSrc:''
		}
	},
	created(){

	},
	methods:{
		clipImg(e){
      let _this = this
			console.log(this.$refs.cont)
			// console.log(this.$refs.input.files[0])
      console.log(e.target.files[0])
      let file = e.target.files[0]
      let reader = new FileReader();
      reader.onload = (e) => {
        const image = new Image();
        image.src = e.target.result;    // 获取 DataURL
        image.onload = () => {
          console.log(image);
          _this.imgSrc = image.src
          // console.log(image.height);
          // console.log(image.width);
          var oH = image.height
          var oW = image.width
          var size = 0
          var oScale = 1;
          if(oW >= oH){
            size = oW
            oScale = oH / oW
            size=size>window.screen.width?window.screen.width:size
            _this.$refs.cont.style.width = size + 'px'
            _this.$refs.cont.style.height = size*oScale + 'px'
          }
          else if(oW < oH){
            size = oH
            oScale = oW / oH
            _this.$refs.cont.style.height = size + 'px'
            _this.$refs.cont.style.width = size*oScale + 'px'
          }
          console.log(size);

          // _this.$refs.cont.childNodes[0].style.width = size + 'px'
          // _this.$refs.cont.childNodes[0].style.height = 'auto'
        }
      }
      reader.readAsDataURL(file);
		}
	},
	mounted(){

	}
}
</script>

<style lang="less">
	.imgUpload{
		width:100%;
		height:100%;
    .cont{
      img{
        width: 100%;
      }
    }
	}
</style>
