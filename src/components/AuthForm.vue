
<template>
  <div>
    <b-row class="justify-content-md-center mt-2">
      <b-col cols="4">
        <b-button
          @click="authenticate()"
          variant="outline-success">
          Authenticate
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AuthForm',
  methods: {
    ...mapActions([
      'authenticate',
    ]),
  },
};
</script>

<style scoped>

</style>
