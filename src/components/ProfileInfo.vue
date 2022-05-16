<template>
  <div class="container">
    <img :src="picture" :alt="`${name}`" class="clickable" />
    <h1 class="name">{{ name }}</h1>
    <h3 class="email">
      {{ email }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "ProfileInfo",
  props: {
    name: String,
    email: String,
  },
  data() {
    return {
      picture: "",
    };
  },
  async created() {
    // gets a random avatar
    const res = await fetch("https://randomuser.me/api");
    const { results } = await res.json();
    this.picture = results[0].picture.large;
  },
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
  top: -10px;
}

h3 {
  font-size: 1rem;
  color: grey;
}

img {
  border-radius: 50%;
  border: 5px white solid;
  width: 8em;
  margin-bottom: 0.5em;
}

.container {
  background-color: transparent;
  border-radius: 6px;
  text-align: center;
  padding: calc(var(--section-gap) / 4);
}

@media (min-width: 1024px) {
  .container {
    background-color: white;
    border-radius: 6px;
    text-align: center;
    padding: calc(var(--section-gap) / 4) calc(var(--section-gap) / 3);
  }
}

.name h1,
.name h3 {
  text-align: center;
}
</style>
