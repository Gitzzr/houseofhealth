<template>
	<view class="global-ground">
		<view v-for="(inquiry,iqindex) in inquiries" :key="iqindex">
			<navigator :url="inquiry.url" hover-class="none">
				<view class="inquiries" >
					<view class="inquiry-left">
						<view class="inquiry-left-img iconfont aliicon">{{inquiry.inquiryleftimg}}</view>
					</view>
					<view class="inquiry-right">
						<text class="inquiry-title">{{inquiry.inquirytitle}}</text>
						<view class="inquiry-content">
							<text class="inq-con-txt">{{inquiry.inqcontxt}}</text>
						</view>
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"inquiries":[
					{
						"url":"../../components/appointment/appointment",
						"inquiryleftimg":"\ue771",
						"inquirytitle":"免费预约",
						"inqcontxt":"提前预约，免去排队麻烦"
					},
					{
						"url":"../../components/doctor_inquiry/doctor_inquiry",
						"inquiryleftimg":"\ue760",
						"inquirytitle":"医师问诊",
						"inqcontxt":"提交问题，专家问你解答"
					},
					{
						"url":"../../components/healthmanagement/healthmanagement",
						"inquiryleftimg":"\ue778",
						"inquirytitle":"健康管理",
						"inqcontxt":"健康的检测、分析、评估"
					},
					{
						"url":"../../components/setEMR/setEMR",
						"inquiryleftimg":"\ue77d",
						"inquirytitle":"电子病历",
						"inqcontxt":"去除纸张，随时查看"
					},
					{
						"url":"../../components/Health_care/Health_care",
						"inquiryleftimg":"\ue76d",
						"inquirytitle":"录入医保信息",
						"inqcontxt":"医保，等于一把后盾"
					}
				]
			}
		},
		methods: {
			
		},
		//监听导航栏按钮，以下标识别
		onNavigationBarButtonTap(e){
			console.log('点击消息按钮');
			uni.navigateTo({
				url:'../message/message'
			});
		}
	}
</script>

<style>
	@import url("inquiry.css");
</style>
