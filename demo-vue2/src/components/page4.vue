<template>
  <div class="Page4">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for='item in 10'>page4</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Page4',
  data () {
    return {
      msg: 'Page4'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.Page4{
  width: 100%;
}
</style>