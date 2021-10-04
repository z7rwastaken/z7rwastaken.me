import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Plugins
import VueRouter from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

// FontAwesome Icon-Packs
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// eslint-disable-next-line vue/component-definition-name-casing
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueRouter);

library.add(fas, far, fab);

new Vue({
    router,
    render: h => h(App)
})
.$mount('#app');