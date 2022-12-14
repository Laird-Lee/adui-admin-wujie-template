import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import Layout from '@/layout/index.vue';
import ReactApp from '@/views/MicroApp/ReactApp.vue';
import VueApp from '@/views/MicroApp/VueApp.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/app',
    name: 'app',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
      },
      {
        path: '/micro-app-react/:path',
        name: 'micro-app-react',
        component: ReactApp,
      },
      {
        path: '/micro-app-vue/:path',
        name: 'micro-app-vue',
        component: VueApp,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
