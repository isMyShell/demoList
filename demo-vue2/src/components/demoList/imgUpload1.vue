<template lang="html">
  <div class="imgUpload">
    <h3>图片上传 裁剪</h3>
    <input ref='input' id='file' type="file" class="file" accept="image/*;capture=camera" name="img" @change="clipImg($event)">
    <div id='box'>
      <img id="image" src="../../assets/logo.png">
    </div>
    <canvas id="canvas" style="display: none"></canvas>
    <img :src="previewImg" alt="" style='width:50px;height:50px;'>
    <div id='rotate' class='odiv' @click='rotateFn'>旋转</div>
    <div id='getImage' class='odiv' @click='getCanvasFn'>确定</div>
    <div style='width:100%;word-wrap: break-word;'>
      {{previewImg}}
    </div>
    <div style='height:44px;width:100%;'></div>
  </div>
</template>

<script>
// import $ from 'jquery'
// import Cropper from 'cropper'
import $ from 'jquery'
window.jQuery = $
require('./../../assets/js/cropper.js')
require('./../../assets/css/cropper.css')
export default {
	data(){
		return{
			datas:[],
			imgSrc:'',
      previewImg:''
		}
	},
	created(){

	},
	methods:{
		clipImg(){
      var URL = window.URL || window.webkitURL;
      var file = event.target.files[0]
      console.log(event.target.files[0])
      let blobURL = URL.createObjectURL(file);
      alert(blobURL)
      $('#image').one('built.cropper', function () {
          // Revoke when load complete
          URL.revokeObjectURL(blobURL);
      }).cropper('reset').cropper('replace', blobURL);
      $('#file').val('');
    },
    rotateFn(){
      $('#image').cropper('rotate', 90)
    },
    getCanvasFn(){
      var dataURL = $('#image').cropper("getCroppedCanvas");
      var imgurl = dataURL.toDataURL("image/png", 1);
      console.log(imgurl)
      this.previewImg = imgurl
    }
    
	},
	mounted(){
    $('#image').cropper({
    aspectRatio: 1 / 1,
    autoCropArea: 0.3,
    zoom: -0.2,
    crop: function(e) {
      // Output the result data for cropping image.
      console.log(e.x);
      console.log(e.y);
      console.log(e.width);
      console.log(e.height);
      console.log(e.rotate);
      console.log(e.scaleX);
      console.log(e.scaleY);
    },
    checkImageOrigin: true,
    built: function () {
        $("#image").cropper('getCroppedCanvas')
        $("#image").cropper('getCroppedCanvas', {
          width: 160,
          height: 90,
          beforeDrawImage: function(canvas) {
            const context = canvas.getContext('2d');

            context.imageSmoothingEnabled = false;
            context.imageSmoothingQuality = 'high';
          }
        });

    }
  });
	}
}
</script>

<style lang="">
  html,body{
    width: 100%;
    height: 100%;
  }
	img {
    max-width: 100%;
  }
  .imgUpload{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  #box{
    flex:1;
  }
  .odiv{
    height: 44px;
    text-align: center;
    line-height: 44px;
  }
</style>
