import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import InputText from 'primevue/inputtext';
import PrimeVue from 'primevue/config';
import Aura from 'primevue/themes/aura';

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});
app.component('InputText', InputText);
app.mount('#app');