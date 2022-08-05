import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGear, faLocationArrow, faXmark, faGaugeSimpleHigh, 
    faBars, faArrowTurnDown, faTrashCan } from '@fortawesome/free-solid-svg-icons';

library.add(faGear, faLocationArrow, faXmark, faGaugeSimpleHigh, faBars, 
    faTrashCan, faArrowTurnDown);

const app = createApp(App).use(createPinia()).component('fa-icon', FontAwesomeIcon);

app.mount('#app');
