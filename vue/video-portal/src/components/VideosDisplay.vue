<template>
  <ul>
    Videos
    {{ videosDisplay.valueOf() }}
  </ul>
</template>

<script>
export default {
  name: "VideosDisplay",
  props: ["videosDisplay"],
}
</script>

<style></style>