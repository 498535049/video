<template>
	<div class="main-video">
		<NavigationBar></NavigationBar>
		<h1 title="纷纷被为为丰富!">{{ video.title }}</h1>
		<div class="classification">
			<router-link to="/"><span style="color: grey;">动画</span></router-link>
			<span>></span>
			<router-link to="/">
				<span style="color: grey;">{{ video.type }}</span>
			</router-link>
		</div>
		<span class="create-data">{{ video.author }}</span>
		<div class="playback-volume">
			<span>{{ video.playbackVolume }}——</span>
			<span>未经作者授权，禁止转载</span>
		</div>
		<div class="videobox">
			<video id="my-video" class="video-js vjs-big-play-centered" controls preload="auto" poster="../assets/biaotou.jpg" data-setup="{}">
				<source :src="videoname" type="video/mp4" v-if="video.video != 'undefined'" />
				<!-- <source src="../video/movie.mp4"  type="video/mp4" />	 -->
				<!-- 			<source src="http://vjs.zencdn.net/v/oceans.webm" type="video/webm" />
				<source src="http://vjs.zencdn.net/v/oceans.ogv" type="video/ogg" /> -->
				<p class="vjs-no-js">
					To view this video please enable JavaScript, and consider upgrading to a web browser that
					<a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
				</p>
			</video>
		</div>
		<div class="barrages-drop">
			<vue-baberrage
				:isShow="barrageIsShow"
				:barrageList="barrageList"
				:maxWordCount="maxWordCount"
				:throttleGap="throttleGap"
				:loop="barrageLoop"
				:boxHeight="boxHeight"
				:messageHeight="messageHeight"
			></vue-baberrage>
		</div>
		<div class="relevant-video">
			<ul class="relevant-video-ul">
				<div>
					<li>
						<router-link to="/video">
							<img src="../../dist/img/background.537a255e.jpg" width="240px" height="150px" />
							<span class="relevant-video-title">标题标题</span>
							<span class="relevant-video-up">作者</span>
							<span class="relevant-video-cont">1000播放</span>
						</router-link>
					</li>
				</div>
				<div>
					<li>
						<router-link to="/video">
							<img src="../../dist/img/background.537a255e.jpg" width="240px" height="150px" />
							<span class="relevant-video-title">标题标题</span>
							<span class="relevant-video-up">作者</span>
							<span class="relevant-video-cont">1000播放</span>
						</router-link>
					</li>
				</div>
				<div>
					<li>
						<router-link to="/video">
							<img src="../../dist/img/background.537a255e.jpg" width="240px" height="150px" />
							<span class="relevant-video-title">标题标题</span>
							<span class="relevant-video-up">作者</span>
							<span class="relevant-video-cont">1000播放</span>
						</router-link>
					</li>
				</div>
				<div>
					<li>
						<router-link to="/video">
							<img src="../../dist/img/background.537a255e.jpg" width="240px" height="150px" />
							<span class="relevant-video-title">标题标题</span>
							<span class="relevant-video-up">作者</span>
							<span class="relevant-video-cont">1000播放</span>
						</router-link>
					</li>
				</div>
				<div>
					<li>
						<router-link to="/video">
							<img src="../../dist/img/background.537a255e.jpg" width="240px" height="150px" />
							<span class="relevant-video-title">标题标题</span>
							<span class="relevant-video-up">作者</span>
							<span class="relevant-video-cont">1000播放</span>
						</router-link>
					</li>
				</div>
				<div>
					<li>
						<router-link to="/video">
							<img src="../../dist/img/background.537a255e.jpg" width="240px" height="150px" />
							<span class="relevant-video-title">标题标题</span>
							<span class="relevant-video-up">作者</span>
							<span class="relevant-video-cont">1000播放</span>
						</router-link>
					</li>
				</div>
				<div>
					<li>
						<router-link to="/video">
							<img src="../../dist/img/background.537a255e.jpg" width="240px" height="150px" />
							<span class="relevant-video-title">标题标题</span>
							<span class="relevant-video-up">作者</span>
							<span class="relevant-video-cont">1000播放</span>
						</router-link>
					</li>
				</div>
			</ul>
		</div>
	</div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
import { vueBaberrage, MESSAGE_TYPE } from 'vue-baberrage';
export default {
	name: 'app',
	data() {
		return {
			msg: '马优晨就是个辣鸡~',
			barrageIsShow: true,
			messageHeight: 3,
			boxHeight: 150,
			barrageLoop: true,
			maxWordCount: 3,
			throttleGap: 5000,
			barrageList: [],
			video: {},
			videoname: null
			// videoname: require("../video/"+this.video.video+".mp4")
		};
	},
	components: {
		NavigationBar,
		vueBaberrage
	},
	mounted() {
		this.addToList();
		this.getvideo();
		this.getvideoad();
	},
	methods: {
		addToList() {
			let list = [
				{
					id: 1,
					avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
					msg: this.msg,
					time: 3,
					barrageStyle: 'red'
				},
				{
					id: 2,
					avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
					msg: this.msg,
					time: 8,
					barrageStyle: 'green'
				},
				{
					id: 3,
					avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
					msg: this.msg,
					time: 10,
					barrageStyle: 'normal'
				},
				{
					id: 4,
					avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
					msg: this.msg,
					time: 5,
					barrageStyle: 'blue'
				},
				{
					id: 5,
					avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
					msg: this.msg,
					time: 6,
					barrageStyle: 'red'
				},
				{
					id: 6,
					avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
					msg: this.msg,
					time: 12,
					barrageStyle: 'normal'
				},
				{
					id: 7,
					avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
					msg: this.msg,
					time: 5,
					barrageStyle: 'red'
				},
				{
					id: 8,
					avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
					msg: this.msg,
					time: 5,
					barrageStyle: 'normal'
				},
				{
					id: 9,
					avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
					msg: this.msg,
					time: 8,
					barrageStyle: 'red'
				},
				{
					id: 10,
					avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
					msg: this.msg,
					time: 10,
					barrageStyle: 'yellow'
				}
			];
			list.forEach(v => {
				this.barrageList.push({
					id: v.id,
					avatar: v.avatar,
					msg: v.msg,
					time: v.time,
					type: MESSAGE_TYPE.NORMAL,
					barrageStyle: v.barrageStyle
				});
			});
		},
		getvideo() {
			var video_id = localStorage.getItem('video_id');
			var requestparameter = {
				video_id: video_id
			};
			// this.$http.post('http://localhost:8080/video/getvideo',requestparameter,{emulateJSON:true}).then(
			// 	function(res) {
			// 		this.video = res.body.video;
			// 	},
			// 	function() {
			// 		window.console.log('请求失败处理');
			// 	}
			// );
			this.$axios({
				method: 'post',
				url: 'http://localhost:8080/video/getvideo',
				data: requestparameter,
				//withCredentials:true, //局部携带cookie
				headers: {} //如果需要添加请求头可在这写
			})
				.then(res => {
					//res是返回结果
					//你的下一步操作 例:
					this.video = res.body.video;
				})
				.catch(err => {
					window.console.log(err);
					//请求失败就会捕获报错信息
					// err.response可拿到服务器返回的报错数据
				});
		},
		getvideoad() {
			var name = this.video.video;
			alert(name);
			this.videoname = require('../video' + name + '.mp4');
		}
	}
};
</script>

<style>
.classification {
	position: absolute;
	left: 155px;
	top: 160px;
	color: grey;
}
.create-data {
	position: absolute;
	left: 260px;
	top: 160px;
	color: grey;
}
.playback-volume {
	position: absolute;
	left: 155px;
	top: 182px;
	color: grey;
}
.videobox {
	position: absolute;
	left: 155px;
	top: 225px;
}
#my-video {
	width: 960px;
	height: 500px;
}
.relevant-video {
	position: absolute;
	left: 1100px;
	top: 210px;
}
.relevant-video-title {
	position: relative;
	top: -10px;
	left: -235px;
	color: white;
}
.relevant-video-up {
	position: relative;
	top: 15px;
	left: -300px;
}
.relevant-video-cont {
	position: relative;
	top: 15px;
	left: -210px;
}
.relevant-video-ul {
	line-height: 90px;
}
h1 {
	position: absolute;
	left: 155px;
	top: 100px;
	color: grey;
	font: 30px Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
}
.barrages-drop {
	position: absolute;
	top: 25px;
	left: 100px;
	width: 960px;
	height: 200px;
}
.baberrage-stage {
	position: absolute;
	top: 200px;
	left: 50px;
	z-index: 1;
	overflow: hidden;
}
</style>
