import Vue from "nativescript-vue";
import { TNSFontIcon, fonticon } from "nativescript-fonticon";
import Home from "./components/Home";

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
    fa: "./font-awesome.css",
    ion: "./ionicons.css"
};
TNSFontIcon.loadCss();

Vue.filter("fonticon", fonticon);

new Vue({
    render: h => h("frame", [h(Home)])
}).$start();
