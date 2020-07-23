<template>
	<view class="g-g-block">
		<view class="login-page" >
			<!-- 注册按钮 -->
			<!-- <view class="regbtn" >
				<text class="regtxt">注册</text>
			</view> -->
			<!-- logo -->
			<view class="login-logo">
				<image src="../../static/healthlogo.png" class="logoimg"></image>
			</view>
			
			<view class="login-items">
				<input class="useritem" type="text" v-model:value="reguser.username" placeholder="用户名" />
				<input class="pwitem" type="text" v-model:value="reguser.password" placeholder="密码" password=true />
				<input class="useritem" type="text" v-model:value="reguser.names" placeholder="昵称" />
				<input class="useritem" type="text" v-model:value="reguser.phone" placeholder="手机号码" />
				<input class="useritem" type="text" v-model:value="reguser.email" placeholder="邮箱" />
			</view>
			
			<view class="loginbtn" @tap="onreg">
				<text> 注 </text><text> 册 </text>
			</view>
			
			<!-- <view class="forgetpw">
				<text>忘记密码？</text>
			</view> -->
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				reguser:{
					"username":"",
					"password":"",
					"names":"",
					"phone":"",
					"email":""
				}
			}
		},
		onLoad() {
			
		},
		methods: {
			onreg(e) {
				let reguser = this.reguser;
				uni.request({
					url: this.serverUrl + '/regcus',
					method: "POST",
					data: JSON.stringify(reguser),
					success: (result) => {
						if (result.data.code == 200) {
							uni.showToast({
								title: '注册成功',
								duration: 2000, //延迟
								icon: "none",
								position:"bottom"
							});
							uni.navigateTo({
								url: '../login/login',
								success: res => {},
								fail: () => {},
								complete: () => {}
							});
						}else if(result.data.code == 11111){
							//用户已存在
							uni.showToast({
								title: '用户已存在',
								duration: 2000, //延迟
								icon: "none",
								position:"bottom"
							});
						}else if(result.data.code == 11112){
							//账号或密码不能为空
							uni.showToast({
								title: '账号或密码不能为空',
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
	@import url("register.css");
</style>
