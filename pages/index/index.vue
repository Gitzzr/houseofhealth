<template>
	<view class="global-ground">
		<!-- 各别页面子模块 -->
		<view class="g-g-block-2">
			<view class="submodule">
				<view class="submodule-items" >
					<view class="sub-item" v-for="(subm,submindex) in submodule" :key="submindex">
						<navigator :url="subm.suburl">
							<view class="iconfont submico">{{subm.subicon}}</view>
							<text class="sub-item-text">{{subm.subname}}</text>
						</navigator>
					</view>
				</view>
			</view>
		</view>
		<!-- 各别页面子模块 end -->
		<!-- 轮播图 -->
		<view class="g-g-blue">
			<view class="uni-margin-wrap">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bannerimg/1.png" class="bn-img"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bannerimg/ban2.jpg" class="bn-img"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item banner3 bn-img">
							轮播图没有图3
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 轮播图end -->
		<!-- 医师讲堂 -->
		<view class="doctor-lists g-g-block">
			<view class="doctor-list-top g-g-block">
				<view class="d-l-title">医师讲堂</view>
				<view class="d-r-title" @tap="opdoctorhall">👉更多</view>
			</view>
			<view class="d-items g-g-block" v-for="(lphy,phyindex) in listphy" :key="phyindex" @tap="opxq(lphy.id)">
				<view class="d-items-left">
					<view class="d-item-title">{{lphy.title}}</view>
					<view v-html="lphy.content" class="d-item-content"></view>
					<view class="d-item-bottom">
						<view class="d-item-name">{{lphy.username}}</view>
						<view class="d-item-yiyuan">{{lphy.hospital}}</view>
					</view>
				</view>
				<view class="d-items-right">
					<view class="d-item-img">
						<image :src="lphy.image" ></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 医师讲堂end -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//医师讲堂数据
				"listphy":[],
				//轮播图
				indicatorDots:true,
				autoplay: true, //是否自动切换
				interval: 2000, //自动切换时间间隔
				duration: 1000,  //滑动动画速度时长
				submodule: [
					{
						"subicon":"\ue767",
						"subname":"找医生",
						"suburl":"../../components/doctor_information/doctor_information"
					},
					{
						"subicon":"\ue741",
						"subname":"找药品",
						"suburl":"../drug/drug"
					},
					{
						"subicon":"\ue76c",
						"subname":"查疾病",
						"suburl":"../casehistory/casehistory"
					},
					{
						"subicon":"\ue761",
						"subname":"医师讲堂",
						"suburl":"../lecturehall/lecturehall"
					}
				]
			}
		},
		onLoad() {
			var obj = this;
			uni.request({
				url: this.serverUrl+'/listphy',
				method: "GET",
				success: (result) => {
					// console.log(result.data);
					if (result.data.code == 200) {
						var listphy = result.data.data;
						obj.listphy = listphy;
					}
				}
			})
		},
		methods: {
			//监听医师讲堂更多按钮
			opdoctorhall(){
				uni.navigateTo({
					url:'../lecturehall/lecturehall'
				})
			}
			,
			opxq(id){
				// var u = this.ditems.jtxq;
				uni.navigateTo({
					url: '../../components/doctor_hall/doctor_hall?id='+id,
					success: () => {
						
					}
				})
			}
		},
		//监听导航栏搜索框
		onNavigationBarSearchInputClicked(){ //主页搜索框点击事件
			uni.navigateTo({
				// url: '../HM-search/HM-search',
				url: '../index_search/index_search',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		//监听导航栏按钮，以下标识别
		onNavigationBarButtonTap(e){
			if (e.index == 0) {  
                console.log('点击首页按钮');
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
	@import url("index.css");
</style>
