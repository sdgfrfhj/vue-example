import Vue from 'vue'
import Router from 'vue-router'
import TabExample from '../components/TabExample'
import TestExample from '../components/TestExample'
import CarouselRolling from '../components/CarouselRolling'

Vue.use(Router)

export default new Router({
	routes:[
	{
		path:'/',
		redirect: 'total'
	},
	{
		path:'/total',
		component:TestExample
	},
	{
		path:'/tab',
		component:TabExample
	},
	{
		path:'/lunbo',
		component:CarouselRolling
	}
	]
})
