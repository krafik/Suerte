import './assets/scss/styles.scss'

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import '@/assets/js/spollers.js'
// import '@/assets/js/menuInit.js'
// import '@/assets/js/dynamic_adapt.js'
// import '@/assets/js/sliders.js'



createApp(App).use(store).use(router).mount('#app')
