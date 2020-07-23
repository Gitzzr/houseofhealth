<template>
	<view class="g-g-block">
		<view class="emrform">
			
			<view class="tables">
				<view class="table_sub">
					<text>姓名</text>
					<view class="input">
						<input type="text" v-model="emrtabvalue.username" placeholder="请输入姓名" />
					</view>
				</view>
				<view class="table_sub">
					<text>就诊日期</text>
					<view class="input">
						<input type="text" v-model="emrtabvalue.treatmenttime" placeholder="请输入就诊日期"/>
					</view>
				</view>
				<view class="table_sub">
					<text>发病时间</text>
					<view class="input">
						<input type="text" v-model="emrtabvalue.diseasetime" placeholder="请输入发病时间"/>
					</view>
				</view>
				<view class="table_sub">
					<text>联系方式</text>
					<view class="input">
						<input type="text" v-model="emrtabvalue.phone" placeholder="请输入联系方式"/>
					</view>
				</view>
				<view class="table_textarea">
					<text>症状描述</text>
					<textarea v-model="emrtabvalue.symptom" placeholder="请描述您的症状..." />
				</view>
			</view>
			
			<view class="tablebtn" @tap="puttab">
				<button type="primary">提交</button>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				emrtabvalue:{
					"username":"",
					"treatmenttime":"",
					"diseasetime":"",
					"emrphone":"",
					"symptom":""
				}
			}
		},
		methods: {
			puttab(e){
				var emrtabvalue = this.emrtabvalue;
				uni.request({
					url: this.serverUrl + '/addemr',
					method: "POST",
					data: JSON.stringify(emrtabvalue),
					success: (res) => {
						console.log("成功");
						if (res.data.code == 200) {
							//弹出提示框
							uni.showToast({
								title: '提交成功',
								duration: 2000, //延迟
								icon: "none",
								position:"bottom"
							});
							//储存到storage
							uni.setStorage({
								key: 'emrtabvalue',
								data: res.data.data,
								success: function () {
									console.log('success');
								}
							});
							//设置定时器延迟跳转
							setTimeout(function() {
								uni.switchTab({
									url: '../../pages/inquiry/inquiry',
									success: res => {},
									fail: () => {},
									complete: () => {}
								})
							}, 2000);
						}else if(res.data.code == 10006){
							uni.showToast({
								title: '姓名不能为空',
								duration: 2000, //延迟
								icon: "none",
								position:"bottom"
							});
						}
					}
				})
			}
		}
	}
</script>

<style>
	@import url("setEMR.css");
</style>
