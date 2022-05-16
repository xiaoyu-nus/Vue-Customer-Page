<script>
import ProfileInfo from "@/components/ProfileInfo.vue";
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    ProfileInfo,
  },
  data() {
    return {
      customer: Object,
    };
  },
  methods: {
    async fetchCustomer() {
      const res = await fetch("/api/v1/sample_customer");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.customer = await this.fetchCustomer();
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <ProfileInfo :name="customer.name" :email="customer.email" />
    </div>
  </header>

  <div class="promotion-wrapper full-height">
    <nav>
      <div class="tag-wrapper">
        <RouterLink to="/">Promotions</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </nav>
    <div class="container">
      <router-view :promotions="customer.promotions"></router-view>
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  margin: 0 0;
  padding: 0 2rem;
  font-weight: normal;
  min-height: 100%;
}

header {
  line-height: 1.5;
}

a {
  text-decoration: none;
  color: #8d8d8d;
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(234, 93%, 37%, 0.11);
  }
}

nav {
  font-size: 1em;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1em;
}

nav a.router-link-exact-active {
  background-color: transparent;
  border-bottom: 2px solid #557dbc;
  font-weight: 600;
  color: #4d4d4d;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  border-bottom: 2px solid #557dbc;
}

nav a {
  display: inline-block;
  padding-bottom: 0.5em;
  margin: 0 2em 0 0;
}

.promotion-wrapper {
  background: white;
  padding-top: 1px;
  border-radius: 1em;
  margin: 0 -30px;
}

.clickable {
  cursor: pointer;
}

/* desktop-view */
@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  .promotion-wrapper {
    background: transparent;
    padding-top: 0;
    border-radius: 0;
    margin: 0;
  }

  .tag-wrapper {
    border-bottom: 1px solid #e3e3e3;
    width: 100%;
    margin-left: 1em;
  }

  .container {
    background-color: white;
    border-radius: 6px;
    padding: 10px 30px;
  }

  .full-height {
    min-height: 100%;
  }

  #app {
    display: grid;
    grid-template-columns: max-content auto;
    align-self: start;
    vertical-align: top;
    justify-content: stretch;
    padding: 0 2rem;
    width: 100vw;
  }

  header {
    display: flex;
    margin: 100px 40px 40px 40px;
    justify-content: flex-end;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
