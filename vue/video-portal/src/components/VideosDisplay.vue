<template>
  <ul>
    <!-- v-bind:video is the prop that is passed to itemDisplay -->
    <ItemDisplay v-for="video in videosDisplay" v-bind:key="video.id" v-bind:video="video">Video</ItemDisplay>
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