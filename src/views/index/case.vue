<!-- 案例 -->
<template>
	<div class="index-case">
		<div class="wrapper flex">
			<img src="@/assets/img/index/case/img_anli.png" alt="" class="index-case-example">
			<div class="index-case-info">
				<div class="ici-title">智慧大脑-数字孪生水泥厂</div>
				<div class="ici-des">公司通过为其构建数字孪生平台赋能水泥工厂的智慧化运营管理，既高度还原水泥工厂的现实场景，又集成了多个控制面板，做到实时预警，实时通报设备状态。提高了工业生产的安全性，以及运营管理进行可视化呈现。</div>
				<div class="ici-btn flex-all">
					更多案例
					<div class="ici-btn-arrow"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.index-case {
		padding: 46px 0 88px;
		background-color: #F2F2F2;
		.index-case-example { width: 697px; }
		.index-case-info {
			position: relative;
			max-width: calc(100% - 737px);
			margin-left: 40px;
			.ici-title {
				padding-bottom: 19px;
				border-bottom: 1px solid #CCCCCC;
				font-size: 20px;
				font-weight: bold;
			}
			.ici-des {
				width: 383px;
				margin-top: 6px;
				line-height: 36px;
				text-align: justify;
			}
			.ici-btn {
				position: absolute;
				bottom: 0;
				right: 0;
				color: $light-gray;
				cursor: pointer;
				.ici-btn-arrow {
					width: 18px;
					height: 14px;
					margin-left: 8px;
					background: url('~@/assets/img/index/case/button_gd.png') no-repeat;
					background-size: cover;
				}
				&:hover {
					color: $gray;
					.ici-btn-arrow {
						background: url('~@/assets/img/index/case/button_gd_hover.png') no-repeat;
						background-size: cover;
					}
				}
			}
		}
	}
</style>
