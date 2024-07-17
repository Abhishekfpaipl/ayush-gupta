import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import observe from "./directives/v-observe.js";

createApp(App).directive('observe', observe).use(store).use(router).mount("#app");
document.addEventListener('keydown', function (e) {
    // F12
    if (e.keyCode === 123) {
        e.preventDefault();
    }
    // Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
    }
    // Ctrl+U
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
    }
});
