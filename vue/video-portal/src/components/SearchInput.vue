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
      const term = event.target.value;
      // NewTerm is the value of the input field, you can give it any kind of name that you want
      this.$emit('newTerm', term);

    }
  }
}
</script>

<style></style>