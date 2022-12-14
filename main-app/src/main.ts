import { createApp } from 'vue';
import WujieVue from 'wujie-vue3';
import Antd from 'ant-design-vue';
import lifecycles from './lifecycle';
import router from './router';
import App from './App.vue';
import * as Icon from '@ant-design/icons-vue';
import '@/style/normalize.css';
import 'ant-design-vue/dist/antd.css';

const { setupApp, preloadApp, bus } = WujieVue;

bus.$on('sub-route-change', (name: string, path: string) => {
  const mainName = `${name}-sub`;
  const mainPath = `/${name}-sub${path}`;
  const currentName = router.currentRoute.value.name;
  const currentPath = router.currentRoute.value.path;
  if (mainName === currentName && mainPath !== currentPath) {
    router.push({ path: mainPath });
  }
});

const degrade =
  window.localStorage.getItem('degrade') === 'true' ||
  !window.Proxy ||
  !window.CustomElementRegistry;
const props = {
  jump: (name: string) => {
    router.push({ name });
  },
};

setupApp({
  name: 'micro-app-react',
  url: '//localhost:8889/',
  exec: true,
  props,
  degrade,
  alive: true,
  ...lifecycles,
});

setupApp({
  name: 'micro-app-vue',
  url: '//localhost:8810/',
  exec: true,
  props,
  degrade,
  alive: true,
  ...lifecycles,
});

if (window.localStorage.getItem('preload') !== 'false') {
  preloadApp({
    name: 'micro-app-react',
    url: '',
  });
  preloadApp({
    name: 'micro-app-vue',
    url: '',
  });
}

const app = createApp(App);
app.use(router);
app.use(WujieVue);

const icons: any = Icon;
for (const iconKey in icons) {
  app.component(iconKey, icons[iconKey]);
}

app.use(Antd);
app.mount('#app');
