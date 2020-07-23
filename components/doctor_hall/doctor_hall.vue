<template>
	<view class="g-g-block">
		<view class="d-items g-g-block">
			<view class="d-item-title">
				{{listphy.title}}
			</view>
			<view class="d-item-info">
				<view class="d-item-name">
					{{listphy.username}}
				</view>
				<view class="d-item-yiyuan">
					{{listphy.hospital}}
				</view>
			</view>
			
			<view class="d-item-img">
				<image :src="listphy.image" ></image>
				<!-- <image :src="'http://192.168.43.63:4888/images/' + listphy.image" ></image> -->
			</view>
			
			<view v-html="listphy.content" class="d-item-content"></view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listphy:[]
			};
		},
		onLoad(option) {
			var obj = this;
			uni.request({
				url: this.serverUrl +'/selectphy/id='+option.id,
				method: "GET",
				success: (result) => {
					console.log(result.data);
					if (result.data.code == 200) {
						var listphy = result.data.data;
						obj.listphy = listphy;
					}
				}
			})
		}
	}
</script>

<style>
	@import url("doctor_hall.css");
</style>
