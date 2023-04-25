<template>
  <q-page class="flex flex-center">
    <div v-if="$q.screen.gt.sm" class="row main" style="height:580px">
      <div class="col-12 col-md-4" style="z-index: -1;">
        <img class="bell-img" alt="Bell" src="../assets/bell.png" />
      </div>
      <div class="col-12 col-md-7" style="margin-left: 20px;">
        <div>
          <span
            class="text-h1 main-text"
            style="font-weight: normal; color: #0e0672"
            >Puedes identificar la noticia falsa?</span
          >
        </div>
        <div>
          <span class="main-text-subtitle" style="font-size: 20px"
            >Toma nuestro test para saber que tanto conoces acerca de noticias
            falsas</span
          >
        </div>
        <div style="margin-top: 20px">
          <base-button text="Hacer el test" primary-route="fakenewstest" />
        </div>
      </div>
    </div>
    <div v-else class="row" aling="center" style="margin-bottom: 150px;">
      <div class="main-sm-down">
        <div class="main-background"></div>
        <!-- <img class="bell-img" alt="Bell" src="../assets/bell.png" /> -->
      </div>
      <div class="main-content">
        <div>
          <span
            class="text-h1 main main-text-responsive"
            style="font-weight: normal; color: white;"
            :style="{'font-size': $q.screen.gt.xs ? '69px': '46px'}"
            >Puedes identificar la noticia falsa?</span
          >
        </div>
        <div>
          <span class="text-h6" style="color: white;" :style="{'font-size': $q.screen.gt.xs ? '20px': '17px'}"
            >Toma nuestro test para ver que tanto sabes acerca de noticias
            falsas</span
          >
          <base-button style="margin-top: 20px" :is-primary="true" text="Hacer el test" primary-route="fakenewstest" />
        </div>
      </div>
    </div>
    <the-block-info style="margin-top: 40px" :infoBlock="blocksinfo" />
    <the-footer-info />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import TheBlockInfo from "../components/TheBlockInfo.vue";
import fakenews1 from "../assets/fakenews1.png";
import fakenews2 from "../assets/fakenews2.png";
import fakenews3 from "../assets/fakenews3.png";
import TheFooterInfo from "../components/TheFooterInfo.vue";
import BaseButton from "../components/BaseButton.vue";

export default defineComponent({
  components: { TheBlockInfo, TheFooterInfo, BaseButton },
  name: "IndexPage",

  data() {
    return {
      blocksinfo: [
        {
          textBlock:
            "Que son las noticias falsas? Como identificarlas? Informate de todo lo que necesitas saber sobre las noticias falsas.",
          imgBlock: fakenews1,
          route: 'aboutfakenews'
        },
        {
          textBlock:
            "Fuiste victima de una noticia falsa? Mira que puedes hacer para que no vuelva a pasar.",
          imgBlock: fakenews2,
          route:'quehago'
        },
        {
          textBlock:
            "Toma nuestro test gratuito. Descubre que tanto sabes sobre noticias falsas!",
          imgBlock: fakenews3,
          route:'fakenewstest'
        },
      ],
    };
  },
});
</script>

<style>
.main-responsive {
  margin-bottom: 20px;
}

.main-content {
  margin:10%
}

.main {
  padding-top: 120px;
}

.main-sm-down {
  background-image: url("../assets/bell.png");
  background-color: white;
  height: 19%;
  width: 100%;
  z-index: -1;
  background-size: cover;
  position: absolute;
}

.main-background {
  background-color: #4b3f96;
  opacity: 0.5;
  z-index: -1;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: absolute;
}

.bell-img {
  width: 370px;
  height: 355px;
  transform: rotate(-12.11deg);
}

.main-text {
  width: 891px;
  height: 386px;
  font-size: 70px;
}

.main-text-responsive {
  width: 891px;
  height: 500px;
  margin-top: 300px;
}

.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
