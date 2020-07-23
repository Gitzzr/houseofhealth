<template>
	<view class="global-ground">
		<!-- 列表菜单渲染 -->
		<view class="mylists g-g-block">
			<view class="myitems" v-for="(myitem,myindex) in myitems" :key="myindex">
				<navigator :url="myitem.url">
					<view class="my-item">
						<view class=".item-left iconfont ali-icon">{{myitem.itemleft}}</view>
						<view class="item-center">
							<text>{{myitem.itemcenter}}</text>
						</view>
						<view class="item-right iconfont ali-icon">
							<text>&#xe69f;</text>
						</view>
					</view>
				</navigator>
			</view>
		</view>
		<view class="xian"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"myitems":[
					{
						"url":"/components/sub_my/set/set",
						"itemleft":"\ue749",
						"itemcenter":"改功能待开发",
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	@import "../../../pages/my/my.css";
</style>
