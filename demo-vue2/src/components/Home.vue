<template>
  <div class="Home">
  	<div class="cover" v-show='cover'>
  		<p >在浏览器中打开</p>
  	</div>
  	<div class="openApp" >
  		<a  @click='openApp' class="openA">打开app</a>
  	</div>
  	<a  @click='openApp' href="jvsapp://jvs.app">打开app</a>
  	<!-- <a href="jvsapp://jvs.app">打开app</a> -->
  	<h2 @click='show = !show' style='background:#eee'>transition btn</h2>
  	<transition name="fade">
   		<h1 v-show='show'>{{ msg }}</h1>
  	</transition>
    
	<transition name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight">
   		<h1 v-show='show'>{{ msg }}</h1>
  	</transition>
	
   	<!-- <router-view ></router-view> -->
  	
    
    <ul>
    	v-for='item in items'
    	<li v-for='item in text'>{{item}}</li>
    	v-for='item of items'
    	<li v-for='item in text'>{{item}}</li>
    </ul>	
  </div>
</template>

<script>
// import $ from 'zepto'
import $ from 'jquery'
export default {
  	name: 'Home',
  	data () {
    	return {
      		msg: 'Home',
      		show:true,
      		text:[1,2,3,4,5],
      		cover:false,
      		options:{
      			androidApp:'jvsapp://jvs.app',
      			iosApp:'jvtalking://',
      			yybLink:'http://a.app.qq.com/o/simple.jsp?pkgname=com.app.kingvtalking',
      			androidDownload:'http://cdn.jvtalking.com/JVtalking_v3.0.1_c0.apk'
      		}
    	}
  	},
  	methods: {
  		openApp: function (event) {
  			//iso9 以下可以使用iframe尝试唤醒app,
  			//android可能会有问题，尝试location.href=' '因为Android是基于Linux的分时多任务的，setTimeout的基准偏差可能会没那么大。
	    	var u = navigator.userAgent.toLowerCase();
	    	var iframe = document.createElement('iframe');
			var body = document.body;
			var timer = null;
			iframe.style.cssText='display:none;width=0;height=0';
			iframe.id = 'ifr'
			iframe.name = 'ifr'
	    	if(u.match(/MicroMessenger/i)){//在微信中打开
				
			}else {
				if(u.match(/(iPhone|iPod|iPad);?/i)){//在IOS中打开
					//判断苹果手机的版本
					var version = u.match(/(iPhone|iPod|iPad);?/i).input.split('_')[0]
					console.log(version)
					var length = version.length
					version = +version[length-1]
					if(version >= 9){
						console.log('ios9以上版本')
					}
					else{
						console.log('ios9以下版本')
					}
				}else if(u.match(/android/i) || u.match(/ucbrowser/i)){//在android中打开或者是在uc浏览器中打开
					console.log(u)
					//alert(u)
					//alert(u.match(/android/i))
					body.appendChild(iframe);

					$('.openA').attr('href',this.options.androidApp)

    				//iframe.src = this.options.androidApp;
    				let _this = this;
    				//如果n秒后没有唤醒app 进入下载链接，并且删除iframe节点
    				timer = setTimeout(function() {
    					document.body.removeChild(iframe)
				      	window.location.href = _this.options.yybLink
				    }, 2000);
				    //如果在本地打开了app 关闭下载链接的跳转
				    $(document).on('visibilitychange webkitvisibilitychange', function() {
					    var tag = document.hidden || document.webkitHidden;
					    if (tag) {
					        clearTimeout(timer);
					    }
					})

					$(window).on('pagehide', function() {
					    clearTimeout(timer);
					})
				}
			}
			
		}
	},
	mounted(){
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 1s;
  font-size:2em;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
  font-size:12px;
}
h1, h2 {
  font-weight: normal;
}
.openApp{
	width: 100%;
	height: 50px;
	line-height: 50px;
	background: #eee;
}
.cover{
	position:fixed;
	left: 0;
	top:0;
	width: 100%;
	height: 100%;
	z-index: 9999;
	background-color:rgba(0,0,0,0.6);
	color:#fff;
}
a{
	text-decoration:none
}
</style>