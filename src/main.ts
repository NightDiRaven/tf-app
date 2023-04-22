import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { createVfm } from 'vue-final-modal'

import 'vue-final-modal/style.css'

const pinia = createPinia();
const vfm = createVfm()

createApp(App).use(router).use(pinia).use(vfm).mount("#app");
