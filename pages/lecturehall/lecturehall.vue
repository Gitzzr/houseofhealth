<template>
	<view class="g-g-block">
		<!-- 医师讲堂 -->
		<view class="doctor-lists g-g-block">
			<!-- <view class="doctor-list-top g-g-block">
				<view class="d-l-title">医师讲堂</view>
				<view class="d-r-title" @tap="opdoctorhall">👉更多</view>
			</view> -->
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
						<!-- <image :src="'http://192.168.43.63:4888/images/'+lphy.image" ></image> -->
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
				"listphy":[]
			}
		},
		onLoad() {
			var obj = this;
			uni.request({
				url: this.serverUrl + '/listphy',
				method: "GET",
				success: (result) => {
					console.log(result.data);
					// debugger;
					if (result.data.code == 200) {
						var listphy = result.data.data;
						// debugger;
						obj.listphy = listphy;
					}
				}
			})
		},
		methods: {
			opxq(id){
				// var u = this.ditems.jtxq;
				uni.navigateTo({
					url: '../../components/doctor_hall/doctor_hall?id='+id,
					success: () => {
						
					}
				})
			}
		}
	}
</script>

<style>
 @import url("lecturehall.css");
</style>
