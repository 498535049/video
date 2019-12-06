<template>
	<div>
		<div class="main-navigation">
			<div class="line"></div>
			<el-menu
				:default-active="activeIndex2"
				class="el-menu-demo"
				mode="horizontal"
				@select="handleSelect"
				background-color="#FFFFFF"
				text-color="#181818"
				active-text-color="#181818"
			>
				<el-submenu index="1">
					<template slot="title">
						动画
					</template>
					<a href="https://www.ele.me" target="_blank"><el-menu-item index="1-1">综合</el-menu-item></a>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title">
						番剧
					</template>
					<el-menu-item index="2-1">连载</el-menu-item>
					<el-menu-item index="2-2">完结</el-menu-item>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title">
						里番
					</template>
					<el-menu-item index="3-1">没有</el-menu-item>
					<el-menu-item index="3-2">想啥呢</el-menu-item>
					<el-menu-item index="3-3">不要脸</el-menu-item>
				</el-submenu>
				<el-submenu index="4">
					<template slot="title">
						国创
					</template>
					<el-menu-item index="4-1">原创</el-menu-item>
					<el-menu-item index="4-2">咨询</el-menu-item>
				</el-submenu>
				<el-submenu index="5">
					<template slot="title">
						音乐
					</template>
					<el-menu-item index="5-1">原创</el-menu-item>
					<el-menu-item index="5-2">翻唱</el-menu-item>
					<el-menu-item index="5-3">电音</el-menu-item>
				</el-submenu>
				<el-submenu index="6">
					<template slot="title">
						舞蹈
					</template>
					<el-menu-item index="6-1">宅舞</el-menu-item>
					<el-menu-item index="6-2">宅舞</el-menu-item>
					<el-menu-item index="6-3">宅舞</el-menu-item>
				</el-submenu>
				<el-submenu index="7">
					<template slot="title">
						游戏
					</template>
					<el-menu-item index="7-1">单机</el-menu-item>
					<el-menu-item index="7-2">手机</el-menu-item>
					<el-menu-item index="7-3">网游</el-menu-item>
				</el-submenu>
				<el-submenu index="8">
					<template slot="title">
						生活
					</template>
					<el-menu-item index="8-1">搞笑</el-menu-item>
					<el-menu-item index="8-2">日常</el-menu-item>
				</el-submenu>
				<el-submenu index="9">
					<template slot="title">
						鬼畜
					</template>
					<el-menu-item index="9-1">鬼畜</el-menu-item>
					<el-menu-item index="9-2">鬼畜</el-menu-item>
					<el-menu-item index="9-3">鬼畜</el-menu-item>
				</el-submenu>
				<el-submenu index="10">
					<template slot="title">
						鬼畜
					</template>
					<el-menu-item index="10-1">鬼畜</el-menu-item>
					<el-menu-item index="10-2">鬼畜</el-menu-item>
					<el-menu-item index="10-3">鬼畜</el-menu-item>
				</el-submenu>
				<el-submenu index="11">
					<template slot="title">
						鬼畜
					</template>
					<el-menu-item index="11-1">鬼畜</el-menu-item>
					<el-menu-item index="11-2">鬼畜</el-menu-item>
					<el-menu-item index="11-3">鬼畜</el-menu-item>
				</el-submenu>
				<el-submenu index="12">
					<template slot="title">
						鬼畜
					</template>
					<el-menu-item index="12-1">鬼畜</el-menu-item>
					<el-menu-item index="12-2">鬼畜</el-menu-item>
					<el-menu-item index="12-3">鬼畜</el-menu-item>
				</el-submenu>
			</el-menu>
		</div>
	</div>
</template>

<script></script>

<style>
.main-navigation {
	position: absolute;
	left: 200px;
	top: 210px;
}
</style>
