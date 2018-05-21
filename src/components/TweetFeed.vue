
<template>
  <ul >
    <transition-group name="slide-fade">
      <li
        :key="tweet.id"
        v-for="tweet in shownTweets"
        class="justify-content-md-center list-group-item mb-2"
      >
        <tweet :tweet="tweet"/>
      </li>
    </transition-group>
  </ul>
</template>

<script>
import Tweet from './Tweet';

export default {
  name: 'TweetFeed',
  components: { Tweet },
  props: {
    tweets: { type: Array, default() { return []; } },
  },
  data() {
    return {
      allTweets: [],
      shownTweets: [],
      timer: '',
    };
  },
  methods: {
    popTweet() {
      if (this.allTweets.length > 0) {
        this.shownTweets.unshift(this.allTweets.pop());
      }
      if (this.shownTweets.length > 4 || this.allTweets.length === 0) {
        this.shownTweets.pop();
      }
    },
  },
  created() {
    this.allTweets.push(...this.tweets.reverse());
    this.timer = setInterval(this.popTweet.bind(this), 2000);
  },
  watch: {
    tweets(newTweets) {
      this.allTweets = [...newTweets];
    },
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .5s;
}
.slide-fade-leave-active {
  transition: all .5s;
}
.slide-fade-leave-to{
  transform: translateY(10px);
  opacity: 0;
}
.slide-fade-leave {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateY(-10px);
  max-height:0;
  opacity: 0;
}
</style>
