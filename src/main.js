import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/main.css";
import { Tabs, Tab } from "vue3-tabs-component";

createApp(App).component("tabs", Tabs).component("tab", Tab).mount("#app");
