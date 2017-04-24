<template>
  <div class="Page2">
    <h1>{{ msg }}</h1>
    <span @click="toDemo(1)">瀑布流CSS3</span>
    <span @click='toDemo(2)'>table切换</span>
    <span @click='toDemo(3)'>唤醒app</span>
    <span @click='toDemo(4)'>loading遮罩</span>
  </div>
</template>

<script>
export default {
  name: 'Page2',
  data () {
    return {
      msg: 'demoList'
    }
  },
  methods:{
    toDemo(n){
      switch(n)
      {
      case 1:
        this.$router.push({path:'/demoList/waterfall'})
        break;
      case 2:
        this.$router.push({path:'/Page5'})
        break;
      case 3:
        this.$router.push({path:'/Home'})
        break;
      case 4:
        this.$router.push({path:'/Page1'})
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