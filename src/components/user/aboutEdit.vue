<template>
  <div>
    <h1>About My </h1>
    <hr>
    <p>Did you like the list?</p>
    <button @click="show = ! show" class="btn btn-primary">Yes</button>
    <button @click="clickno = !clickno" class="btn btn-primary">No</button>
    <div class="alert alert-mfo" v-show="show">Awesome</div>
    <div class="alert alert-mfo" v-show="clickno">Too Bad</div>
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    <hr>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <hr>
  </div>
</template>





<script>
  export default{
  data() {
    return {
      show: false,
      clickno: false
    }
  },
      methods: {
        navigateToHome() {
          this.$router.push({ name: 'Home' });
        }
      }

  };
</script>
