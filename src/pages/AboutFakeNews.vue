<template>
  <q-page>
    <div v-if="$q.screen.gt.sm" class="row">
      <div class="barra col-md-1"></div>
      <div class="col-md-6 column items-start justify-center q-ml-xl">
        <div class="headerBlock">
          <span
            >Sobre <br />
            Noticias Falsas</span
          >
        </div>
        <div class="blockText" style="font-size: 20px">
          <span
            >Las noticias falsas, también conocidas como fake news, son anuncios sensacionalistas de aparente corte periodístico con datos e imágenes falsas y fuera de contexto que se respaldan por la saturación de información y contenido viral para lograr obtener atención.</span
          >
        </div>
      </div>
      <div class="col-md-5" align="center"><q-img src="../assets/fakenews5.png" /></div>
    </div>
    <div v-else class="row">
      <div class="col-12" ><q-img style="height:200px" src="../assets/fakenews5.png" /></div>
      <div class="barra-responsividad col-1"></div>
      <div class="col-10 column items-start justify-center q-ml-xl">
        <div :class="{'headerBlock-responsive-xs': $q.screen.lt.sm, 'headerBlock-responsive-sm': !$q.screen.lt.sm}">
          <span>Sobre<br />Noticias Falsas</span>
        </div>
        <div class="blockText" style="font-size: 18px;">
          <span
            >Las noticias falsas, también conocidas como fake news, son anuncios sensacionalistas de aparente corte periodístico con datos e imágenes falsas y fuera de contexto que se respaldan por la saturación de información y contenido viral para lograr obtener atención.</span
          >
        </div>
      </div>
    </div>

    <div class="row" style="margin-top: 80px">
      <div style="max-width: 901px;" class="container">
        <div
          style="
            background-color: rgba(14, 6, 114, 1);
            width: 70px;
            height: 8px;
            margin-left: 10%;
          "
        ></div>
        <!-- <div>
          <span align="left" style="font-weight: 400; font-size: 48px"
            >¿Aprendiste algo nuevo?</span
          >
        </div> -->
        <div style="margin-top: 30px; margin-left: 10%; margin-right: 10%; font-size: 20px; ">
          <span
            >El fenómeno de las ‘fake news’ afecta cada vez con mayor frecuencia a los usuarios de internet. El objetivo de este tipo de noticias se centra en lograr convencer a una gran masa sobre información que no es real, basándose en motivos concretos como tocar emociones, alinearse con la coyuntura, desprestigiar campañas ya sean electorales, sociales o de interés común. Otro ejemplo también es la divulgación de información financiera sin corroborar para causar incertidumbre y pánico para las finanzas personales de los ciudadanos.</span
          >
          <div>
            <span
              >Suelen ser difundidas a través de redes sociales como Facebook, Twitter o Whatsapp como contenido viral que luego de ser compartido múltiples veces se pierde rastro de su proveniencia. A menudo también se encuentran no solo en redes sociales sino en sitios web, en secciones con nombres llamativas como, por ejemplo: “Últimas noticias”, “Este video te cambiará la vida” o “Lo que no puedes dejar de saber”. 
            </span>
          </div>
          <div>
            <q-img size="70%" height="334" src="../assets/sobrenoticias1.png" style="margin-top: 30px; margin-bottom: 30px;"/>
          </div>
          <div>
            Es por ello, que es de suma importancia analizar el origen de las fake news y poner en cuestión este tema que involucra la forma de consumir datos. Este tipo de noticias generalmente se aprovechan de la inmediatez que ofrecen las redes sociales y de la facilidad que brindan para compartir cualquier contenido rápidamente de una manera muy emocional.
          </div>
          <div style="color: rgba(14, 6, 114, 1); font-weight: 600; margin-top: 30px">
            ¿Cuáles son las consecuencias de las noticias falsas?
          </div>
          <div>
            La mayor consecuencia de las fake news es la desinformación masiva que se genera en la población. Una comunidad desinformada y con percepciones erradas acerca de un tema puede derivar problemáticas sociales y culturales como la intolerancia, la propagación de discursos de odio y la toma de decisiones sin información veraz.  
          </div>
          <div style="color: rgba(14, 6, 114, 1); font-weight: 600; margin-top: 30px">
            ¿Qué genera una noticia falsa y por qué están tan latentes las fake news en las redes sociales?
          </div>
          <div>
            Gran parte de la población con acceso a internet basa su fuente de información y comprensión de la cotidianidad en datos extraídos por redes sociales o por contenido viral. Este tipo de consumo de información ha dado pie a la producción y diseminación de información falsa o fake news.
          </div>
          <div>
            Las redes sociales son plataformas que posibilitan que cualquier usuario pueda cumplir un rol de generador y consumidor de contenido, lo que abre un espectro amplio para promover información engañosa o diseñada para este fin, donde una noticia no verificada puede replicarse a gran escala en poco tiempo.
          </div>
          <div>
            De acuerdo con el Ministerio de Tecnologías de la Información y las Comunicaciones, MinTic, las noticias falsas o fake news de esta clase generan confusión y caos causando un peligroso círculo de desinformación tanto en casos nacionales como mundiales.
          </div>
          <div>
            <q-img size="70%" height="334" src="../assets/sobrenoticias2.jpg" style="margin-top: 30px; margin-bottom: 30px;"/>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "AboutFakeNews",
};
</script>

<style scoped>
.barra {
  background: rgba(14, 6, 114, 1);
  height: 564px;
  width: 3%;
}

.barra-responsividad{
  background: rgba(14, 6, 114, 1);
  height: 400px;
  width: 6%;
}

.blockText {
  max-width: 599px;
}

.blockText span {
  word-wrap: break-word;
}

.headerBlock {
  font-weight: 400;
  font-size: 64px;
}

.headerBlock-responsive-sm{
  font-weight: 400;
  font-size: 60px;
}

.headerBlock-responsive-xs{
  font-weight: 400;
  font-size: 250%;
}

.container {
  margin: auto;
  margin-top: 30px;
}
</style>

