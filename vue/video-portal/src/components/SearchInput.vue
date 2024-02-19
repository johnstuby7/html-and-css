<template>
  <div>
    <input @input="onChange" type="text">
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  methods: {
    onChange: function (event) {
      console.log(event.target.value)
    }
  }
}

</script>

<style></style>