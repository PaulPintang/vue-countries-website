<template>
  <div class="container">
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Filter from "./components/Filter.vue";
export default {
  name: "App",
  components: { Header, Filter },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
}
.container {
  max-width: 1100px;
  margin: auto;
  padding: 0 12px;
}
</style>
