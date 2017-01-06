import Vue from 'vue'
import App from '../components/App.vue'
import Test from '../components/Test.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

// 2. 创建路由实例
const router = new VueRouter({
    routes: [
        { path: '/test', component: Test },
        { path: '/index', component: App },
        /*{ path: '/', redirect: '/index' }*/
    ]
});

//3. 创建和挂载根实例
const app = new Vue({ router: router }).$mount('#app');
