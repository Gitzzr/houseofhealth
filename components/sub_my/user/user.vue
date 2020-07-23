<template>
	<view class="global-ground">
		<!-- 列表菜单渲染 -->
		<view class="mylists g-g-block">
			<view class="myitems" >
				<navigator url="">
					<view class="my-item">
						<!-- <view class=".item-left iconfont ali-icon">{{myitem.itemleft}}</view> -->
						<view class="item-center">
							<text>姓名: </text>
						</view>
						<view class="item-right iconfont ali-icon" >
							<text >{{users.names}}</text>
						</view>
					</view>
				</navigator>
			</view>
		</view>
		<view class="xian"></view>
		<view class="mylists g-g-block">
			<view class="myitems" >
				<navigator url="">
					<view class="my-item">
						<!-- <view class=".item-left iconfont ali-icon">{{myitem.itemleft}}</view> -->
						<view class="item-center">
							<text>邮箱: </text>
						</view>
						<view class="item-right iconfont ali-icon">
							<text>{{users.email}}</text>
						</view>
					</view>
				</navigator>
			</view>
		</view>
		<view class="xian"></view>
		<view class="mylists g-g-block">
			<view class="myitems" >
				<navigator url="">
					<view class="my-item">
						<!-- <view class=".item-left iconfont ali-icon">{{myitem.itemleft}}</view> -->
						<view class="item-center">
							<text>手机: </text>
						</view>
						<view class="item-right iconfont ali-icon">
							<text>{{users.phone}}</text>
						</view>
					</view>
				</navigator>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				users:[]
			}
		},
		methods: {
			
		},
		onLoad() {
			var my = this;
			uni.getStorage({
				key: 'user',
				success: function (res) {
					my.users = res.data;
					// console.log(my.userinfo);
				}
			});
		}
	}
</script>

<style>
	@import "user.css";
</style>
