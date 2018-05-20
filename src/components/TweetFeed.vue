
<template>
  <ul>
    <transition-group name="slide-fade">
      <li
        :key="tweet.id"
        v-for="tweet in shownTweets"
        class="justify-content-md-center list-group-item item"
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
        this.shownTweets.push(this.allTweets.pop());
      }
      if (this.shownTweets.length > 3 || this.allTweets.length === 0) {
        this.shownTweets.shift();
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
};
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s linear;
}
.slide-fade-leave-active {
  transition: all .3s;
}
.item{
  max-height: 50px;
}
.slide-fade-leave-to{
  /* transform: scaleY(0); */
  /* transform-origin: top; */
  max-height: 0px;
  opacity: 0;
}
.slide-fade-leave {
  max-height: 0px;
  opacity: 0;
}
.slide-fade-enter {
  transform: translateY(10px);
  opacity: 0;
}
</style>
