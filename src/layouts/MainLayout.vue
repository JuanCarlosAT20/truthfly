<template>
  <q-layout>
      <q-header class="header__content row">
        <div class="col-md-4" items-center>
          <router-link to="/" class="header__logo">
            <q-img src="../assets/firefly.png" class="header__img" />
            <span class="header__title">Truthfly</span>
          </router-link>
        </div>
        <div v-if="$q.screen.gt.sm" class="col-md-8">
          <q-list class="header__nav flex justify-end">
            <EssentialLink
              class="col-md-8 header__nav-a"
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
          </q-list>
        </div>
        <q-space v-if="$q.screen.lt.md"/>
        <div class="flex" v-if="$q.screen.lt.md">
          <q-toolbar>
            <q-btn
              flat
              round
              dense
              icon="menu"
              @click="rightDrawerOpen = !rightDrawerOpen">
            </q-btn>
          </q-toolbar>
          <q-drawer
            v-model="rightDrawerOpen"
            side="right"
            show-if-above
            bordered
            content-class="bg-grey-2">
              <q-list align="right">
                <EssentialLink
                  v-for="link in essentialLinks"
                  :key="link.title"
                  v-bind="link"
                />
              </q-list>
          </q-drawer>
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
    title: "Fuentes seguras",
    link: "securelinks",
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
  data(){
    return{
      rightDrawerOpen: false
    }
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

.header__content {
  padding-left:3%;
  padding-right:3%;
  display: flex;
  align-items: center;
  background-color: rgba(233, 239, 253, 1);
  color: rgba(14, 6, 114, 1);
  height: 100px;
  width: 100%;
}

.header__logo {
  text-decoration: none;
}
.header__img {
  width: 57px;
  height: 57px;
}
.header__title {
  margin-top: 2px;
  font-size: 25px;
  text-decoration: none;
  color: rgba(14, 6, 114, 1);
}
.header__nav {
  display: flex;
  font-size: 20px;
}

.header__nav-a {
  margin: 0 1rem 0 1rem;
}
</style>
