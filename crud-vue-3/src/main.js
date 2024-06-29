import { createApp } from 'vue'
import App from './App.vue'

//import router
import router from './router'

//import Bootstrap, Popper, Jquery
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

// createApp(App).mount('#app')

const app = createApp(App)

//use vue router
app.use(router)

app.mount('#app')
