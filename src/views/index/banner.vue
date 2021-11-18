<template>
	<div class="index-banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
			  <div class="swiper-slide" v-for="(item,index) in lists" :key="index">
				  <img :src="item" alt="">
			  </div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	export default {
		name: 'banner',
		data() {
			return {
				lists: [require("@/assets/img/index/banner/bg1.png"),require("@/assets/img/index/banner/bg1.png"),require("@/assets/img/index/banner/bg1.png")]
			}
		},
		mounted() {
		  new Swiper ('.swiper-container', {
			loop: true,
			// 如果需要分页器
			pagination: '.swiper-pagination', 
			paginationType: 'custom',//这里分页器类型必须设置为custom,即采用用户自定义配置 
			 //下面方法可以生成我们自定义的分页器到页面上 
			paginationCustomRender: function(swiper, current, total) { 
				 var customPaginationHtml = ""; 
				 for(var i = 0; i < total; i++) { 
				  //判断哪个分页器此刻应该被激活 
				  if(i == (current - 1)) { 
				  customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>'; 
				  } else { 
				  customPaginationHtml += '<span class="swiper-pagination-customs"></span>'; 
				  } 
				 } 
				 return customPaginationHtml; 
			},
			paginationClickable: true,  //点击分页器 进行切换swiper
			autoplay: 4000,
			speed: 400
		  })
		}
	}
</script>

<style lang="scss" scoped>
	.index-banner {
		height: 700px;
		.swiper-container {
			height: 100%;
			img {
				width: 100%;
			}
		}
		/*包裹自定义分页器的div的位置等CSS样式*/ 
		 /deep/ .swiper-pagination-custom { 
			 bottom: 10px; 
			 left: 0; 
			 width: 100%; 
		 } 
		 /*自定义分页器的样式，这个你自己想要什么样子自己写*/ 
		/deep/ .swiper-pagination-customs { 
			width: 31px;
			height: 4px;
			background: #808080;
			display: inline-block; 
			margin: 0 5px; 
			cursor: pointer;
		 } 
		 /*自定义分页器激活时的样式表现*/ 
		/deep/ .swiper-pagination-customs-active { 
			background: #FFFFFF;
		 } 
	}
</style>
