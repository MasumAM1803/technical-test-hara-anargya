import { createApp } from "vue";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import router from './router';

import "./style.css";
import "../src/assets/css/index.css";

createApp(App).component("Icon", Icon).use(router).mount("#app");
