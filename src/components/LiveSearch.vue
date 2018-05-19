
<template>
  <div>
    <search-bar/>
  </div>
</template>

<script>
import SearchBar from './SearchBar';

export default {
  name: 'LiveSearch',
  components: { SearchBar },
  computed: {
    isAuthenticated() {
      return this.$store.isAuthenticated;
    },
  },

};
</script>

<style scoped>

</style>
