<template>
	<div class="Navigation-bar">
		<ul class="nav-con-ul">
			<li class="Navigation-bar-main">
				<router-link  to="/" style="text-decoration : none" title="主站" class="t">
					<i class="header-iconfont header-icon-bilibili-tv"></i>
					主站	
				</router-link>
			</li>
			<li class="Navigation-bar-main"><a href="//game.bilibili.com" style="text-decoration : none" title="游戏中心" class="t">游戏中心</a></li>
			<li class="Navigation-bar-main"><a href="//game.bilibili.com" style="text-decoration : none" title="直播" class="t">直播</a></li>
			<li class="Navigation-bar-main"><a href="//game.bilibili.com" style="text-decoration : none" title="漫画" class="t">漫画</a></li>
			<li class="Navigation-bar-main"><a href="//game.bilibili.com" style="text-decoration : none" title="赛事" class="t">赛事</a></li>
		</ul>
		<ul class="nav-login-ul">
			<li class="Navigation-bar-login"><router-link to="/login" ><img src="../assets/HeadPortrait.jpg" width="36px" height="36px"/></router-link></li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		Navigation_barmain: function() {
			window.location.href = '';
		}
	}
};
</script>

<style>
.Navigation-bar {
	width: 100%;
	height: 40px;
	border: 0px;
	padding: 0px 5px 10px 50px;
	position: fixed;
	top: 0;
	right: 0;
	background: transparent;
	background-color: rgba(255, 255, 255, 0.7);
	z-index: 1;
}
.Navigation-bar-main {
	display: inline;
	text-align: center;
	margin-right: 0px;
	text-decoration: none;
	padding: 30px 30px 10px 30px;
	text-decoration: none;
	font: 12px Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
}
.Navigation-bar-main:hover {
	background: rgba(200, 255, 255, 0.3);
}
.Navigation-bar-login{
	position: absolute;
	left: 1320px;
	top: 10px;
}
a{
	color: black;
}
</style>
