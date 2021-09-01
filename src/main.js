import { createApp } from "vue";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";
import "./main.css";

createApp(App).use(MotionPlugin).mount("#app");
