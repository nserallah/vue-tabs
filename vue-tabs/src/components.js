import Vue from "vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import tabsContainer from "./components/tabsContainer";
import tabOneContent from "./components/tabOneContent";
import tabTowConent from "./components/tabTowConent";
import tabThreeContent from "./components/tabThreeContent";
import itemsComp from "./components/itemsComp";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin)
Vue.component("tabs-container", tabsContainer);
Vue.component("tab-one-content", tabOneContent);
Vue.component("tab-tow-content", tabTowConent);
Vue.component("tab-three-content", tabThreeContent);
Vue.component("items-comp", itemsComp);
