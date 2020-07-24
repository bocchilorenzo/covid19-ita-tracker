import Vue from 'vue'
import App from './App.vue'
import Unicon from 'vue-unicons'
import { uniCoronavirus, uniHomeAlt, uniHospital, uniCompass, uniUsersAlt, uniHeadSideCough, uniMicroscope, uniArrowUp, uniArrowDown, uniArrowsV, uniUserPlus, uniChartLine, uniMedicalDrip, uniHouseUser, uniSadDizzy, uniPrescriptionBottle, uniEnvelopeAlt, uniCalendarAlt } from 'vue-unicons/src/icons'
import ShardsVue from 'shards-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'shards-ui/dist/css/shards.css'
import router from './router'
import './registerServiceWorker'

Vue.use(ShardsVue);

Unicon.add([uniCoronavirus, uniHomeAlt, uniHeadSideCough, uniMicroscope, uniHospital, uniCompass, uniArrowUp, uniArrowDown, uniArrowsV, uniUsersAlt, uniUserPlus, uniChartLine, uniMedicalDrip, uniHouseUser, uniSadDizzy, uniPrescriptionBottle, uniEnvelopeAlt, uniCalendarAlt])
Vue.use(Unicon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
