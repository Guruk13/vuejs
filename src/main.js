// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
window.shared_data = {
  samuelFims: [
    { index: 1, text: 'Pulp Fiction' },
    { index: 2, text: 'Fresh' },
    { index: 3, text: 'Snakes on a Plane' }
  ]
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})





