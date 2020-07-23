<template>
	<view class="g-g-block">
		<view class="login-page" >
			<!-- 注册按钮 -->
			<!-- logo -->
			<view class="login-logo">
				<image src="../../static/healthlogo.png" class="logoimg"></image>
			</view>
			
			<view class="login-items">
				<input class="useritem" type="text" v-model="forgetpw.username" placeholder="请输入要找回密码的用户名" />
				<input class="useritem" type="text" v-model="forgetpw.email" placeholder="请输入邮箱" />
				<input class="useritem" type="text" v-model="forgetpw.password" placeholder="请输入新密码"/>
			</view>
			
			<view class="loginbtn" @tap="opforgetpw">
				<text> 找 </text><text> 回 </text>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				forgetpw:{
					username:"",
					email:"",
					password:""
				}
			}
		},
		methods: {
			opforgetpw(){
				var forgetpw = this.forgetpw;
				uni.request({
					url:this.serverUrl + '/updatecus',
					data: JSON.stringify(forgetpw),
					method:'POST',
					success: (res) => {
						console.log("forgetpw")
						if(res.data.code == 200){
							uni.showToast({
								title: '恭喜你成功修改密码!',
								duration: 2000, //延迟
								icon: "none",
								position:"bottom"
							});
							uni.navigateTo({
								url:'../login/login'
							});
						}else if(res.data.code == 10008){
							uni.showToast({
								title: '用户名或邮箱错误',
								duration: 2000, //延迟
								icon: "none",
								position:"bottom"
							});
						}else if(res.data.code == 10088){
							uni.showToast({
								title: '用户名或邮箱不能为空',
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
@import url("forgetpw.css");
</style>
