
<template>
  <div>
    <search-bar :search="search"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SearchBar from './SearchBar';

export default {
  name: 'LiveSearch',
  components: { SearchBar },
  methods: {
    ...mapActions(['search']),
  },
  computed: {
    isAuthenticated() {
      return this.$store.isAuthenticated;
    },
  },

};
</script>

<style scoped>

</style>
