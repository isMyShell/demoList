<template>
  <div>
    <h5>{{msg}}</h5>
    <v-qart :option='option' :downBtn='downBtn' :chooseImg='chooseImg'></v-qart>
    改变网址 ： <input type="text" v-model='option.value' placeholder='输入网址'>
    
  </div>
</template>

<script>
import VQart from './qart_module'
export default {
  data () {
    return {
        msg: 'Welcome to Your qart.js，二维码生成的demo',
        option:{
            value: 'https://www.baidu.com',
            imagePath: require('./example.jpg'),
            filter: 'color',
            size: 2000
        },
        downBtn:true,
        chooseImg:true
    }
  },
  components:{
    VQart
  },
  methods:{
  }
}
</script>



<style lang="">
    input{
        font-size:20px;
    }

    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
    color:    red;
    }
    input:-moz-placeholder, textarea:-moz-placeholder { 
        color:    red;
    }
    input::-moz-placeholder, textarea::-moz-placeholder { 
        color:  red;
    }
    input:-ms-input-placeholder, textarea:-ms-input-placeholder { 
        color:    red;
    }
</style>
