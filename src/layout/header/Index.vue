<template>
  <a-layout-header style="padding-left: 20px">
    <a-button shape="round" @click="onCollapse">
      <IconCaretRight v-if="collapsed" />
      <IconCaretLeft v-else />
    </a-button>
  </a-layout-header>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import { IconCaretRight, IconCaretLeft } from '@arco-design/web-vue/es/icon';

  const collapsed = ref(false);
  const onCollapse = () => {
    collapsed.value = !collapsed.value;
  };
</script>
