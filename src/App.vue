<template>
	<div id="app" class="has-navbar-fixed-top">
		<navigation-bar></navigation-bar>
		<!-- <div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div> -->
		<router-view/>
		<bottom-footer></bottom-footer>
	</div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue';
import BottomFooter from '@/components/BottomFooter.vue';

export default {
	components: {
		NavigationBar,
		BottomFooter
	}
}
</script>


<style lang="scss">
@import "./assets/constants.scss";

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	// color: #2c3e50;
	background-color: $kennel-background-color-light;
	height: 100%;

	&.has-navbar-fixed-top {
		padding-top: $navbar-height;
	}
}
</style>
