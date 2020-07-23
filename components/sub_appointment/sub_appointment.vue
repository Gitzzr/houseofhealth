<template>
	<view class="g-g-block">
		<view class="emrform">
			
			<view class="tables">
				<view class="table_sub">
					<text>医师姓名</text>
					<view class="input">
						<!-- <text>{{listphy.username}}</text> -->
						<input type="text" v-model="listphy.username"  />
					</view>
				</view>
				<view class="table_sub">
					<text>姓名</text>
					<view class="input">
						<input type="text" v-model="appointments.username" placeholder="请输入姓名" />
					</view>
				</view>
				<view class="table_sub">
					<text>就诊日期</text>
					<view class="input">
						<input type="text" v-model="appointments.treatmenttime" placeholder="请输入就诊日期"/>
					</view>
				</view>
				<view class="table_sub">
					<text>发病时间</text>
					<view class="input">
						<input type="text" v-model="appointments.diseasetime" placeholder="请输入发病时间"/>
					</view>
				</view>
				<view class="table_textarea">
					<text>症状描述</text>
					<textarea v-model="appointments.symptom" placeholder="请描述您的症状..." />
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
				appointments:{
					"username":"",
					"treatmenttime":"",
					"diseasetime":"",
					"emrphone":"",
					"symptom":""
				},
				listphy:[]
			}
		},
		onLoad(option) {
			// this.jieshou(option);
			//接收
			var obj = this;
			uni.request({
				url: this.serverUrl +'/selectdoc/id='+ option.id,
				method: "GET",
				success: (result) => {
					console.log(result.data);
			// debugger;
					if (result.data.code == 200) {
						var listphy = result.data.data;
						obj.listphy = listphy;
					}
				}
			})
		},
		methods: {
			jieshou(option){
				setTimeout(function() {
					
				}, 500);
			},
			//插入
			puttab(e){
				var appointments = this.appointments;
				uni.request({
					url: this.serverUrl + '/addapm',
					method: "POST",
					data: JSON.stringify(appointments),
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
								key: 'appointments',
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
	@import url("../setEMR/setEMR.css");
</style>
