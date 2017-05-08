<template lang="html">
  <div class="login">
    <h3>login</h3>
    <input ref='input' type="number" name="" placeholder="输入手机" @input='limitLenFn($event)' @blur='checkTelFn($event)'>
    <span v-if='isClear' @click='clearTelFn'>x</span>
    <br>
    <input ref='input1' type="text" name="" value="" @input='test1Fn($event)'>
    <span v-if='isGet' @click='timeLine'>获取验证码</span>
    <span v-if='isTimeLine'>{{time}}s后再次获取验证码</span>

    <div v-if="test === '' || test1 ===''" @click='btnFn' class="btn readOnly" >
      登陆
    </div>
    <div v-if="test !=='' && test1 !==''" @click='btnFn' class="btn active">
      登陆
    </div>

    <div class="cover">
      <div>请输入正确手机号</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      test:'',
      test1:'',
      time:'',
      isClear:false,
      isGet:true,
      isTimeLine:false,
      readonly:true,
      activey:false
    }
  },
  methods:{
    test1Fn(e){
      this.test1 = e.target.value
    },
    limitLenFn(e){
      if(e.target.value.length === 0){
        this.isClear = false
      }
      else{
        this.isClear = true
      }
      let telValue =  e.target.value.substring(0,11)
      e.target.value = telValue.substring(0,11)
      this.test = telValue
      console.log(this.test);
    },
    checkTelFn(e){
      let resValue = e.target.value
      if (resValue === ''|| !/^1[3|4|5|7|8]\d{9}$/.test(resValue) || !/^\d{0,11}$/.test(resValue)){
        console.log('输入正确手机号');
      }
      else{
        console.log('输入正确');
      }
    },
    clearTelFn(){
      this.$refs.input.value = ''
      this.$refs.input.focus()
      this.isClear = false
    },
    timeLine(){
      this.isGet = false
      this.isTimeLine = true
      this.time = 10
      let _this = this
      let timer = setInterval(function(){
        _this.time = _this.time - 1
        if(_this.time === 0){
          clearInterval(timer)
          _this.isGet = true
          _this.isTimeLine = false
        }
      },1000)
    },
    watch:{
      test:function(newV,old){
        console.log('ok');
      },
      deep:true
    },
    btnFn(){
      // this.readonly = !this.readonly
      // this.activey = !this.activey

    }
  },
  ready(){
  }
}
</script>

<style lang="less">
  .login{
    width:100%;
    height:100%;
  }
  .btn{
    width: 80%;
    height: 20px;
    text-align: center;
    line-height: 20px;
    margin: 10px auto;
  }
  .readOnly{
    background: #ededed;
  }
  .active{
    background: red;
  }
  .cover{
    position:absolute;
    width:100%;
    height:100%;
    background:#000;
    opacity:0.2;
  }
</style>
