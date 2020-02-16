import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = true;

window.shared_data = {
  samuelFims: [
    { index: 1, text: 'Pulp Fiction' },
    { index: 2, text: 'Fresh' },
    { index: 3, text: 'Snakes on a Plane' }
  ]
};




new Vue({
  render: h => h(App),
}).$mount('#app')
