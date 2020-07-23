<template>
	<view class="global-ground">
		
		<view class="iuser g-g-block" @tap="opuser">
			<image src="../../static/tabBarIco/my.png" class="touxiang"></image>
			<view class="iuser-center">
				<text class="u-name">{{userinfo.names}}</text>
				<view class="id-div">
					<text class="u-id">用户名: {{userinfo.username}}</text>
				</view>
			</view>
			<view class="iuser-right">
				<view class="iuser-btn iconfont ali-icon">&#xe69f;</view>
			</view>
		</view>
		<!-- 头部信用户信息end -->
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
		<!-- app信息列表 -->
		<view class="mylists2 g-g-block" v-for="(myitem2,my2index) in myitems2" :key="my2index">
			<navigator :url="myitem2.url">  <!-- 设置跳转 -->
				<view class="my-item2" >
						<view class=".item-left2 iconfont ali-icon">{{myitem2.itemleft}}</view>
						<view class="item-center2">
							<text>{{myitem2.itemcenter}}</text>
						</view>
						<view class="item-right2 iconfont ali-icon">
							<text>&#xe69f;</text>
						</view>
				</view>
			</navigator>
		</view>
		<!-- 列表菜单渲染end -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"myitems":[
					{
						"url":"/components/sub_my/my_physician_visits/my_physician_visits",
						"itemleft":"\ue749",
						"itemcenter":"我的问诊",
					},
					{
						"url":"/components/sub_my/my_health_insurance/my_health_insurance",
						"itemleft":"\ue77c",
						"itemcenter":"我的医保",
					},
					{
						"url":"/components/sub_my/family/family",
						"itemleft":"\ue687",
						"itemcenter":"家庭成员",
					},
					{
						"url":"/components/sub_my/myemr/myemr",
						"itemleft":"\ue77c",
						"itemcenter":"我的病历",
					}
				],
				"myitems2":[
					{
						"url":"/components/sub_my/set/set",
						"itemleft":"\ue753",
						"itemcenter":"设置",
					}
					// ,{
					// 	"url":"/components/sub_my/about/about",
					// 	"itemleft":"\ue75e",
					// 	"itemcenter":"关于我们",
					// }
				],
				//获取用户的信息
				"userinfo":[]
			}
		},
		onLoad() {
			var my = this;
			uni.getStorage({
				key: 'user',
				success: function (res) {
					my.userinfo = res.data;
					// console.log(my.userinfo);
				}
			});
		},
		methods: {
			opuser(){
				uni.navigateTo({
					url:'../../components/sub_my/user/user'
				});
			}
		},
		//监听导航栏按钮，以下标识别
		onNavigationBarButtonTap(e){
			if (e.index == 0) {  
                console.log('点击首页按钮');
				uni.navigateTo({
					url:'/components/sub_my/set/set'
				});
            } else if (e.index == 1) {  
                console.log('点击消息按钮');
				uni.navigateTo({
					url:'../message/message'
				});
            }
		}
	}
</script>

<style>
	@import "my.css";
</style>
