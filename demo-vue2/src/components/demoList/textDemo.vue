<template lang="html">
  <div class="imgUpload">
    <h3>单行，多行文字得水平垂直居中</h3>
    
    <div class="box">
      <span>
        <span class="sp">数据库</span>
      </span>
      <span>
        <span class="sp">阿散井</span>
      </span>
      <span>
        <span class="sp">啊数据垃圾啊</span>
      </span>
      <span>
        <span class="sp">啊睡觉咯</span>
      </span>
      <span>
        <span class="sp">阿莎</span>
      </span>
      <span>
        <span class="sp">啊睡觉了困了就</span>
      </span>
      <span>
        <span class="sp">啊手机卡是</span>
      </span>
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
    
  },
  mounted(){

  }
}
</script>

<style >
  .box{
    display: flex;
    flex-wrap: wrap;
    width:100%;
    
  }
  .box>span{
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 3.2rem;
      height: 1.5rem;
      border-radius: 4px;
      background: #f3f3f3;
      border: 1px solid #d4d4d4;
      font-size: 0.6rem;
      color: #555;
      margin: 0 0.5rem 0 0.4rem;
      margin-bottom: 1.25rem;
      box-sizing: border-box;
      font-size: 12px;
  }
  .sp{
      display:table-cell;
 vertical-align:middle;
  text-align: center; /*设置文本水平居中*/
    }
  .box>span:nth-child(4n){
      margin-right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>
