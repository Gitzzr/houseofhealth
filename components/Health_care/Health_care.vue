<template>
	<view class="g-g-block">
		
			<view class="tables">
				<view class="table_sub">
					<text>姓名</text>
					<view class="input">
						<!-- <input type="text" v-model:value="tabvalue.username"  placeholder="请输入姓名"/> -->
						<input class="useritem" type="text" v-model="tabvalue.username" placeholder="请输入姓名" />
					</view>
				</view>
				<view class="table_sub">
					<text>学号</text>
					<view class="input">
						<input type="text" v-model="tabvalue.studentNo" placeholder="请输入学号"/>
					</view>
				</view>
				<view class="table_sub">
					<text>系别</text>
					<view class="input">
						<input type="text" v-model="tabvalue.dept" placeholder="请输入系别"/>
					</view>
				</view>
				<view class="table_sub">
					<text>年级</text>
					<view class="input">
						<input type="text" v-model="tabvalue.grade" placeholder="请输入年级"/>
					</view>
				</view>
				<view class="table_sub">
					<text>专业</text>
					<view class="input">
						<input type="text" v-model="tabvalue.major" placeholder="请输入专业"/>
					</view>
				</view>
				<view class="table_sub">
					<text>班级</text>
					<view class="input">
						<input type="text" v-model="tabvalue.glass" placeholder="请输入班级"/>
					</view>
				</view>
				<view class="table_sub">
					<text>医保卡号</text>
					<view class="input">
						<input type="text" v-model="tabvalue.cardNo" placeholder="请输入医保卡号"/>
					</view>
				</view>
				<view class="table_sub">
					<text>身份证号</text>
					<view class="input">
						<input type="text" v-model="tabvalue.idNo" placeholder="请输入身份证号"/>
					</view>
				</view>
				<view class="table_sub">
					<text>手机号码</text>
					<view class="input">
						<input type="text" v-model="tabvalue.mobile" placeholder="请输入手机号码"/>
					</view>
				</view>
				<view class="table_sub">
					<text>开始日期</text>
					<view class="input">
						<input type="text" v-model="tabvalue.startDate" placeholder="请输入开始日期"/>
					</view>
				</view>
				<view class="table_sub">
					<text>结束日期</text>
					<view class="input">
						<input type="text" v-model="tabvalue.endDate" placeholder="请输入结束日期"/>
					</view>
				</view>
			</view>
			<view class="tablebtn" @tap="opcare">
				<button type="primary">提交</button>
			</view>
		<!-- <tablesinput :studentNo="tabvalue.username" header_1="姓名" placeholder_1="请输入姓名" @input="change"></tablesinput> -->
		<!-- <view class="tablebtn" @tap="opcare">
			<button type="primary">提交</button>
		</view> -->
	</view>
</template>

<script>
	// import tablesinput from "../tablesinput/tablesinput.vue";
	export default {
		data() {
			return {
				tabvalue:{
					"studentNo":"",
					"username":"",
					"dept":"",
					"grade":"",
					"major":"",
					"glass":"",
					"cardNo":"",
					"idNo":"",
					"mobile":"",
					"startDate":"",
					"endDate":""
				}
			}
		},
		onLoad() {
		},
		methods: {
			opcare(e){
				// var serverUrl = common.serverUrl;
				var tabvalue = this.tabvalue;
				uni.request({
					url: this.serverUrl + '/addhir',
					method: "POST",
					data: JSON.stringify(tabvalue),
					success: (res) => {
						console.log("成功");
						if (res.data.code == 200) {
							uni.showToast({
								title: '提交成功',
								duration: 2000, //延迟
								icon: "none",
								position:"bottom"
							});
							uni.setStorage({
								key: 'tabvalue',
								data: res.data.data,
								success: function () {
									console.log('success');
								}
							});
							// uni.navigateTo({
							// 	url: '../login/login',
							// 	success: res => {},
							// 	fail: () => {},
							// 	complete: () => {}
							// });
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
			// ,
			// change(i){
			// 	var txt1 = e.detail.value;
			// 	this.tabvalue.username = txt1;
			// 	console.log("35241"+this.tabvalue.username);
			// }
		}
		// ,
		// components:{
		// 	tablesinput
		// }
	}
</script>

<style>
	@import url("Health_care.css");
	@import url("../tablesinput/tablesinput.css");
</style>
