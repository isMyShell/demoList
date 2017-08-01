import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Page1 from '../components/Page1'
import demoList from '../components/demolist'
import Page3 from '../components/Page3'
import Page4 from '../components/Page4'
import Page5 from '../components/page5'
import waterfall from '../components/demoList/waterfall'
import imgUpload from '../components/demoList/imgUpload'
import imgUpload1 from '../components/demoList/imgUpload1'
import login from '../components/demoList/login.vue'
import textDemo from '../components/demoList/textDemo.vue'
import Father from '../components/eventBUS/father.vue'
import vuexCountDemo from '../components/vuex/vuex_count_demo.vue'
import myDirective from '../components/myDirective/myDirective.vue'
import myPullToRefresh from '../components/myPullToRefresh/myPullToRefresh.vue'
import QArt from '../components/qart/index_qart.vue'

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
      path: '/demolist',
      name: 'demolist',
      component: demoList
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
      path: '/demoList/imgUpload1',
      name: 'imgUpload1',
      component: imgUpload1
    },
     {
      path: '/demoList/textDemo',
      name: 'textDemo',
      component: textDemo
    },
		{
      path: '/demoList/login',
      name: 'login',
      component: login
    },
		{
      path: '/eventBUS/father',
      name: 'father',
      component: Father
    },
		{
      path: '/vuex/vue_count_demo',
      name: 'vuexCountDemo',
      component: vuexCountDemo
    },
		{
      path: '/myDirective',
      name: 'myDirective',
      component: myDirective
    },
		{
      path: '/myPullToRefresh',
      name: 'myPullToRefresh',
      component: myPullToRefresh
    },
    {
      path: '/index_qart',
      name: 'QArt',
      component: QArt
    }
  ],
  // scrollBehavior (Page3, Page2, savedPosition) {
  //   // return 期望滚动到哪个的位置
  //   //savedPosition.y = 100
  //   console.log(savedPosition)
  //   return savedPosition
  // }
  //


})
