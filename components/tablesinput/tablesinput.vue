<template name="tablesinput">
	<view class="g-g-block">
		<view class="tables">
			<view class="table_sub">
				<text>{{header}}</text>
				<view class="input">
					<!-- <input type="text" v-model:value="value" :placeholder="placeholder" /> -->
					<input type="text" :value="value" />
				</view>
			</view>
		</view>
		<!-- <view class="tablebtn">
			<button type="primary">提交</button>
		</view> -->
	</view>
</template>

<script>
	export default {
		name: "tablesinput",
		data() {
			return {
				"header":"姓名:",
				"placeholder":"请输入姓名:",
				"value":"",
				"v":{
					"valueq":"1"
				}
			}
		},
		methods: {
			
		},
		props: {
			//input前的注释
			header_1:"",
			//input提示内容
			placeholder_1:"",
			studentNo:"1",
			username:"",
			dept:"",
			grade:"",
			major:"",
			glass:"",
			card_no:"",
			id_no:"",
			mobile:"",
			start_date:"",
			end_date:""
		},
		created() {
			// var student_no = "";
			// if(this.student_no != null && this.student_no != undefined && this.student_no != ''){
			// 	student_no = this.student_no;
			// }
			var studentNo = this.student_no;
			// console.log(studentNo);
			// var value = this.value;
			// value = studentNo;
			// console.log(value);
			// this.header = this.header_1;
			// this.placeholder = this.placeholder_1;
			// console.log(this.value);
		},
		onLoad() {
		}
	}
</script>

<style>
@import url("tablesinput.css");
</style>
