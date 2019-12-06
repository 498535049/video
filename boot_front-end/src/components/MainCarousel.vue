<template>
	<div class="main-carousel">
		<el-carousel height="310px">
			<el-carousel-item v-for="item in carousellist" :key="item">
				<h3 class="small">{{ item.title }}</h3>
				<router-link to="/video"><img :src="getimg(item.img)" @click="setvideoid(item.video)" height="305px" width="560px" /></router-link>
			</el-carousel-item>
		</el-carousel>
		<div class="second-carousel">
			<ul class="second-ul">
				<li class="second-li" v-for="homepage in homepagelist" :key="homepage">
					<h4 class="title-font">{{ homepage.title }}</h4>
					<router-link to="/video"><img class="all-img" :src="getimg(homepage.img)" @click="setvideoid(homepage.video)" height="135px" width="250px" /></router-link>
				</li>
				<!-- 			<li class="second-li">
					<h4 class="title-font-two">11111</h4>
					<a href="#"><img class="all-img" src="../assets/background.jpg" height="135px" width="250px" /></a>
				</li> -->
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app',
	data() {	
		return {
			homepagelist: [],
			carousellist: []
		};
	},
	methods: {
		gethomepage(type) {
			this.$http.get('http://localhost:8080/homepage/getlist?type=' + type).then(
				function(res) {
					this.homepagelist = res.body.homepagelist;
				},
				function() {
					window.console.log('请求失败处理');
				}
			);
		},
		getimg(src) {
			return require('../img/' + src + '.jpg');
		},
		getcarousel(type) {
			this.$http.get('http://localhost:8080/homepage/getlist?type=' + type).then(
				function(res) {
					this.carousellist = res.body.homepagelist;
				},
				function() {
					window.console.log('请求失败处理');
				}
			);
		},
		setvideoid(video_id) {
			localStorage.setItem('video_id', video_id);
		}
	},
	mounted() {
		this.gethomepage('normal');
		this.getcarousel('轮播');
	},
	beforeMount: {}
};
</script>

<style>
.main-carousel {
	position: absolute;
	left: 200px;
	top: 275px;
	width: 560px;
}
.second-ul {
	position: relative;
	width: 580px;
	left: 585px;
	top: -390px;
	line-height: 10px;
}
.second-li {
	float: left;
	width: 50%;
	height: 170px;
	display: block;
}
.small {
	position: absolute;
	left: 15px;
	top: 255px;
	color: aliceblue;
	font: 12px Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
}
.title-font {
	position: relative;
	/* left: 48px; */
	top: 150px;
	color: aliceblue;
	font: 12px Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
}
a {
	text-decoration: none;
}
li {
	list-style-type: none;
}
img {
	border-radius: 15px;
}
</style>
