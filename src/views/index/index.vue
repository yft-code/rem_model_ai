<!-- 首页 -->
<template>
	<div class="index">
		<!-- banner -->
		<index-banner></index-banner>
		<!-- 业务介绍 -->
		<index-business></index-business>
		<!-- 案例 -->
		<index-case></index-case>
		<!-- 联系我们 -->
		<contact-us></contact-us>
	</div>
</template>

<script>
	export default {
		name: "index",
		components: {
			indexBanner: resolve => require(["./banner"],resolve),
			indexBusiness: resolve => require(["./business"],resolve),
			indexCase: resolve => require(["./case"],resolve),
			contactUs: resolve => require(["./contactUs"],resolve)
		}
	}
</script>

<style>
	
</style>
