<template lang="html">
  <div class="imgUpload">
    <h3>单行，多行文字得水平垂直居中</h3>
    
    <div class="box">
      <span>
        <span></span>
      </span>
      <span>
        <span></span>
      </span>
      <span>
        <span></span>
      </span>
      <span>
        <span></span>
      </span>
      <span>
        <span></span>
      </span>
      <span>
        <span></span>
      </span>
      <span>
        <span></span>
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

<style lang="css">
  .box{
    width:100%;
    
  }
  .box span{
      display: flex;
      justify-content: center;
      align-items: center;
      // display:table-cell;
      // vertical-align:middle;
      // text-align: center; /*设置文本水平居中*/
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
  
    }
  }
  .box>span>span:nth-child(4n){
      margin-right: 0
    }
  }
</style>
