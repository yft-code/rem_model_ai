<!-- 业务介绍 -->
<template>
	<div class="business">
		<div class="wrapper">
			<!-- 标题 -->
			<div class="business-title">
				<img src="@/assets/img/index/business/title.png" alt="">
				<div class="business-title-des">以创新的算法人工智能科技作为公司业务的基础框架</div>
			</div>
			<!-- 业务列表 -->
			<ul class="business-lists flex align-items-center">
				<li v-for="(item,index) in lists" :key="index" class="business-list">
					<img :src="item.img" alt="" class="business-list-img">
					<div class="business-list-title flex-all">
						<div class="business-list-t">
							<img src="@/assets/img/index/business/subTitle.png" alt="">
							<span>{{item.title}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "business",
		data() {
			return {
				lists: [{
					title: "我们的业务功能一",
					path: "",
					img: require("@/assets/img/index/business/yw1.png")
				},{
					title: "我们的业务功能二",
					path: "",
					img: require("@/assets/img/index/business/yw2.png")
				},{
					title: "我们的业务功能三",
					path: "",
					img: require("@/assets/img/index/business/yw3.png")
				}]
			}
		},
	}
</script>

<style lang="scss" scoped>
	.business {
		padding: 27px 0 56px;
		// 标题
		.business-title {
			text-align: center;
			img { width: 135px; }
			.business-title-des {
				margin-top: 16px;
				color: $light-gray;
			}
		}
		
		// 业务列表
		.business-lists {
			padding-top: 38px;
			.business-list {
				position: relative;
				margin-right: 30px;
				cursor: pointer;
				&:last-child {
					margin-right: 0;
				}
				.business-list-img { width: 380px; }
				.business-list-title {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					height: 77px;
					background-color: rgba(0,0,0,.46);
					.business-list-t {
						padding-bottom: 13px;
						padding-right: 15px;
						border-bottom: 2px solid;
						border-image: linear-gradient(90deg, #2CC1FF, #64D5FF) 10 10;
						font-size: 18px;
						line-height: 1;
						img { width: 26px;margin-right: 14px; }
						span { position: relative;top: 4px; color: #fff; }
					}
				}
			}
		}
	}
</style>
