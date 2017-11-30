<template>
	<div class="nav">
			<router-link v-for="nav in listInfo" :to="nav.path" :key="nav.id">{{nav.name}}</router-link>
	</div>
</template>

<script>
	export default{
		name:'nav',
		data(){
			return {
				listInfo:[
				{name:'总价',path:'/total'},
				{name:'切换',path:'/tab'},
				{name:'轮播',path:'/lunbo'}
				]
			}
		}
	}
</script>

<style scoped>
	.nav{
		width: 600px;
		margin: 30px auto;
		height: 30px;
		line-height: 30px;
		background: burlywood;
	}
	.nav a{
		text-align: center;
		display: inline-block;
		width: 200px;
		text-decoration: none;
		color: beige;
	}
	.nav .router-link-active{
		color: aqua;
	}
</style>