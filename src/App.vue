<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar />
  </div>
</template>

<script>
/**
 * Normalize.css一种现代的HTML5替代CSS重置方法
 * 使浏览器更一致地渲染所有元素，并符合现代标准。它只针对需要规范化的样式。
 * 支持的浏览器Chrome，Edge，Firefox ESR +，IE 10 +，Safari 8 +，Opera
 * 导入方式：import normalize from 'normalize.css'或require('normalize.css')，当然还有传统引用方式和CDN我们就不说了
 * import('normalize.css')这样写也是可以的
 * */
import'normalize.css'

/**
 * 为了不让开发人员因为目录层级关系而烦恼
 * vuecli默认为src路径设置了别名@
 * 所以引用base.css的方法
 * 由原来的import './assets/css/base.css'
 * 可以写为import '@/assets/css/base.css'
 * 我们可以在vue.config.js文件中自由的设置路径的别名
 * 如'assets':'@/assets'
 * 这样的话导入又可以写为import 'assets/css/base.css'
 * */
import 'assets/css/base.css'

import MainTabBar from '@/components/content/mainTabbar/MainTabBar'

export default {
  name: 'App',
  components:{
    MainTabBar
  }
}
</script>

<style>

</style>
