<script setup lang="ts">
import '@/threeEdit/type/threeInstance'


</script>

<template>
  <div class="home-view-wrap">
      <!-- <div class="home-left">left</div>
      <div class="home-center">center</div>
      <div class="home-right">right</div> -->
  </div>

</template>


<style scoped lang="less">
.home-view-wrap {
  display: flex;
  height: 100vh;
  .home-left {
    width: 200px;
    background-color: bisque;
  }

  .home-center {
    flex: 1;
  }

  .home-right {
    width: 300px;
    background-color: aquamarine;
  }
}

</style>
