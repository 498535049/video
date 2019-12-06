<template>
	<div class="header-main">
		<a href="//www.bilibili.com/ranking" target="_blank" class="link-ranking" style="text-decoration : none"><span>排行榜</span></a>
		<div class="container">
			<form action="" class="parent">
				<input type="text" class="search"  placeholder="搜索" />
				<input type="button" name="" id="" class="btn" />
			</form>
		</div>
	</div>
</template>

<script></script>

<style>
.header-main {
	width: 1700px;
	height: 200px;
	border: 0px;
	padding: 5px 5px 5px 50px;
	top: 0;
	right: 0;
	background: url('../assets/biaotou.png');
	background-size: 1900px 200px;
	background-repeat: no-repeat;
}
.link-ranking {
	position: absolute;
	left: 1200px;
	top: 120px;
	color: #33ffff;
	/* background-image: url('../assets/ranking.jpg'); */
}
.container {
	height: 70px;
	width: 800px;
	margin: 100px auto 0 auto;
	position: absolute;
	left: 1250px;
	top: 15px;
}
.parent {
	position: relative;
}
.search {
	width: 200px;
	height: 30px;
	border-radius: 18px;
	outline: none;
	border: 1px solid #ccc;
	padding-left: 20px;
	position: absolute;
}
.btn {
	height: 27px;
	width: 27px;
	position: absolute;
	background: url('../assets/search.png') no-repeat;
	top: 5px;
	left: 190px;
	border: none;
	outline: none;
	cursor: pointer;
}
</style>
