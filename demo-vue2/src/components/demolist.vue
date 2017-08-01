<template>
  <div class="Page2">
    <h1>{{ msg }}</h1>
    <span v-for='(item,index) in demoList' @click="toDemo(index)">{{item.title}}</span>
  </div>
</template>

<script>
export default {
  name: 'Page2',
  data () {
    return {
      msg: 'demoList',
      demoList:[
        {title:"瀑布流CSS3"},
        {title:"table切换"},
        {title:"唤醒app"},
        {title:"loading遮罩"},
        {title:"本地图片上传裁剪1"},
        {title:"手机登陆"},
        {title:"本地图片上传裁剪2"},
        {title:"单行，多行文本居中"},
        {title:"vue event bus"},
        {title:"vuex简单的计数"},
        {title:'vue自定义指令'},
        {title:'下拉刷新'},
        {title:'二维码生成'}
      ]
    }
  },
  methods:{
    toDemo(n){
      let i = 0
      switch(n)
      {
      case 0:
        this.$router.push({path:'/demoList/waterfall'})
        break;
      case 1:
        this.$router.push({path:'/Page5'})
        break;
      case 2:
        this.$router.push({path:'/Home'})
        break;
      case 3:
        this.$router.push({path:'/Page1'})
        break;
      case 4:
        this.$router.push({path:'/demoList/imgUpload'})
        break;
      case 5:
        this.$router.push({path:'/demoList/login'})
        break;
      case 6:
        this.$router.push({path:'/demoList/imgUpload1'})
        break;
      case 7:
        this.$router.push({path:'/demoList/textDemo'})
        break;
      case 8:
        this.$router.push({path:'/eventBUS/father'})
        break;
      case 9:
        this.$router.push({path:'/vuex/vue_count_demo'})
        break;
      case 10:
        this.$router.push({path:'/myDirective'})
        break;
      case 11:
        this.$router.push({path:'/myPullToRefresh'})
        break;
      case 12:
      this.$router.push({path:'/index_qart'})
      break;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin-bottom: 10px;
}
.Page2{
  flex: 1;
  width: 100%;
  height: auto;
  padding: 0 15px;
  overflow-x: hidden;
  overflow-y:scroll;
}
ul{
  width: 100%;
}
li{
  width: auto;
  height: auto;
}
span{
  float: left;
  padding: 4px 8px;
  background-color: #ddf;
  color: #222;
  margin:0 20px 20px 0;
  border-radius: 4px;
}
</style>
