// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
// import YZK from './js/font.js'
// import draw from './js/draw.js'
import Home from './components/home.vue'
import Skill from './components/skill.vue'
import Hobby from './components/hobby.vue'
import Show from './components/show.vue'
import Contact from './components/contact.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false

Vue.use(VRouter)
Vue.use(VueAxios, axios)

let router = new VRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/home'
		},{
			path: '/home',
			component: Home
		},{
			path: '/skill',
			component: Skill
		},{
			path: '/show',
			component: Show
		},{
			path: '/hobby',
			component: Hobby
		},{
			path: '/contact',
			component: Contact
		}
	]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	beforeCreate() {
		document.getElementsByTagName('body')[0].style.height = window.innerHeight  + 'px';
		document.getElementsByTagName('body')[0].style.width = window.innerWidth + 'px';
		console.log(`
			我的人生似乎是失去了目标
			也许是失败了太多次
			再也找不回当初的那份感觉了
			整日浑浑噩噩
			不知道该学些什么，做些什么
			去了那么多家公司
			面试了那么多的企业
			去的时候信心满满
			但每次都是以失败告终
			我不知道自己到底哪里不足
			没有经验但并不代表我
			没有胜任这份工作的能力
			谁不是从没有经验一步一步走过来的
			现在的公司如此的不注重培养新人
			那离毁灭也就不远了
			`)
	},
  template: '<App/>',
  components: { App }
})
