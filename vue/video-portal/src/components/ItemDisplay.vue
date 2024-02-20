<template>
  <li>
    <!-- this data is coming from the videodisplay -->
    {{ video.tags }}
  </li>
</template>

<script>
export default {
  name: "ItemDisplay",
  props: ["video"]
}
</script>

<style></style>