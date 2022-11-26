<template>
  <a-layout-sider hide-trigger collapsible :collapsed="collapsed" :resize-directions="['right']">
    <div class="logo" />
    <a-menu
      :defaultOpenKeys="['1']"
      :defaultSelectedKeys="['0_3']"
      :style="{ width: '100%' }"
      @menuItemClick="onClickMenuItem"
    >
      <a-menu-item key="0_1" disabled>
        <IconHome />
        Menu 1
      </a-menu-item>
      <a-menu-item key="0_2">
        <IconCalendar />
        Menu 2
      </a-menu-item>
      <a-menu-item key="0_3">
        <IconCalendar />
        Menu 3
      </a-menu-item>
      <a-sub-menu key="1">
        <template #title>
          <span><IconCalendar />Navigation 1</span>
        </template>
        <a-menu-item key="1_1">Menu 1</a-menu-item>
        <a-menu-item key="1_2">Menu 2</a-menu-item>
        <a-sub-menu key="2" title="Navigation 2">
          <a-menu-item key="2_1">Menu 1</a-menu-item>
          <a-menu-item key="2_2">Menu 2</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="3" title="Navigation 3">
          <a-menu-item key="3_1">Menu 1</a-menu-item>
          <a-menu-item key="3_2">Menu 2</a-menu-item>
          <a-menu-item key="3_3">Menu 3</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="4">
        <template #title>
          <span><IconCalendar />Navigation 4</span>
        </template>
        <a-menu-item key="4_1">Menu 1</a-menu-item>
        <a-menu-item key="4_2">Menu 2</a-menu-item>
        <a-menu-item key="4_3">Menu 3</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  import { IconHome, IconCalendar } from '@arco-design/web-vue/es/icon';
  import { Message } from '@arco-design/web-vue';

  const collapsed = ref(false);

  const onClickMenuItem = (key: string) => {
    Message.info({ content: `You select ${key}`, showIcon: true });
  };
</script>

<style lang="less" scoped></style>
