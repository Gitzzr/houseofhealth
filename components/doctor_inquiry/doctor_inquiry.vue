<template>
	<view class="global-ground">
		<view v-for="(appointment, apotindex) in appointments" :key="apotindex" >
			<view class="appointments">
				<view hover-class="none" class="appointments-left" @tap="opdoctor">
					<view class="appointment-left">
						<image :src="appointment.image" ></image>
						<!-- <image :src="'http://192.168.43.63:4888/images/'+appointment.image" ></image> -->
					</view>
					<view class="appointment-center">
						<view class="doctor-header">
							<text class="doctor-name">{{appointment.username}}</text>
							<text class="doctor-physician">{{appointment.section}}</text>
						</view>
						<view class="doctor-center">
							<text class="physicians-disciplines">{{appointment.position}}</text>
						</view>
						<view class="doctor-bottom">
							<!-- 医院 -->
							<text class="physicians-site">{{appointment.workhospital}}</text>
							<!-- <text>推荐指数</text> -->
							<uni-rate :disabled="uniRate.disabled" :value="appointment.recommendation" />
						</view>
					</view>
				</view>
				<view class="appointments-right" @tap="openinfo">
					<text>咨</text>
					<text>询</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniRate from "@/components/uni-rate/uni-rate.vue"
	
	
export default {
	components: {uniRate},
	data() {
		return {
			"uniRate":{
				"disabled":true,
				"value":"2.5"
			},
			appointments: [],
		};
	},
	methods: {
		openinfo(e) {
			console.log(e);
			//设置预约跳转
			uni.navigateTo({
				url: '../../pages/robot/robot',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		opdoctor(){
			console.log("12")
		}
	},
	onLoad() {
		var thisa = this;
		uni.request({
			url: this.serverUrl + '/listdoc',
			method:"GET",
			success: (res) => {
				// debugger;
				if(res.data.code == 200){
					var appointments = res.data.data;
					thisa.appointments = appointments;
					uni.setStorage({
						key: 'appointments',
						data: res.data.data,
						success: function () {
							console.log('appointments=success');
						}
					});
				}
			}
		})
	}
};
</script>

<style>
@import url('../appointment/appointment.css');
</style>
