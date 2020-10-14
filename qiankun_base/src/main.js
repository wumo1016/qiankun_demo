import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

const isDev = process.env.NODE_ENV === 'development'

function getEnterUrl(devUrl, proUrl){
  return isDev ? devUrl : proUrl
}

import {
  registerMicroApps,
  start
} from 'qiankun';
const apps = [ 
  {
    name:'qiankun_vue1',
    entry: getEnterUrl('http://localhost:8004', 'http://47.100.139.95:8004'),
    container:'#vue1',
    activeRule:'/vue1',
    props:{  }
  },
]
registerMicroApps(apps);

start({
  prefetch: false // 取消预加载
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
