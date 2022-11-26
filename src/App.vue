<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

  import Sider from '/@/layout/sider/Index.vue';
  import Header from '/@/layout/header/Index.vue';
  import Content from '/@/layout/content/Index.vue';
  import Footer from '/@/layout/footer/Index.vue';
</script>

<template>
  <a-layout class="layout-demo">
    <Sider />
    <a-layout>
      <Header />
      <a-layout style="padding: 0 24px">
        <a-breadcrumb :style="{ margin: '16px 0' }">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <!-- 内容 -->
        <Content />
        <!-- 底部 -->
        <Footer />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style scoped></style>
