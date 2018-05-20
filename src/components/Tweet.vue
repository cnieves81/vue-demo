
<template>
  <div>
    {{ tweet.retweeted_status ? tweet.retweeted_status.text : tweet.text }}
  </div>
</template>

<script>
export default {
  name: 'Tweet',
  props: { tweet: { type: Object, default() { return {}; } } },

};
</script>

<style scoped>

</style>
