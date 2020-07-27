import Vue from 'vue';
import App from './App.vue';
import ServerApp from './components/Server/ServerApp.vue';

export const serverBus = new Vue();
Vue.component('ServerApp', ServerApp);
new Vue({
    el: '#app',
    render: (h) => h(App),
});
