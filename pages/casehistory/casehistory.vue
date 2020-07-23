<template>
	<view class="g-g-block">
		<view class="doctor-lists g-g-block">
			<view class="d-items g-g-block" v-for="(lphy,phyindex) in listdes" :key="phyindex" @tap="opcase(lphy.id)">
				<view class="d-items-right">
					<view class="d-item-img">
						<image :src="lphy.image" ></image>
						<!-- <image :src="'http://192.168.43.63:4888/images/'+lphy.image" ></image> -->
					</view>
				</view>
				<view class="d-items-left">
					<view class="d-item-title">{{lphy.username}}</view>
					<view class="d-item-content">{{lphy.describes}}</view>
					<!-- <view class="d-item-bottom">
						<view class="d-item-name">{{lphy.username}}</view>
						<view class="d-item-yiyuan">{{lphy.hospital}}</view>
					</view> -->
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
				//jieshou数据
				"listdes":[]
			}
		},
		onLoad() {
			var obj = this;
			uni.request({
				url: this.serverUrl + '/listdes',
				method: "GET",
				success: (result) => {
					console.log(result.data);
					// debugger;
					if (result.data.code == 200) {
						var listdes = result.data.data;
						// debugger;
						obj.listdes = listdes;
					}
				}
			})
		},
		methods: {
			opcase(caseid){
				uni.navigateTo({
					url:'../../components/casedetails/casedetails?id='+caseid
				})
			}
		}
	}
</script>

<style>
 @import url("casehistory.css");
</style>
