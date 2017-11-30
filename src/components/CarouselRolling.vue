<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in listImg" :alt="str.alt" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
	import Swiper from '../../static/js/swiper.min.js'
	import 'swiper/dist/css/swiper.min.css'
	
	export default{
		data(){
			return {
				listImg:[
				{url:'../../static/img/banner1.png',alt:'banner1'},
				{url:'../../static/img/banner2.jpg',alt:'banner2'},
				{url:'../../static/img/banner3.jpg',alt:'banner3'}
				]
			}
		},
		mounted(){
			var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 300,
                autoplay: 4000,
                onTouchEnd: function() {
                swiper.startAutoplay()
                }
          });
		}
	}
</script>

<style>
	.swiper-container {
        width: 600px;
        height: 300px;
        }
    .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
        }
</style>