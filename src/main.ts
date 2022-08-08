import { defineCustomElement } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGear, faLocationArrow, faXmark, faGaugeSimpleHigh, 
    faBars, faArrowTurnDown, faTrashCan, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import WidgetBody from './components/WidgetBody.ce.vue';

library.add(faGear, faLocationArrow, faXmark, faGaugeSimpleHigh, faBars, 
    faTrashCan, faArrowTurnDown, faCircleNotch);

const WeatherWidget = defineCustomElement(WidgetBody);
customElements.define('weather-widget', WeatherWidget);