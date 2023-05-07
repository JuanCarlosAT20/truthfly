<template>
  <div class="content">
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
  </div>
</template>


<script>
export default {
  name: "TitleQuestion",
  props: {
    title: {},
    subtitle: {},
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}

body {
  display: flex;
  justify-content: center;
}

.content {
  background-color: blue;
  width: 600px;
}
</style>
