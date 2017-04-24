<template>
  <div class="Page5">
    <h1>{{ msg }}</h1>
    <div class="titel" @click="testFn">
      
    </div>
    <ul class="tabs">
      <li :class="{border:actStyle}" @click="actFn">动态</li>
      <li :class="{border:expStyle}" @click="expFn">专家</li>
      <li :class="{border:jigouStyle}" @click="jigouFn">机构</li>
    </ul>
    <div class="Page5-cont">
      {{com}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page5',
  data () {
    return {
      msg: 'Page5',
      act:"动态",
      exp:"专家",
      jigou:"机构",
      com:'动态',
      actStyle:true,
      expStyle:false,
      jigouStyle:false
    }
  },
  methods:{
    actFn:function(){
      this.com = this.act
      this.actStyle = true
      this.expStyle = false
      this.jigouStyle = false
    },
    expFn:function(){
      this.com = this.exp
      this.actStyle = false
      this.expStyle = true
      this.jigouStyle = false
    },
    jigouFn:function(){
      this.com = this.jigou
      this.actStyle = false
      this.expStyle = false
      this.jigouStyle = true
    },
    testFn1:function(){
      console.log("我是绑定在一个DOM的第1个事件")
    },
    testFn2:function(){
      console.log("我是绑定在一个DOM的第2个事件")
    },
    testFn:function(){
      this.testFn1()
      this.testFn2()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.titel{
  width: 100%;
  height: 150px;
  background: yellow;
}
.tabs {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tabs li{
  flex: 1;
  display:flex;
  justify-content: center;
  align-items: center;
}
.Page5-cont{
  width: 100%;
  min-height: 200px;
  background: #f60;
}
.border{
  font-weight:800;
  background: blue;
}
</style>