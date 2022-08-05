import { createRouter, createWebHashHistory } from 'vue-router'
import ComponentRouter from '../views/ComponentRouter.vue';
import ComponentConsole from '../views/ComponentConsole.vue';

const routes = [
  {path: '/',name: 'home', component: ComponentRouter},
  {path: '/console',name: 'console', component: ComponentConsole},
  {path: '',name: 'home', component: ComponentRouter},

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
