
<template>
  <div>
    <b-row class="justify-content-md-center">
      <b-col cols="6">
        <b-form-input
          class="mt-2"
          type="text"
          placeholder="Key"
        />
        <b-form-input
          class="mt-2"
          type="password"
          placeholder="Secret"
        />
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center mt-2">
      <b-col cols="4">
        <b-button variant="outline-success">Authenticate</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'AuthForm',
};
</script>

<style scoped>

</style>
