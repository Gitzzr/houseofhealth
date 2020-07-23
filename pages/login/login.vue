<template>
	<view class="g-g-block">
		<view class="login-page" >
			<!-- 注册按钮 -->
			<view class="regbtn" @tap="onreg">
				<text class="regtxt">注册</text>
			</view>
			<!-- logo -->
			<view class="login-logo">
				<image src="../../static/healthlogo.png" class="logoimg"></image>
			</view>
			
			<view class="login-items">
				<input class="useritem" type="text" v-model="user.username" placeholder="请输入用户名" />
				<input class="pwitem" type="text" v-model="user.password" placeholder="请输入密码" password=true />
			</view>
			
			<view class="loginbtn" @tap="openindex">
				<text> 登 </text><text> 录 </text>
			</view>
			
			<view class="forgetpw" @tap="opforgetpw">
				<text>忘记密码？</text>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:{
					"username":"",
					"password":""
				}
			}
		},
		onLoad() {
		},
		methods: {
			onreg(e) {
				console.log(e);
				//设置预约跳转
				uni.navigateTo({
					url: '../register/register',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			openindex(i) {
				let user =this.user;
				// console.log(user);
				uni.request({
					url: this.serverUrl + '/logincus',
					method: 'POST',
					data: JSON.stringify(user),
					success: (res) => {
						let names = res.data;
						// console.log(names)
						// debugger;
						// console.log(res.data.code);
						if(res.data.code == 200){
							//localStorage.setItem("names",res.data.data.names);
							uni.setStorage({
								key: 'user',
								data: res.data.data,
								success: function () {
									console.log('登录成功');
								}
							});
							// console.log(res.data.data.names)
							uni.switchTab({
								url: '../index/index'
							});
						}else if(res.data.code == 10008){
							// toast('账号密码错误');
							uni.showToast({
								title: '账号密码错误',
								duration: 2000, //延迟
								icon: "none",
								position:"bottom"
							});
						}else if(res.data.code == 12221){
							uni.showToast({
								title: '账号或密码不能为空',
								duration: 2000, //延迟
								icon: "none",
								position:"bottom"
							});
						}
					}
				});
			},
			opforgetpw(){
				uni.navigateTo({
					url:'../forgetpw/forgetpw'
				})
			}
		}
	}
</script>

<style>
	@import url("login.css");
</style>
