<template>
  <q-layout>
    <q-header class="header row">
      <div class="col-md-4">
        <router-link to="/" class="header__logo">
          <q-img src="../assets/firefly.png" class="header__img" />
          <span class="header__title">Truthfly</span>
        </router-link>
      </div>
      <div class="col-md-8">
        <q-list class="header__nav">
          <EssentialLink
            class="col-md-8 header__nav-a"
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  background-color: rgba(233, 239, 253, 1);
  color: rgba(14, 6, 114, 1);
  height: 117px;
}

.header__logo {
  text-decoration: none;
}
.header__img {
  width: 72px;
  height: 77px;
  margin-left: 10rem;
}
.header__title {
  font-size: x-large;
  text-decoration: none;
}
.header__nav {
  display: flex;
  font-size: 24px;
  margin-left: 14rem;
}

.header__nav-a {
  margin: 0 2rem 0 3rem;
}
</style>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Sobre noticias falsas",
    link: "aboutfakenews",
  },
  {
    title: "¿Que hago?",
    link: "quehago",
  },
  {
    title: "Test",
    link: "fakenewstest",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
