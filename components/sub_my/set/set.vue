<template>
	<view class="global-ground">
		<!-- 列表菜单渲染 -->
		<view class="mylists g-g-block">
			<view class="myitems" >
				<navigator url="/components/sub_my/about/about">
					<view class="my-item">
						<view class=".item-left iconfont ali-icon">&#xe749;</view>
						<view class="item-center">
							<text>关于我们</text>
						</view>
						<view class="item-right iconfont ali-icon">
							<text>&#xe69f;</text>
						</view>
					</view>
				</navigator>
			</view>
			<view class="myitems" >
				<view class="my-item" @click="outlogin">
					<view class=".item-left iconfont ali-icon">&#xe77c;</view>
					<view class="item-center">
						<text>退出登录</text>
					</view>
					<view class="item-right iconfont ali-icon">
						<text>&#xe69f;</text>
					</view>
				</view>
			</view>
		</view>
		<view class="xian"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			outlogin(){
				
				uni.clearStorage();
				// uni.removeStorage({
				// 	key: 'user',
				// 	success: function (res) {
				// 		console.log('清除user');
				// 	}
				// });
				uni.navigateTo({
					url:'../../../pages/login/login'
				});
			}
		}
	}
</script>

<style>
	@import "../../../pages/my/my.css";
</style>
