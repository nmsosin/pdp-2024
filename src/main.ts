import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';

import './style.css'
import App from './app/App.vue'

createApp(App).use(Antd).use(createPinia()).mount('#app')
