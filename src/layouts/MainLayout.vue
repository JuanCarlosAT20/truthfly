<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="row">
      <div
        class="col-sm-4 col-md-3 flex justify-start items-center logo-header"
      >
        <q-btn to="/" flat>
          <q-img src="../assets/firefly.png" />
          <span class="text-h4">TruthFly</span>
        </q-btn>
      </div>
      <div class="col-sm-8 col-md-9">
        <q-list class="flex justify-evenly">
          <EssentialLink
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

<style scoped>
.q-header {
  background-color: rgba(233, 239, 253, 1);
  color: rgba(14, 6, 114, 1);
  height: 117px;
  margin: 0;
}

.q-img {
  width: 72px;
  height: 77px;
}
</style>

