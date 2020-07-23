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
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabvalue:{}
			}
		},
		onLoad() {
			var my = this;
			uni.getStorage({
				key: 'tabvalue',
				success: function (res) {
					my.tabvalue = res.data;
					console.log(my.tabvalue);
				}
			});
		},
		methods: {
			
		}
	}
</script>

<style>
	@import url("../../tablesinput/tablesinput");
</style>
