<template>
  <img alt="Schwaasz logo" :src="logo">

  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      click the DOG button to navigate to the sheet data template
    </p>
  </div>
</template>

<script lang="ts">
import logo from '@/assets/logo.png'; // Import the image

export default {
  name: 'LandingPage',
  props: {
    msg: String
  },
  data() {
    return {
      logo, // Set it in the data
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

img {
  width: 200px;
}
</style>
