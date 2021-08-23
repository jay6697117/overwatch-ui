import Vue from 'vue';
import App from './App.vue';
import OwUI from './entry';

console.log('OwUI :>> ', OwUI)
Vue.use(OwUI.Components);
Vue.use(OwUI.plugins.$owAlert);

Vue.config.productionTip = false;

new Vue({
  // components: {
  //   ...OwUI.Components
  // },
  render: h => h(App)
}).$mount('#app');
