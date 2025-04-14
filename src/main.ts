import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import Ripple from "primevue/ripple";
import ProgressBar from "primevue/progressbar";
import Button from "primevue/button";
import Paginator from "primevue/paginator";
import Menubar from "primevue/menubar";
import ScrollTop from "primevue/scrolltop";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";

import MenuTopBar from "./components/MenuTopBar.vue";
import ListMovies from "./components/ListMovies.vue";

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
app.directive("ripple", Ripple);

app.component("ProgressBar", ProgressBar);
app.component("Button", Button);
app.component("Paginator", Paginator);
app.component("Menubar", Menubar);
app.component("ScrollTop", ScrollTop);
app.component("IconField", IconField);
app.component("InputIcon", InputIcon);
app.component("InputText", InputText);
app.component("FloatLabel", FloatLabel);

app.component("MenuTopBar", MenuTopBar);
app.component("ListMovies", ListMovies);

app.mount("#app");
