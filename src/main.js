import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

// Every Vue application starts by creating a new Vue instance, its the entrypoint of  our app
new Vue({
  render: h => h(App),
}).$mount('#app');
