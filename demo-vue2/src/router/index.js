import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Page1 from '../components/Page1'
import Page2 from '../components/Page2'
import Page3 from '../components/Page3'
import Page4 from '../components/Page4'
import Page5 from '../components/page5'
import waterfall from '../components/demoList/waterfall'
import imgUpload from '../components/demoList/imgUpload'
import login from '../components/demoList/login.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Page1',
      name: 'Page2',
      component: Page1
    },
    {
      path: '/Page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/Page3',
      name: 'Page3',
      component: Page3
    },
    {
      path: '/Page4',
      name: 'Page4',
      component: Page4
    },
    {
      path: '/Page5',
      name: 'Page5',
      component: Page5
    },
    {
      path: '/demoList/waterfall',
      name: 'waterfall',
      component: waterfall
    },
    {
      path: '/demoList/imgUpload',
      name: 'imgUpload',
      component: imgUpload
    },
		{
      path: '/demoList/login',
      name: 'login',
      component: login
    }
  ],
  // scrollBehavior (Page3, Page2, savedPosition) {
  //   // return 期望滚动到哪个的位置
  //   //savedPosition.y = 100
  //   console.log(savedPosition)
  //   return savedPosition
  // }
})
