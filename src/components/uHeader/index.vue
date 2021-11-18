<!-- 头部 -->
<template>
	<div class="u-header flex align-items-center">
		<!-- logo -->
		<img src="@/assets/img/uHeader/logo.png" alt="" class="u-header-logo cursor-pointer" @click="toIndex">
		<!-- 导航 -->
		<ul class="u-header-navs flex align-items-center flex-grow-base">
			<li v-for="(item,index) in navs" :key="index" :class="['u-header-nav box-sizing-base',{
					isActive: item.isActive
				}]">
				<div class="uhn-title flex-all cursor-pointer" @click="changeTag(item,navs)">
					<img :src="item.icon" alt="">
					<span>{{item.title}}</span>
				</div>
				<div class="uhn-subs flex justify-content-center" v-if="item.subs">
					<ul :class="['uhn-subs-navs flex',{
						noSubs: item.noSubs
					}]">
						<li 
						class="cursor-pointer uhn-subs-nav"
						v-for="(sub,subIndex) in item.subs" 
						:key="subIndex">
							<div class="uhn-subs-nav-title" @click="toPath(sub.path)">{{sub.title}}</div>
							<ul class="uhn-subs-nav-lists" v-if="sub.subs">
								<li class="uhn-subs-nav-list" v-for="(it,itKey) in sub.subs" :key="itKey">
									{{it.title}}
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</li>
		</ul>
		
		<!-- 登录注册 -->
		<ul class="u-header-lr flex-all">
			<li class="u-header-lr-item flex-all">
				<div class="cursor-pointer uhlr-item-b flex align-content-center" @click="login" v-if="isLogin">
					<span class="login-icon uhlr-item-icon"></span>
					<span>登录</span>
				</div>
				<div class="cursor-pointer uhlr-item-b flex align-content-center" @click="toP" v-else>
					<span class="control-icon uhlr-item-icon"></span>
					<span>控制台</span>
				</div>
			</li>
			<li class="u-header-lr-item flex-all">
				<div class="cursor-pointer uhlr-item-b flex align-content-center">
					<span class="register-icon uhlr-item-icon"></span>
					<span>注册</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "uHeader",
		data() {
			return {
				isLogin: sessionStorage.isLogin ? false : true,
				navs: [{
					title: "首页",
					path: "/index",
					icon: require("@/assets/img/uHeader/sy.png"),
					isActive: true
				},{
					title: "产品与服务",
					path: "",
					icon: require("@/assets/img/uHeader/cpfw.png"),
					isActive: false,
					subs: [{
						title: "云测",
						subs: [{
							title: "软件全生命周期管理",
							path: ""
						},{
							title: "性能测试",
							path: ""
						},{
							title: "安全测试",
							path: ""
						},{
							title: "自动化测试",
							path: ""
						}]
					},{
						title: "算法工厂",
						subs: [{
							title: "行为识别检测算法",
							path: ""
						},{
							title: "事件识别算法",
							path: ""
						},{
							title: "物体识别算法",
							path: ""
						},{
							title: "人识别算法",
							path: ""
						}]
					},{
						title: "智能园区",
						subs: [{
							title: "数字孪生·下一代中控",
							path: ""
						},{
							title: "AI-园区安全监管平台",
							path: ""
						},{
							title: "AI园区环境监测平台",
							path: ""
						},{
							title: "AI园区服务管理平台",
							path: ""
						},{
							title: "AI园区物业管理平台",
							path: ""
						},{
							title: "AI园区运营管理平台",
							path: ""
						}]
					},{
						title: "智能工厂",
						subs: [{
							title: "工厂碳排放与碳指挥",
							path: ""
						},{
							title: "设备故障智能诊断及预测",
							path: ""
						},{
							title: "AI-5S监管",
							path: ""
						},{
							title: "AI-安全监管",
							path: ""
						}]
					}]
				},{
					title: "解决方案",
					path: "",
					icon: require("@/assets/img/uHeader/jjfa.png"),
					isActive: false,
					noSubs: true,
					subs: [{
						title: "云测",
						path: ""
					},{
						title: "复空间智慧园区",
						path: ""
					},{
						title: "复空间智慧工厂",
						path: ""
					},{
						title: "云通讯",
						path: ""
					}]
				},{
					title: "应用案例",
					path: "",
					icon: require("@/assets/img/uHeader/yyan.png"),
					isActive: false
				},{
					title: "新闻资讯",
					path: "",
					icon: require("@/assets/img/uHeader/xwzx.png"),
					isActive: false
				},{
					title: "了解ETaas",
					path: "",
					icon: require("@/assets/img/uHeader/lj.png"),
					isActive: false
				}]
			}
		},
		methods: {
			login() {
				this.isLogin = false;
				sessionStorage.isLogin = this.isLogin;
			},
			toP() {
				this.navs.forEach(item => {
					item.isActive = false;
				})
				this.toPath('/control')
			},
			toIndex() {
				this.navs.forEach((item,index) => {
					item.isActive = false;
					!index && (item.isActive = true);
				})
				this.toPath('/index')
			}
		},
	}
</script>

<style lang="scss" scoped>
	.u-header {
		position: relative;
		z-index: 2;
		height: 76px;
		padding: 0 0 0 25px;
		background: url('~@/assets/img/uHeader/bg.png') no-repeat;
		background-size: cover;
		// logo
		.u-header-logo { width: 126px; }
		
		// 导航
		.u-header-navs {
			padding-left: 378px;
			color: $white;
			.u-header-nav {
				width: 142px;
				border-bottom: 2px solid transparent;
				line-height: 76px;
				font-size: 16px;
				text-align: center;
				.uhn-title {
					img { 
						height: 16px;
						margin-right: 5px;
					}
				}
				&.isActive,&:hover {
					border-bottom-color: #85FFEF;
					background-color: #006EC3;
				}
				// 子目录
				.uhn-subs {
					position: absolute;
					top: 76px;
					left: 0;
					width: 100%;
					padding-bottom: 42px;
					background: rgba(9, 70, 105, .8);
					opacity: 0;
					visibility: hidden;
					transition: all .3s;
					color: #fff;
					.uhn-subs-navs {
						position: relative;
						left: 15px;
						width: 795px;
						font-size: 14px;
						line-height: 14px;
						text-align: left;
						.uhn-subs-nav {
							width: 182px;
							margin-top: 17px;
							.uhn-subs-nav-title {
								font-weight: bold;
								color: #fff;
							}
							.uhn-subs-nav-lists {
								padding-top: 20px;
								color: #fff;
								.uhn-subs-nav-list {
									position: relative;
									padding-bottom: 14px;
									&:last-child {
										padding-bottom: 0;
									}
									&:hover {
										color: #85F5FF;
										&:after {
											content: "";
											position: absolute;
											top: 2px;
											left: -10px;
											width: 5px;
											height: 10px;
											background: url('~@/assets/img/uHeader/arrow.png') no-repeat;
											background-size: cover;
										}
									}
								}
							}
						}
						
						&:after {
							content: "";
							position: absolute;
							top: 40px;
							left: 0;
							width: 100%;
							height: 1px;
							background-color: #4784B3;
						}
						&.noSubs {
							&:after {
								display: none;
							}
							.uhn-subs-nav {
								margin-top: 32px;
								.uhn-subs-nav-title {
									font-weight: normal;
									&:hover {
										color: #85F5FF;
									}
								}
							}
						}
					}
				}
				&:hover .uhn-subs {
					opacity: 1;
					visibility: visible;
				}
			}
		}
		
		// 登录注册
		.u-header-lr {
			color: #fff;
			li {
				width: 142px;
				border-right: 1px solid rgba(255,255,255,.36);
				span { display: inline-block; }
				.uhlr-item-icon {
					margin-right: 10px;
				}
				.login-icon {
					width: 21px;
					height: 21px;
					background: url('~@/assets/img/uHeader/icon_dl.png') no-repeat;
					background-size: cover;
				}
				.control-icon {
					width: 19px;
					height: 19px;
					background: url('~@/assets/img/uHeader/icon_kzt.png') no-repeat;
					background-size: cover;
				}
				.register-icon {
					width: 19px;
					height: 19px;
					background: url('~@/assets/img/uHeader/icon_zc.png') no-repeat;
					background-size: cover;
				}
				.uhlr-item-b:hover {
					.uhlr-item-icon.login-icon {
						background: url('~@/assets/img/uHeader/icon_dlhover.png') no-repeat;
						background-size: cover;
					}
					.uhlr-item-icon.control-icon {
						background: url('~@/assets/img/uHeader/icon_kzt_hover.png') no-repeat;
						background-size: cover;
					}
					.uhlr-item-icon.register-icon {
						background: url('~@/assets/img/uHeader/icon_zc_hover.png') no-repeat;
						background-size: cover;
					}
				}
				&:last-child {
					border-right: 0;
				}
			}
		}
	}
</style>
