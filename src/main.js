import { createApp } from 'vue'
import axios from 'axios';
import App from './App.vue'
import router from './router'
import Default from './Layout/Wrapper/MasterRocker.vue'
const app = createApp(App)

app.use(router, axios)
app.component("default-layout", Default);
app.mount("#app")