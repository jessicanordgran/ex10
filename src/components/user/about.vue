<template>
  <div>
    <h1>About Me</h1>
    <hr>
    <p>I have my own business called The Saffron Gypsy</p>
    <router-link :to="{name: 'aboutEdit', query: {locale: 'en', q: 100}}" tag="button" class="btn btn-primary">About Edit</router-link>
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    <hr>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  export default {
    methods: {
      navigateToHome() {
        this.$router.push({ name: 'Home' });
      }
    }
  };
</script>
