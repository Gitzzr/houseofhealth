<template>
    <view class="uni-product-list">
        <view class="uni-product" v-for="(product,index) in productList" :key="index" @tap="opdurg(product.id)">
            <view class="image-view">
                <!-- <image v-if="renderImage" class="uni-product-image" :src="'http://192.168.43.63:4888/images/'+product.image"></image> -->
                <image v-if="renderImage" class="uni-product-image" :src="product.image"></image>
            </view>
            <view class="uni-product-title">{{product.username}}</view>
            <view class="uni-product-price">
                <!-- <text class="uni-product-price-favour">￥{{product.price}}</text> -->
                <text class="uni-product-price-original">￥{{product.price}}</text>
                <text class="uni-product-price-original">库存:{{product.stock}}</text>
                <text class="uni-product-tip">{{product.tip}}</text>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                title: 'product-list',
                productList: [
					],
                renderImage: false
            };
        },
        methods: {
			loadData(){
				uni.request({
					url:this.serverUrl + '/listdru',
					method:'GET',
					success: (res) => {
						let productList = res.data.data;
						this.productList = productList;
					}
				})
			},
			opdurg(drugid){
				uni.navigateTo({
					url:'../../components/drugdetails/drugdetails?id='+drugid
				})
			}
        },
        onLoad() {
            this.loadData();
            setTimeout(() => {
                this.renderImage = true;
            }, 300);
        }
		,
        onPullDownRefresh() {
            this.loadData('refresh');
            // 实际开发中通常是网络请求，加载完数据后就停止。这里仅做演示，加延迟为了体现出效果。
            setTimeout(() => {
                uni.stopPullDownRefresh();
            }, 2000);
        },
        onReachBottom() {
            this.loadData();
        }
    };
</script>

<style>
   @import url("drug.css");
</style>
