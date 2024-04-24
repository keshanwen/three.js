<template>
    <div class='tip-home'>
       <!-- <nut-cell>
    <nut-video :source="source" :options="options" />
  </nut-cell> -->
    <!-- <Button type="primary">Primary</Button> -->
      <!-- <Video :source="source" :options="options" /> -->
      hello wrold
    </div>
</template>
<script setup lang='ts'>
import { Video } from '@nutui/nutui'

import { ref } from 'vue'
const source = ref({
  src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
  type: 'video/mp4'
})
const options = ref({
  autoplay: true,
  muted: true,
  controls: true
})
</script>


<style lang='less' scoped>
.tip-home {
  transform: translate(49%,20%);
  width: 400px;
  height: 240px;
  color: white;
  padding: 40px;
  padding-left: 180px;
  padding-right: 0;
  // d:\居家办公\素材\png\科技弹窗2.png
  // background-image: url('@/assets/信息背景.png');
  background-image: url('@/assets/科技弹窗2.png');
  background-repeat: no-repeat;
 // background-size: cover;
 background-size: contain;
}
</style>