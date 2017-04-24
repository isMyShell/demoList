import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Hello from './components/Hello'
// import VueResource from 'vue-resource'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App }
})

Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: false,
  history: false,
  saveScrollPosition: true,
  suppressTransitionError: true
})
router.redirect({
  '*': '/App'
});
router.map({
	'/': {
    component (resolve) {
        require(['./components/Hello'], resolve)
      }
    }, 
	'/Home': {
    component (resolve) {
        require(['./components/Home'], resolve)
      }
    }        
})

router.start(App, '#app')
