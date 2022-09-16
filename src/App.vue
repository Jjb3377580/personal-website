<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

//测试
const activeIndex = ref('/')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

</script>

<template>

  <el-menu :default-active="activeIndex" class="menu" mode="horizontal" :ellipsis="false" @select="handleSelect"
    :router="true">
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="blogs">博客</el-menu-item>
    <el-menu-item index="codeDict">代码词典</el-menu-item>
    <el-menu-item index="3">动态</el-menu-item>
    <el-sub-menu index="4">
      <template #title>软件</template>
      <el-menu-item index="videoPlayer">视频播放器</el-menu-item>
      <el-menu-item index="2-2">音频播放器</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>

    </el-sub-menu>
  </el-menu>

  

  <div class="main-div">
    <RouterView />
  </div>

</template>

<style scoped>
.menu {
  position: fixed;
  top: 0;
  width: 100%;
}

.flex-grow {
  flex-grow: 1;
}

.main-div {
  padding: 0 2rem;
}
</style>
