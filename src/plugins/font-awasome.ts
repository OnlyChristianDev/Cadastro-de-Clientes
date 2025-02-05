// src/plugins/font-awesome.ts
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faHome, faPhone, faLocationDot, faCalendar, faFile} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUser, faEnvelope, faHome, faPhone, faLocationDot, faCalendar, faFile);

export default (app: any) => {
  app.component('font-awesome-icon', FontAwesomeIcon);
};
