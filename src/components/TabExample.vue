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
			<a href="javascript:;" v-for="(list,index) in langs" :class="{'cur':list.active}" @mouseover="isOk(list,index)">{{list.name}}</a>
		</div>
		<div class="tab-con">
            <div v-for="tab in cons" :class="{'active':tab.active}" :style="{ background: (tab.background) }">{{tab.name}}-{{tab.background}}</div>
		</div>
	</div>
</template>
	



<script>
import $ from '../../static/js/jquery-3.2.1.min.js'

	export default{
		data(){
			return {
				langs: [
				{name:'html',active:true},
				{name:'css',active:false},
				{name:'javascript',active:false},
				{name:'vue',active:false}
				],
				cons: [
				{name:'html',background:'antiquewhite',active:true},
				{name:'css',background:'green',active:false},
				{name:'javascript',background:'beige',active:false},
				{name:'vue',background:'yellow',active:false}
				]
			}	
		},
		methods:{
			isOk:function(list,index){
				for(var i=0;i<this.langs.length;i++){
					this.langs[i].active=false;
					this.cons[i].active=false;    
				}
					this.langs[index].active=true;
					this.cons[index].active=true;					
			}
		},
		mounted(){
			//$(".tab-con div:first").show();
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
    display: none;
}
.tab-con div.active{
	display: block;
}
</style>