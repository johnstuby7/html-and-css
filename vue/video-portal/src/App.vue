<template>
  <div>
    <!-- When a newTerm is entered in the input, the handleNewTerm method is triggered -->
    <SearchInput @newTerm="handleNewTerm"></SearchInput>
    <VideosDisplay></VideosDisplay>
    <!-- Below is the array of videos returned by search term -->
    {{ videosDisplay.valueOf() }}
  </div>
</template>

<script>
import SearchInput from './components/SearchInput.vue';
import VideosDisplay from './components/VideosDisplay.vue';

// api key for pixabay
const API_KEY = '42461811-f65e300ab1c8493defc80a8f9';

export default {
  name: 'App',
  components: {
    SearchInput,
    VideosDisplay,
  },
  data() {
    return {
      videosDisplay: [],
    }
  },
  methods: {
    //  Async ensures that a promise is returned, something is returned, await only works with async
    async handleNewTerm(searchInput) {
      const response = await fetch(
        "https://pixabay.com/api/videos/?" +
        new URLSearchParams({
          key: API_KEY,
          q: searchInput,
        })
      );
      const data = await response.json();
      // capturing returned data and assigning it to the videosDisplay array
      this.videosDisplay = data.hits;
    }
  }
}
</script>

<style></style>
