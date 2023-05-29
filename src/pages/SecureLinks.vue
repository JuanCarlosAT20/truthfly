<template>
  <q-page>
    <div class="row">
      <div align="center" class="column justify-center white--text header">
        <div class="headerBlock">
          <span
            >Te recomendamos estas fuentes seguras para obtener la informacion
            que necesites.
          </span>
        </div>
        <div class="blockText" style="font-size: 20px; margin-bottom: 20px">
          <span
            >Las fuentes verificadas son una excelente herramienta para evitar
            la desfinformacion y las noticias falsas.</span
          >
        </div>
      </div>
      <div>
        <div
          v-for="link in links"
          :key="link.title"
          style="margin: 7% 15% 10% 25%"
        >
          <span style="font-size: 30px">{{ link.title }}</span>
          <div
            style="
              background-color: rgba(14, 6, 114, 1);
              width: 70px;
              height: 8px;
            "
          ></div>
          <div style="display: flex; justify-content: space-between">
            <div
              v-for="page in link.pages"
              :key="page.name"
              align="center"
              style="flex: 1; text-align: center"
            >
              <a
                :href="page.link"
                align="center"
                style="text-decoration: none; color: inherit"
              >
                <div align="row center">
                  <q-avatar style="margin-top: 20px" height="50px" width="50px">
                    <img :src="page.img" height="50px" width="50px" />
                  </q-avatar>
                </div>
                <span>{{ page.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import onu from "../assets/onu.png";
import cnn from "../assets/cnn.png";
import nyt from "../assets/nyt.png";
import ng from "../assets/ng.png";
import climatec from "../assets/climatec.png";
import ehn from "../assets/ehn.png";
import ft from "../assets/ft.png";
import cnbc from "../assets/cnbc.png";
import ps from "../assets/ps.png";
export default {
  data() {
    return {
      links: [
        {
          title: "Temas generales",
          pages: [
            {
              name: "La onu",
              link: "https://www.un.org/es/",
              img: onu,
            },
            {
              name: "CNN",
              link: "https://cnnespanol.cnn.com/",
              img: cnn,
            },
            {
              name: "The New York Times",
              link: "https://www.nytimes.com/",
              img: nyt,
            },
          ],
        },
        {
          title: "Medio ambiente",
          pages: [
            {
              name: "National Geographic",
              link: "https://www.nationalgeographic.com/",
              img: ng,
            },
            {
              name: "Climate Central",
              link: "https://www.climatecentral.org/",
              img: climatec,
            },
            {
              name: "Environmental Health News",
              link: "https://www.ehn.org/",
              img: ehn,
            },
          ],
        },
        {
          title: "Economía",
          pages: [
            {
              name: "The Financial Times",
              link: "https://www.ft.com/",
              img: ft,
            },
            {
              name: "CNBC",
              link: "https://www.cnbc.com/",
              img: cnbc,
            },
            {
              name: "Project Syndicate",
              link: "https://www.project-syndicate.org/",
              img: ps,
            },
          ],
        },
      ],
    };
  },
};
</script>
<style scoped>
.header {
  background-color: rgba(14, 6, 114, 1);
  color: white;
}
.headerBlock {
  font-weight: 400;
  font-size: 40px;
  margin: 5% 5% 0% 5%;
}
</style>
