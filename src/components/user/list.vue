<template>
  <div>
    <p>Saffron Gypsy Web Pages</p>
    <hr>
    <ul class="">
      <li>Beauty Products</li>
      <li>Aromatherapy Products</li>
      <li>Aromatherapy & Essential Oils</li>
      <li>Properties</li>
      <li>Jewelry</li>

    </ul>
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
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
