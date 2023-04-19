<template>
  <q-layout>
    <q-header class="header">
      <router-link to="/">
        <q-img src="../assets/firefly.png" class="header__img"></q-img>
      </router-link>
      <span class="header__title">Truthfly</span>
      <q-list class="header__nav">
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
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
.header__img {
  width: 72px;
  height: 77px;
  margin-left: 10rem;
}
.header__title {
  font-size: x-large;
}
.header__nav {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
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
