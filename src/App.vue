<template>
  <div>
    <Header />
    <div class="container">
      <Filter />
      <Country />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Filter from "./components/Filter.vue";
import Country from "./components/Countries/";
export default {
  name: "App",
  components: { Header, Filter, Country },
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
  color: hsl(200, 15%, 8%);
}
input {
  padding: 15px 0;
  padding-left: 45px;
  width: 400px;
  border: none;
  border-radius: 5px;
  background: white;
}
input:focus {
  outline: none;
}
button {
  background: white;
  padding: 15px 20px;
  border-radius: 5px;
  border: none;
  color: hsl(200, 15%, 8%);
}
button:hover {
  cursor: pointer;
}
.container {
  max-width: 1100px;
  margin: auto;
  padding: 0 12px;
}
.flex {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.light-bg {
  background: hsl(0, 0%, 98%);
}
.card {
  background: white;
}
</style>
