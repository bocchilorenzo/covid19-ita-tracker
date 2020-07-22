import Vue from 'vue'
import App from './App.vue'
import Unicon from 'vue-unicons'
import { uniCoronavirus, uniHospital, uniCompass, uniUsersAlt, uniUserPlus, uniChartLine, uniMedicalDrip, uniHouseUser, uniSadDizzy, uniPrescriptionBottle, uniEnvelopeAlt } from 'vue-unicons/src/icons'
import ShardsVue from 'shards-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'shards-ui/dist/css/shards.css'
import router from './router'

Vue.use(ShardsVue);

Unicon.add([uniCoronavirus, uniHospital, uniCompass, uniUsersAlt, uniUserPlus, uniChartLine, uniMedicalDrip, uniHouseUser, uniSadDizzy, uniPrescriptionBottle, uniEnvelopeAlt])
Vue.use(Unicon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
