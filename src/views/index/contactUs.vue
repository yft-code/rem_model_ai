<!-- 联系我们 -->
<template>
	<div class="contact-us flex-all">
		<div class="contact-us-title">获取业务合作</div>
		<div class="contact-us-des">沟通全平台最优秀的研发团队</div>
		<button class="contact-us-btn flex-all">
			<img src="@/assets/img/index/contactUs/phone.png" alt="">
			<span>联系我们</span>
		</button>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.contact-us {
		height: 298px;
		flex-direction: column;
		background: url('~@/assets/img/index/contactUs/bg.png') no-repeat;
		background-size: cover;
		color: #fff;
		.contact-us-title {
			margin-bottom: 14px;
			font-size: 22px;
			line-height: 1;
			font-weight: bold;
		}
		.contact-us-des {
			margin-bottom: 37px;
			font-size: 16px;
			line-height: 1;
		}
		.contact-us-btn {
			width: 200px;
			height: 36px;
			border: none;
			background: linear-gradient(90deg, #4FB2FF, #2192E6);
			border-radius: 16px;
			color: #fff;
			cursor: pointer;
			img {
				width: 16px;
				margin-right: 8px;
			}
		}
	}
</style>
