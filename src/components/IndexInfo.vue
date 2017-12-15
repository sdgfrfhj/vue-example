<template>
	<div>
		<p>我希望有个如你一般的人。</p>
		<p>如这山间清晨一般明亮清爽的人，</p>
		<p>如奔赴古城道路上阳光一般的人， </p>
		<p>温暖而不炙热，覆盖我所有肌肤。 </p>
		<p>由起点到夜晚，由山野到书房， </p>
		<p>一切问题的答案都很简单。 </p>
		<p>我希望有个如你一般的人，</p>
		<p>贯彻未来，数遍生命的公路牌。</p>
		<p>我希望有个如你一般的人。</p>
		<p>如山间清爽的风，如古城温暖的光。</p>
		<p>从清晨到夜晚，由山野到书房。</p>
		<p>只要最后是你，就好。</p>
		<p>——张嘉佳《从你的全世界路过》</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
div{width: 600px;margin: 0 auto;}
div p{background-size: 200% 120%;animation: content-animation 4s linear infinite;}

@keyframes content-animation{
	0{background-position: 0 0;}
	100%{background-position: -100% 0;}
}
</style>