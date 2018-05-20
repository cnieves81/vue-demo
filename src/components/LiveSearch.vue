
<template>
  <div>
    <div class="mb-3">
      <search-bar
        :search="search"
      />
    </div>
    <b-row class="justify-content-md-center">
      <b-col cols="6">
        <tweet-feed
          v-if="showFeed"
          :tweets="tweets"
        />
      </b-col>
    </b-row>
    <div v-if="loading">Loading...</div>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SearchBar from './SearchBar';
import TweetFeed from './TweetFeed';

export default {
  name: 'LiveSearch',
  components: { SearchBar, TweetFeed },
  methods: {
    ...mapActions(['search']),
  },
  computed: {
    showFeed() { return this.$store.state.tweets.statuses.length > 0; },
    tweets() { return this.$store.state.tweets.statuses; },
    sinceId() { return this.$store.getters.latestTweetId; },
    loading() { return this.$store.state.tweets.isPending; },
  },

};
</script>

<style scoped>

</style>
