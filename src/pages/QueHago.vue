<template>
  <q-page>
    <div v-if="$q.screen.gt.sm" class="row">
      <div class="barra col-md-1"></div>
      <div class="col-md-6 column items-start justify-center q-ml-xl">
        <div class="headerBlock">
          <span
            >¿Qué hago?
          </span>
        </div>
        <div class="blockText" style="font-size: 20px">
          <span
            >Ante tanta información y desinformación, lo primordial para identificar una noticia falsa es verificar y confirmar la fuente.</span
          >
        </div>
      </div>
      <div class="col-md-5"><q-img src="../assets/fakenews7.png" /></div>
    </div>
    <div v-else class="row">
      <div class="col-12" ><q-img style="height:200px" src="../assets/fakenews7.png" /></div>
      <div class="barra-responsividad col-1"></div>
      <div class="col-9 column items-start justify-center q-ml-xl">
        <div :class="{'headerBlock-responsive-xs': $q.screen.lt.sm, 'headerBlock-responsive-sm': !$q.screen.lt.sm}">
         <span
            >¿Qué hago?
          </span>
        </div>
        <div class="blockText" style="font-size: 18px;">
          <span
            >Ante tanta información y desinformación, lo primordial para identificar una noticia falsa es verificar y confirmar la fuente.</span
          >
        </div>
      </div>
    </div>

    <div class="row" style="margin-top: 80px; text-align: justify;">
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
          <span align="left" style="font-weight: 400; font-size: 40px; margin-top: 5px;"
            >Toma en cuenta lo siguiente …</span
          >
        </div>
        <div>
          <span align="left" style="font-weight: 400; font-size: 40px; margin-top: 30px;"
            >Toma en cuenta lo siguiente …</span
          >
        </div> -->
        <div style="margin-top: 30px; margin-left: 10%; margin-right: 10%;">
          <span align="left" style="font-weight: 400; font-size: 40px;"
            >Toma en cuenta lo siguiente<br /></span
          >
          <span style="margin-top: 30px; font-size: 20px"
            >Si bien hay noticias falsas que suelen identificarse por su llamativo titular y por el uso de palabras coyunturales acompañadas de expresiones exageradas, inicialmente la acción más efectiva es confirmar las fuentes. Generalmente las fake news no dicen explícitamente de dónde viene la información. Ejemplos de fuente de información son las declaraciones verificables en una entrevista, investigaciones académicas, publicaciones, documentos u otros sitios web de instituciones, universidades o cualquier organismo que pueda ser referente en el tema principal del que hablan estas falsas noticias.</span
          >
          <div>
            <q-img size="70%" height="334" src="../assets/quehago1.jpg" style="margin-top: 30px; margin-bottom: 30px;" />
          </div>
          <div>
            <span style="margin-top: 30px; font-size: 20px"
              >Al confirmar una fuente se logra verificar datos como la autoría, fechas, opiniones y demás referencias que permiten validar lo que se interpreta de la situación. Otras herramientas útiles para este ejercicio de confirmación son:
              <br />
            </span>
          </div>
          <div style="margin-left: 20px; margin-top: 30px;">
            <span style="color: rgba(14, 6, 114, 1); font-size: 20px"
              >+
            </span>
            <span style="font-size: 20px"
              >Percatarse del medio de difusión: si este es replicado por mensajería instantánea, por las bases de datos de alguna institución o por una fuente global.
              <br />
            </span>
            <span style="color: rgba(14, 6, 114, 1); font-size: 20px"
              >+
            </span>
            <span style="font-size: 20px"
              >Leer la información completa y no solo el titular.
              <br />
            </span>
            <span style="color: rgba(14, 6, 114, 1); font-size: 20px"
              >+
            </span>
            <span style="font-size: 20px"
              >Basar la búsqueda de información en cuentas y medios verificados.
              <br />
            </span>
            <span style="color: rgba(14, 6, 114, 1); font-size: 20px"
              >+
            </span>
            <span style="font-size: 20px; font-size: 20px"
              >Cuestionar la veracidad de las fotografías y logos.
              <br />
            </span>
            <span style="color: rgba(14, 6, 114, 1); font-size: 20px"
              >+
            </span>
            <span style="font-size: 20px;"
              >Indagar por las cifras que se entregan en lo que leemos.
              <br />
            </span>
            <span style="color: rgba(14, 6, 114, 1); font-size: 20px"
              >+
            </span>
            <span style="font-size: 20px; font-size: 20px"
              >Dudar de calificativos exagerados en los titulares.
              <br />
            </span>
            <span style="color: rgba(14, 6, 114, 1); font-size: 20px"
              >+
            </span>
            <span style="font-size: 20px"
              >Adoptar una actitud reflexiva al momento de leer y compartir una noticia.
              <br />
            </span>
            <span style="color: rgba(14, 6, 114, 1); font-size: 20px"
              >+
            </span>
            <span style="font-size: 20px"
              >Dudar de la información en redes sociales que sea publicada a través de pauta digital pagada: si tiene la etiqueta contenido promocionado o anuncio, probablemente la información tiene un interés detrás que debería hacernos dudar de su veracidad.
              <br />
            </span>
          </div>
          <div>
            <q-img size="70%" height="334" src="../assets/consejos.png" style="margin-top: 30px; margin-bottom: 30px;" />
          </div>
          <div style="color: rgba(14, 6, 114, 1); font-weight: 600; margin-top: 30px; font-size: 20px">
            ¿Se puede denunciar información falsa?
          </div>
          <div style="margin-top: 30px; font-size: 20px">
            En México existe una plataforma llamada "Verificado" que se dedica a verificar la información que circula en redes sociales y medios digitales y a combatir la desinformación. Además, algunos medios de comunicación también cuentan con secciones dedicadas a la verificación de noticias falsas, como Animal Político, El Universal, y Reforma, entre otros.
          </div>
          <div style="margin-top: 30px; font-size: 20px">
            Otras opciones para denunciar noticias falsas incluyen contactar directamente al medio o persona que las publicó para pedir correcciones o aclaraciones, o reportarlas a través de las redes sociales o plataformas donde se compartieron. También puedes acudir a organismos como el Instituto Federal de Telecomunicaciones (IFT) o el Consejo Nacional para Prevenir la Discriminación (CONAPRED), si la noticia falsa incita al odio o la discriminación.
          </div>
          <div>
            <q-img size="70%" height="334" src="../assets/quehago2.png" style="margin-top: 30px; margin-bottom: 30px;"/>
          </div>
          <div style="color: rgba(14, 6, 114, 1); font-weight: 600; margin-top: 30px; font-size: 20px">
            Fuentes
          </div>
          <div
          style="
            background-color: rgba(14, 6, 114, 1);
            width: 100%;
            height: 8px;
          "
        ></div>
        <div style="margin-top: 30px; font-size: 20px">
            ¿Cómo detectar «fake news» en Colombia? (s. f.). UNICEF. https://www.unicef.org/colombia/casicaigo?fbclid=IwAR0nk9YpeItDihQaBNE_mjiekPCy2U7FrwzMom0y1Aq7jU7Z9RpSbfxfZfw
          </div>
        <div style="margin-top: 30px; font-size: 20px">
            ANUIES. (2019, Augusto 19). Asociación Nacional de Universidades e Instituciones de Educación Superior. Las fake news, eficaces por su contenido emocional - Tamburrino Widner, I. ¿Cómo formular la hipótesis de mi tesis? – Aprendizaje U. Chile. Aprendizaje. Recuperado el 20 de noviembre de https://aprendizaje.uchile.cl/recursos-para-leer-escribir-y-hablar-en-la-universidad/profundiza/profundiza-en-la-tesis/hipotesis/
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

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
  text-align: justify;
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



