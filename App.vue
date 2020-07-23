<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch');
			// #ifdef APP-PLUS
			// 锁定屏幕方向
			plus.screen.lockOrientation('portrait-primary'); //锁定
			// #endif
		}
		
		// onShow: function() {
		// 	console.log('App Show')
		// },
		// onHide: function() {
		// 	console.log('App Hide')
		// }
	}
</script>

<style>

	/*每个页面公共css */
	/* 全局页面内容样式 */
	/* 全局引入阿里字体图标库 */
	@font-face {
		font-family: 'iconfont';
		src: url(static/font/font_alijiankang/iconfont.eot);
		src: url(static/font/font_alijiankang/iconfont.eot?#iefix) format('embedded-opentype'),
			url(static/font/font_alijiankang/iconfont.woff2) format('woff2'),
			url(static/font/font_alijiankang/iconfont.woff) format('woff'),
			url(static/font/font_alijiankang/iconfont.ttf) format('truetype'),
			url(static/font/font_alijiankang/iconfont.svg#iconfont) format('svg');
	}
	
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	/* 全局引入阿里字体图标库end */

	
	.global-ground{
		width: 100%;
		height: 100vh;
		background-color: #F5F5F5;
		/* position: absolute; */
		/* padding-top: 20px; */
	}
	.g-g-block{
		background-color: #FFFFFF;
	}
	.g-g-blue{
		background-color: #4782FF;
	}
	
</style>
