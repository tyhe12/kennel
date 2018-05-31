import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

Vue.use(Buefy);

Vue.filter('capitalize', function (value) {
	if (!value) return '';
	value = value.toString();
	return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
