<template>
	<view class="g-g-block">
		<view class="d-items g-g-block">
			<input type="text" v-model="listphy.username" class="searchtxt" placeholder="请输入关键词"/>
			<view class="searchbtn" @click="search">搜索</view>
		</view>
		<view class="" >
			<!-- <view class="">
				{{st.username}}
			</view> -->
			<view class="mylists2 g-g-block" v-for="(st,sindex) in show" :key="sindex">
				<view class="my-item2" @tap="oplist(st.id)">
						<view class="item-center2">
							<text>{{st.username}}</text>
						</view>
						<view class="item-right2 iconfont ali-icon">
							<text>&#xe69f;</text>
						</view>
				</view>
				<view class="xian"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listphy:{
					username:""
				},
				show:[]
			}
		},
		onLoad() {
			
		},
		methods: {
			search(){
				var listphy = this.listphy;
				uni.request({
					url: this.serverUrl + '/findName',
					method: 'POST',
					data: JSON.stringify(listphy),
					contentType:"application/json;charset=utf-8",
					success: (res) => {
						// debugger;
						let listphy = res.data.data;
						this.show = listphy;
						console.log("9999999");
						if(listphy=="" || listphy==undefined || listphy==null){
							console.log("有效");
							uni.showToast({
								title: '无法查找到改关键词',
								duration: 2000, //延迟
								icon: "none",
								position:"bottom"
							});
						}
					}
				})
			},
			oplist(lid){
				uni.navigateTo({
					url:'../../components/drugdetails/drugdetails?id='+lid
				})
			}
		}
	}
</script>

<style>
@import url("index_search.css");
</style>
