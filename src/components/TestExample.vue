<template>
	<div id="main" v-cloak>
    <h1>Services</h1>
    <ul>
        <li v-for="item in items" @click="toggleActive(item)" :class="{'active':item.active}">{{item.name}}<span>{{item.price |currency}}</span></li>
    </ul>
    <div class="p1">Total: <span>{{total() |currency}}</span></div>
</div>
</template>

<script>
export default{
    data() {
        return {
        	items: [
        	{
        		name: 'Web Development',
        		price: 300,
        		active:false
        	},{
        		name: 'Design',
        		price: 400.578,
        		active:false
        	},{
        		name: 'Integration',
        		price: 250.233,
        		active:false
        	},{
        		name: 'Training',
        		price: 220,
        		active:false
        	}
          ]
        }
    },
    methods:{
    	toggleActive:function(i){
    		i.active=!i.active;
    	},
    	total:function(){
    		var total=0;
    		this.items.forEach(function(s){
    			if(s.active){
    				total+=s.price;
    			}
    		});
    		return total;
    	}
    },
    filters:{
    	currency(value){
    		return (value-0).toFixed(2);
    	}
    }   
}
</script>

<style scoped>

*{
	margin:0;
	padding:0;
}
body{
    font-family:Microsoft YaHei;
}
li{list-style:none;}
#main{
    width:480px;
    background-color:#61a1bc;
    margin:0px auto;
    padding:35px 60px;
}
h1{
    font-size:44px;
    text-align:center; 
}
ul{
    font-size:20px;
    text-align:left;
    margin:20px 0 15px;
}
ul li{
    padding:20px 30px;
	background-color:#e35885;
	margin-bottom:8px;
	cursor:pointer;
}
ul li span{float:right;}
ul li.active{
    background-color:#8ec16d;
}
#main .p1{
    border-top:1px solid rgba(255,255,255,0.5);
	padding:15px 0px;
	font-size:20px;
	text-align: left;
}
.p1 span{float:right;}

</style>