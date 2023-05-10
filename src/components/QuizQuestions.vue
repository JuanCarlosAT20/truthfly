<template>
  <div>
    <h1>{{ preguntas[preguntaActual].pregunta }}</h1>
    <div
      v-for="(opcion, index) in preguntas[preguntaActual].opciones"
      :key="index"
    >
      <button @click="seleccionarRespuesta(index)">
        <q-img :src="opcion.imagen" alt="imagen"></q-img>
        {{ opcion.texto }}
      </button>
    </div>
    <q-btn
      v-if="!esUltimaPregunta"
      @click="siguientePregunta"
      label="Siguiente"
    />
    <div v-else>
      <q-btn
        v-if="!mostrarPuntaje"
        @click="mostrarResultados"
        label="Mostrar resultados"
      />
      <div v-else>
        <h2>¡Terminaste el quiz!</h2>
        <p>Tu puntaje final es: {{ puntaje }} / {{ preguntas.length }}</p>
        <p>Respuestas correctas:</p>
        <p>Respuestas correctas:</p>
        <ul>
          <li v-for="(pregunta, index) in preguntas" :key="index">
            {{ pregunta.pregunta }}:
            <ul>
              <li
                v-for="(opcion, i) in pregunta.opciones"
                :key="i"
                :class="[
                  { 'respuesta-seleccionada': respuestas[index] === i },
                  {
                    'respuesta-correcta':
                      pregunta.respuestasCorrectas.includes(i) &&
                      respuestas[index] === i,
                  },
                  {
                    'respuesta-incorrecta':
                      !pregunta.respuestasCorrectas.includes(i) &&
                      respuestas[index] === i,
                  },
                ]"
              >
                {{ pregunta.respuestasCorrectas.includes(i) ? "✔️" : "❌" }}
                {{ opcion.texto }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import preguntas from "../../db.json";

export default {
  data() {
    return {
      preguntas: preguntas.preguntas,
      preguntaActual: 0,
      respuestas: [],
      respuestasCorrectas: preguntas.preguntas.map(
        (p) => p.respuestasCorrectas
      ),
      puntaje: 0,
      mostrarPuntaje: false,
    };
  },
  computed: {
    esUltimaPregunta() {
      return this.preguntaActual === this.preguntas.length - 1;
    },
  },
  methods: {
    seleccionarRespuesta(index) {
      this.respuestas[this.preguntaActual] = index;
    },
    siguientePregunta() {
      const respuestasCorrectas = this.respuestasCorrectas[this.preguntaActual];
      const respuestaUsuario = this.respuestas[this.preguntaActual];

      if (respuestasCorrectas.includes(respuestaUsuario)) {
        this.puntaje++;
      }

      this.preguntaActual++;
    },
    mostrarResultados() {
      if (this.respuestas[this.preguntaActual] !== undefined) {
        const respuestasCorrectas =
          this.respuestasCorrectas[this.preguntaActual];
        const respuestaUsuario = this.respuestas[this.preguntaActual];
        if (respuestasCorrectas.includes(respuestaUsuario)) {
          this.puntaje++;
        }
      }
      this.mostrarPuntaje = true;
    },
  },
};
</script>
<style scoped>
.respuesta-seleccionada {
  background-color: #ffcc00;
}

.respuesta-correcta {
  background-color: #00cc00;
}

.respuesta-incorrecta {
  background-color: #ff3333;
}
</style>
