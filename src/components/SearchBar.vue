<template>
  <b-row class="justify-content-md-center">
    <b-col cols="6">
      <b-form-input
        @change="search({term })"
        v-model="term"
        type="text"
        placeholder="Search for a #"
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    search: { type: Function, default: () => {} },
  },
  data() {
    return {
      term: '',
    };
  },
  computed: {
    reversedTerm() { return this.term.split('').reverse().join(''); },
  },

};
</script>

<style scoped>

</style>
