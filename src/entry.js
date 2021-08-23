// import Vue from 'vue';
// Import Components
import Components from './components/index';
console.log('entry Components :>> ', Components);

// Import Plugins
import plugins from './plugins/index';

const install = function (Vue) {
  if (install.installed) {
    return;
  }
  Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
  });
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

Components.install = install;

export default {
  Components,
  plugins
};
