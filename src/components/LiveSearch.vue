
<template>
  <div>
    <search-bar
      :search="search"
    />
    <tweet-feed
      v-if="showFeed"
      :tweets="tweets"
    />

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
  },

};
</script>

<style scoped>

</style>
