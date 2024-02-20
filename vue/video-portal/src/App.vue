<template>
  <!-- When a newTerm is entered in the input, the handleNewTerm method is triggered -->
  <SearchInput v-on:newTerm="handleNewTerm"></SearchInput>
</template>

<script>
import SearchInput from './components/SearchInput.vue';

// api key for pixabay
const API_KEY = '42461811-f65e300ab1c8493defc80a8f9';

export default {
  name: 'App',
  components: {
    SearchInput
  },
  methods: {
    //  Async ensures that a promise is returned, something is returned, await only works with async
    handleNewTerm: async function (searchInput) {
      // the ? allows us to add in parameters to the fetch
      const response = await fetch('https://pixabay.com/videos/?' + new URLSearchParams({
        key: API_KEY,
        q: searchInput
      }))
      const data = response.json()
      console.log(response)
    }
  }
}
</script>

<style></style>
