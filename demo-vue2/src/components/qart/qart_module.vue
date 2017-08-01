<template>
  <div>
    <div ref='qart'></div>
    <div class='changIMG'>
        <span>选择图片转换成为二维码</span>
        <input type="file" @change='_chooseImg' >
    </div>
    
    <input v-if='downBtn' @click='downLoadBtn' type="button" value='下载图片(图片的base64,加上png,jpg 生成图片)'>
  </div>
</template>

<script>
import QArt from 'qartjs'

export default {
  data () {
    return {
      
    }
  },
  props:{
    option:{
        type:Object,
        default:function(){
            return {
                value: 'https://www.baidu.com',
                imagePath: require('./example.jpg'),
                filter: 'color',
                size: 195
            }
        }
    },
    downBtn:{
        type:Boolean,
        default:false
    }
  },
  methods:{
    _initQArt(option){
        this.qart = new QArt(option)
        this.qart.make(this.$refs.qart)
    },
    _chooseImg(e){
        let that = this
        console.log(e.target.files[0])
        var file = e.target.files[0]
        var imageType = /image.*/;
        if (file.type.match(imageType)) {
            var reader = new FileReader();
            reader.onload = function () {
                var img = new Image();
                img.src = reader.result;
                console.log(img.src)
                that.option.imagePath = img.src
                console.log(that.option.imagePath)
            };
            reader.readAsDataURL(file);
        }
    },
    downLoadBtn(){
        const myCanvas = this.$refs.qart.children[0];
        const type = 'image/png';
        let image = myCanvas.toDataURL(type).replace(type, "image/octet-stream");
        // console.log(image)
        // image 图片的base64
        window.location.href = image; // it will save locally
    }
  },
  mounted(){
    this._initQArt(this.option)
  },
  watch:{
    "option.value":function(newValue,oldValue){
        this.option.value = newValue
        this._initQArt(this.option)
    },
    "option.imagePath":function(newValue,oldValue){
        this.option.imagePath = newValue
        this._initQArt(this.option)
    }
  }
}
</script>

<style>
    input{
        width:100%;
        line-height: 2.625rem;
    }
    .changIMG{
        position: relative;
        width: 100%;
        height: 2.625rem;
        text-align: center;
        line-height: 2.625rem;
        background:#ddf;
        margin-bottom:20px;
    }
    .changIMG input{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }
</style>
