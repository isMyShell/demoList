<template lang="html">
  <div class="imgUpload">
    <h3>图片上传 裁剪</h3>
    <input ref='input' type="file" class="file" accept="image/*;capture=camera" name="img" @change="clipImg($event)">
    <canvas id="canvas" style="display: none"></canvas>
    <div class="clip">
      <div ref='cont' class="cont">
      	<img :src="imgSrc" alt="" class="img" ref='img'>
      </div>
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
          console.log(image.width);
          console.log(image.height);
          if(image.width >= image.height){
            _this.$refs.img.height = 300
          }
          else{
            _this.$refs.img.width = 300
          }
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
    .clip{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.4);
      .cont{
        width: 300px;
        height: 300px;
        border: 1px solid #000;
        overflow: auto;
        img{

        }
      }
    }
	}
</style>
