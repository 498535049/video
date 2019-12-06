import Vue from 'vue'
import Router from 'vue-router'
// import HeaderMain from '@/components/HeaderMain.vue'
// import Extension from '@/components/Extension.vue'
// import MainCaiousel from '@/components/MainCaiousel.vue'
// import MainNavigarion from '@/components/MainNavigarion.vue'
// import NavigarionBar from '@/components/NavigarionBar.vue'
import Index from "@/views/index.vue"
import Login from '@/views/TheLogin.vue'
import Video from '@/views/video.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
	{
		path: '/video',
		name: 'Video',
		component: Video
	}
	// {
	//   path: '/Extension',
	//   name: 'Extension',
	//   component: Extension
	// },
	// {
	//   path: '/MainCaiousel',
	//   name: 'MainCaiousel',
	//   component: MainCaiousel
	// },
	// {
	//   path: '/MainNavigarion',
	//   name: 'MainNavigarion',
	//   component: MainNavigarion
	// },
	// {
	//   path: '/NavigarionBar',
	//   name: 'NavigarionBar',
	//   component: NavigarionBar
	// }
  ]
})