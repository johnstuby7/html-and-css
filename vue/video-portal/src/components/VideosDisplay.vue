<template>
  <ul>
    <ItemDisplay v-for="video in videosDisplay" v-bind:key="video.id">Video</ItemDisplay>
  </ul>
</template>

<script>
import ItemDisplay from './ItemDisplay.vue';

export default {
  name: "VideosDisplay",
  props: ["videosDisplay"],
  components: {
    ItemDisplay
  }
}
</script>

<style></style>