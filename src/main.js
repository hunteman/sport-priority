import Vue from 'vue'
import './assets/styles/style.scss'
import SiteApp from './SiteApp.vue'
 
new Vue({
  el: '#entry',
  render: h => h(SiteApp)
})