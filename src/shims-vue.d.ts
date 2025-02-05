// src/shims-vue.d.ts
declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  
  declare module '@fortawesome/vue-fontawesome' {
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    export { FontAwesomeIcon };
  }