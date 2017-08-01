<template>
  <div id="app">

    <router-view></router-view>
    <div class="tab">
    <router-link :to="'/Home'">
        <div>openApp</div>
      </router-link>
      <router-link :to="'/Page1'">
        <div>loadingCover</div>
      </router-link>
      <router-link :to="'/demolist'">
        <div>demoList</div>
      </router-link>
      <router-link :to="'/Page3'">
        <div>Page3</div>
      </router-link>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html{
  width: 100%;
  height: 100%;
}
body{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
ul{
  padding: 0;
  margin: 0;
  list-style: none;
}
li{
  height: 50px;
  width: 100%;
  font-size: 14px;
}
li:nth-child(3n){
  background: #dfd;
}
li:nth-child(3n+1){
  background: #ddf
}
li:nth-child(3n+2){
  background: #fdd;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y: scroll;
  overflow-x: hidden;
}
a{
   /*border: 1px solid yellow*/
}
.tab{
  display: flex;
  justify-content:space-around;
  align-items: center;
  background: yellow;
  box-sizing: border-box;
  height: 44px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
