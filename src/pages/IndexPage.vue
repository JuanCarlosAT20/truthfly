<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col-12 col-md-3">
        <img class="bell-img" alt="Bell" src="../assets/bell.png" />
      </div>
      <div class="col-12 col-md-9">
        <div>
          <span class="text-h1 main-text"
            >Puedes identificar la noticia falsa?</span
          >
        </div>
        <div>
          <span class="main-text_subtitle"
            >Toma nuestro test para ver que tanto sabes acerca de noticias
            falsas</span
          >
        </div>
      </div>
    </div>
    <the-block-info :infoBlock="blocksinfo" />
    <the-footer-info></the-footer-info>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import TheBlockInfo from "../components/TheBlockInfo.vue";
import fakenews1 from "../assets/fakenews1.png";
import fakenews2 from "../assets/fakenews2.png";
import fakenews3 from "../assets/fakenews3.png";
import TheFooterInfo from "src/components/TheFooterInfo.vue";

export default defineComponent({
  components: { TheBlockInfo, TheFooterInfo },
  name: "IndexPage",

  data() {
    return {
      blocksinfo: [
        {
          textBlock:
            "Que son las noticias falsas? Como identificarlas? Informate de todo lo que necesitas saber sobre las noticias falsas.",
          imgBlock: fakenews1,
        },
        {
          textBlock:
            "Fuiste victima de una noticia falsa? Mira que puedes hacer para que no vuelva a pasar.",
          imgBlock: fakenews2,
        },
        {
          textBlock:
            "Toma nuestro test gratuito. Descubre que tanto sabes sobre noticias falsas!",
          imgBlock: fakenews3,
        },
      ],
    };
  },
});
</script>

<style>
.bell-img {
  width: 370px;
  height: 355px;
  transform: rotate(-12.11deg);
}

.main-text {
  width: 891px;
  height: 386px;
}

.main-text-subtitle {
  width: 502px;
  height: 58px;
}
</style>
