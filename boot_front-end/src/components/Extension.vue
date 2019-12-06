<template>
	<div class="extension">
		<img class="extension-img" src="../assets/icons1.png" width="50px" />
		<span class="extension-name">推广</span>
		<span class="extension-name-two">上嘀咕未分化为</span>
		<div class="extension-content">
			<ul class="extension-ul" v-for="advert in HomepageAdvert" :key="advert">
				<li class="extension-li" @click="goadvert(advert.extensionAd)">
						<span   class="extension-font">{{advert.title}}</span>
						<img :src="getimg(advert.img)" width="240px" height="135px" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			HomepageAdvert: []
		};
	},
	methods: {
		getadvert(type) {
			this.$http.get('http://localhost:8080/extension/getHomepageAdvert?type=' + type).then(
				function(res) {
					this.HomepageAdvert = res.body.HomepageAdvert;
				},
				function() {
					window.console.log('请求失败处理');
				}
			);
		},
		getimg(src){
			return require("../img/"+src+".jpg")
		},
		goadvert(ad){
			window.location.href = ad
		}
	},
	mounted() {
		this.getadvert("homepage");
	}
};
</script>

<style>
.extension-img {
	position: absolute;
	left: 200px;
	top: 620px;
}
.extension-name {
	font-size: 40px;
	position: absolute;
	left: 255px;
	top: 620px;
}
.extension-name-two {
	position: absolute;
	left: 400px;
	top: 650px;
	color: #6d757a;
	font-size: 20px Helvetica, Arial;
}
.extension-content {
	position: absolute;
	left: 105px;
	top: 670px;
}
.extension-ul{
	position: relative;
	left: 25px;
	width: 1235px;
}
.extension-li {
	float: left;
	width: 25%; 
	display: block;
	
}
.extension-font {
	position: relative;
	left: 40px;
	top: -10px;
	color: aliceblue;
	font: 12px Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
}
img {
	border-radius: 15px;
}
</style>
