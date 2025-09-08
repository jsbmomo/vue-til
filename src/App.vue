<template>
	<div id="app">
		<header>
			<!--to에 지정된 문자열로 화면 이동-->
			<router-link to="/login">로그인</router-link> 
			|
			<router-link to="/signup">회원가입</router-link>
		</header>
		
		<router-view></router-view>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import AppHeader from './components/common/AppHeader.vue';

var a = 'hi';

export default {
	name: 'app',
	components: {
		HelloWorld,
		AppHeader,
	},
	created() {
		console.log('hi');
	},
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
