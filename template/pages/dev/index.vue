<template>
  <div class="page-dev">
    <p>Device</p>
    <pre>{{ $device }}</pre>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.page-dev {
  background-color: #0c0c0d;
  height: 100dvh;
  padding: 24px;
  color: white;
  font-size: 18px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 0.5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  pre {
    background-color: #18181B;
    border: 0.5px solid #27272A;
    border-radius: 8px;
    padding: 24px 12px;
    color: #E4E4E7;
    font-size: 14px;
  }
}
</style>
