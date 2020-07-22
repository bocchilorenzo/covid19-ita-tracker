import Vue from 'vue'
import App from './App.vue'
import Unicon from 'vue-unicons'
import { uniCoronavirus } from 'vue-unicons/src/icons'
import ShardsVue from 'shards-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'shards-ui/dist/css/shards.css'

Vue.use(ShardsVue);

Unicon.add([uniCoronavirus])
Vue.use(Unicon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
