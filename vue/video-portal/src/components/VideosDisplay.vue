<template>
  <ul>
    Videos
    {{ videosDisplay.valueOf() }}
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