import Vue from 'vue';
import App from './App.vue';
import ServerApp from './components/Server/ServerApp.vue';

Vue.component('Server', ServerApp);
new Vue({
    el: '#app',
    render: (h) => h(App),
});
