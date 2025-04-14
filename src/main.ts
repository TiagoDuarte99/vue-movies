import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

import ProgressBar from "primevue/progressbar";
import Button from "primevue/button";
import Paginator from "primevue/paginator";
import Menubar from "primevue/menubar";
import ScrollTop from 'primevue/scrolltop';

import MenubarTop from './components/MenuTopBar.vue';


const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: false,
    },
  },
});

app.component("ProgressBar", ProgressBar)
app.component("Button", Button)
app.component("Paginator", Paginator)
app.component("Menubar", Menubar)
app.component("ScrollTop", ScrollTop)
app.component("ScrollTop", ScrollTop)
app.component("MenubarTop", MenubarTop)



app.mount("#app");