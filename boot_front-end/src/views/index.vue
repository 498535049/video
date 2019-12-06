<template>
	<div>
		<HeaderMain></HeaderMain>
		<NavigarionBar></NavigarionBar>
		<MainNavigarion></MainNavigarion>
		<MainCaiousel></MainCaiousel>
		<Extension></Extension>
	</div>
</template>

<script>
// import TheLogin from './views/TheLogin.vue';
import NavigarionBar from '../components/NavigationBar.vue';
import HeaderMain from '../components/HeaderMain.vue';
import MainNavigarion from '../components/MainNavigation.vue';
import MainCaiousel from '../components/MainCarousel.vue';
import Extension from '../components/Extension.vue';
export default {
	name: 'app',
	data(){
		return{
			
		}
	},
	components: {
		// HelloWorld,
		// TheLogin,
		NavigarionBar,
		HeaderMain,
		MainNavigarion,
		MainCaiousel,
		Extension
	},
	methods:{},
	mounted:{}
};
</script>

<style></style>
