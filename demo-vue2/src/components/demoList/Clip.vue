<template>
  <div class="" style='width:100%;height:100%;overflow-y:scroll'>
    <div class="change" style="font-size:8px;">
      <span>点击更换头像</span>
      <input type="file" class="file" accept="image/*;capture=camera" name="img" @change="clipImg($event)">
    </div>

    <!-- <div class="inp" @click='toInput'>
      <input type="file" name="" value="">
    </div> -->
    <div class="clip-img" @click="previewClipImg">
        <img :src="clipUrl" alt="" v-if="clipUrl">
    </div>

    <div class="upload-wp">
        <button @click="uploadImg">上传</button>
        <p v-if="isUpload">{{url}}</p>
    </div>

    <div class="preview-wp" @click="cancelPreview" v-if="isPreview">
        <img class="preview-img" :src="clipUrl" alt="预览图">
    </div>

  	<div class="clip-wp" id="clip-wp" v-show="isClip" >
  		<div id="container"></div>
  		<button id="save-img" @click="saveImg">保存</button>
  	</div>

    <img :src="clipUrl" alt="" style="width:150px;height:150px;">

  </div>

</template>

<script>
  /* eslint-disable */
  import clip from './clip';

	export default{
		data(){
			return{
        isClip:false,
        isPreview:false,
        isUpload:false,
        clipUrl:'',
        clip:{},
        noScoll:function(evt){
          this.isClip && evt.preventDefault();
        },
        url:''

			}
		},
		methods:{
       previewClipImg(){
        if (!this.clipUrl) {
          return;
        }
        this.isPreview =  true;
      },
      cancelPreview(){
        this.isPreview =  false;
      },
      clipImg(event){

        if (!/image\/\w+/.test(event.target.files[0].type)) {
          alert("请确保文件为图像类型");
          // alert()
          return false;
        }
        else{
          this.clip = new clip('container',this);
          this.clip.init(event.target.files[0]);
          this.isClip = true;
          document.body.addEventListener('touchmove',this.noScoll,false);
        }

      },
      saveImg(){
        this.isClip = false;
        this.clip.save();
        document.body.removeEventListener('touchmove',this.noScoll,false);

      },
      uploadImg(){
        //上传到服务器或进行相关操作
        this.isUpload = true;
        this.url = this.clipUrl
        let data = this.clipUrl
        console.log(data);
        // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        data=data.split(',')[1];
        // console.log(data);
        // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        data=window.atob(data);
        // console.log(data);
        // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        var ia = new Uint8Array(data.length);
        for (let i = 0; i < data.length; i++) {
          ia[i] = data.charCodeAt(i);
        };
        var blob=new Blob([ia], {type:"image/png"});
        console.log(blob);
        var fd=new FormData();
        fd.append('file',blob);
        console.log(fd);
      }
		}
	}
   /* eslint-enable */
</script>

<style lang="less">
body{
    padding: 0;
    margin: 0;
}
.change{
  position: relative;
  width: 50px;
  height: 50px;
  background: #ddf;
  border: 100%;
  overflow:hidden;
  span{
    z-index: -1;
  }
}
.file{
    position: absolute;
    top:0;
    left:0;
    height: 40px;
    display: block;
    opacity: 0;
}
.clip-img{
    width: 100px;
    height: 100px;
    margin: 20px auto 0;
    border: 1px solid #999;
    overflow: hidden;
    img{
        width: 100%;
    }
}
.upload-wp{
    text-align: center;
    width: 300px;
    margin: 20px auto 0;
    button{
        padding: 5px 10px;
    }
    p{
        word-wrap: break-word;
        font-size: 12px;
    }
}
.clip-wp{
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 50px;
    z-index: 11;
    background-color: #000;
    text-align: center;
    #container{
        background-color: #000;
        text-align: center;
        width: 100%;
        left: 0;
        right: 0;
        top: 20px;
        bottom: 80px;
        margin: 0 auto;
        position: absolute;
    }
    #save-img{
        position: absolute;
        bottom: 20px;
        width: 90%;
        left: 5%;
        height: 42px;
        line-height: 42px;
        color: #fff;
        background-color: #32c47c;
        border-radius: 20px;
    }
    #image-box {
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: 0px;
        top: 0px;
        margin: auto;
    }
    #cover-box {
        position: absolute;
        z-index: 9999;
        display: none;
        left: 0px;
        right: 0px;
        bottom: 0px;
        top: 0px;
        margin: auto;
    }
}
.preview-wp{
    text-align: left;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: #000;
    overflow:auto;
    .preview-img{
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translate(0 , -50% );
        -webkit-transform: translate(0 ,-50%);
    }
}
.inp{
  width: 50px;
  height:50px;
  background: red;
  border-radius: 100%;
  input{
    display: inline-block;
    width: 50px;
    background: #ddf;
    border: none;
    outline: none;
    opacity: 0;
  }
}
</style>
