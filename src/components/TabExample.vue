<template>
	<!--<div id="tab">
	<div class="tab-tit">
		<a href="javascript:;" @click="curId=0" class="{'cur':curId===0}">html</a>
		<a href="javascript:;" @click="curId=1" class="{'cur':curId===1}">css</a>
		<a href="javascript:;" @click="curId=2" class="{'cur':curId===2}">javascript</a>
		<a href="javascript:;" @click="curId=3" class="{'cur':curId===3}">vue</a>
	</div>
	<div class="tab-con">
		<div v-show="curId===0">html</div>
		<div v-show="curId===1">css</div>
		<div v-show="curId===2">javascript</div>
		<div v-show="curId===3">vue</div>
	</div>
	</div>-->
			
	<div id="tab">
		<div class="tab-tit">
			<a href="javascript:;" v-for="(list,index) in langs" @click="tab(index)" :class="{'cur':num == index}">{{list.name}}</a>
		</div>
		<div class="tab-con">
            <div class="fadeIn" v-for="(tab,index) in cons" v-show="num==index" :style="{ background: (tab.background) }">{{tab.name}}-{{tab.background}}</div>
		</div>		
	</div>	
</template>
	


<script>
	export default{
		data(){
			return {
				langs: [
				{name:'html'},
				{name:'css'},
				{name:'javascript'},
				{name:'vue'}
				],
				cons: [
				{name:'html',background:'antiquewhite'},
				{name:'css',background:'green'},
				{name:'javascript',background:'beige'},
				{name:'vue',background:'yellow'}
				],
				num: 1
			}	
		},
		methods:{
			tab:function(index){
				this.num = index				
			}
		}
	}
	
</script>

<style scoped>
	body{
    font-family:"Microsoft YaHei";
}
#tab{
    width: 600px;
    margin: 0px auto;
}
.tab-tit{
    font-size: 0;
    width: 600px;
}
.tab-tit a{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    width: 25%;
    text-align: center;
    background: #ccc;
    color: #333;
    text-decoration: none;
}
.tab-tit .cur{
    background: #09f;
    color: #fff;
}
.tab-con div{
    border: 1px solid #ccc;
    height: 400px;
    padding-top: 20px;
}
.tab-con div.active{
	display: block;
}
@keyframes fadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}
.fadeIn {
  -webkit-animation-name:fadeIn;
	-webkit-animation-timing-function:ease-in-out;
	-webkit-animation-duration:1s;
}
</style>
