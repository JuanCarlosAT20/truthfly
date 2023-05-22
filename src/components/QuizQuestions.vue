<template>
  <div class="quiz-container">
    <form v-if="!testIniciado" @submit="comenzarTest" class="start-form">
      <label>
        Correo electrónico:
        <input type="email" v-model="correo" required />
      </label>
      <button type="submit" class="start-button">Comenzar el test</button>
    </form>
    <div v-else-if="!preguntasRespondidas">
      <form @submit="guardarDatos" class="info-form">
        <label>
          Edad:
          <input type="number" v-model="edad" required />
        </label>
        <label>
          Género:
          <select v-model="genero" required>
            <option value="">Seleccionar</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </label>
        <button type="submit" class="start-button">Guardar</button>
      </form>
    </div>
    <div v-else>
      <h1 class="question">{{ preguntas[preguntaActual].pregunta }}</h1>
      <div
        v-for="(opcion, index) in preguntas[preguntaActual].opciones"
        :key="index"
        class="option-container"
      >
        <button
          @click="seleccionarRespuesta(index)"
          :disabled="
            respuestas[preguntaActual] !== undefined &&
            respuestas[preguntaActual] !== index
          "
          class="option-button"
        >
          <q-img :src="opcion.imagen" alt="imagen" class="option-image"></q-img>
          <span class="option-text">{{ opcion.texto }}</span>
        </button>
      </div>
      <q-btn
        v-if="!esUltimaPregunta"
        @click="siguientePregunta"
        label="Siguiente"
        class="next-button"
      />
      <div v-else>
        <q-btn
          v-if="!mostrarPuntaje"
          @click="mostrarResultados"
          label="Mostrar resultados"
          class="show-results-button"
        />
        <div v-else>
          <h2 class="quiz-completed">¡Terminaste el quiz!</h2>
          <p class="final-score">
            Tu puntaje final es: {{ puntaje }} / {{ preguntas.length }}
          </p>
          <p class="correct-answers">Respuestas correctas:</p>
          <ul class="answers-list">
            <li
              v-for="(pregunta, index) in preguntas"
              :key="index"
              class="question-answer"
            >
              {{ pregunta.pregunta }}:
              <ul>
                <li
                  v-for="(opcion, i) in pregunta.opciones"
                  :key="i"
                  :class="[
                    { 'selected-answer': respuestas[index] === i },
                    {
                      'correct-answer':
                        pregunta.respuestasCorrectas.includes(i) &&
                        respuestas[index] === i,
                    },
                    {
                      'incorrect-answer':
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
          <q-btn
            v-if="mostrarPuntaje"
            @click="reiniciarTest"
            label="Realizar el test nuevamente"
            class="restart-button"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import preguntas from "../../db.json";
import { db } from "../boot/firebase";

export default {
  data() {
    return {
      correo: "",
      edad: 0,
      genero: "",
      preguntas: preguntas.preguntas,
      preguntaActual: 0,
      respuestas: [],
      respuestasCorrectas: preguntas.preguntas.map(
        (p) => p.respuestasCorrectas
      ),
      puntaje: 0,
      mostrarPuntaje: false,
      testIniciado: false,
      preguntasRespondidas: false,
    };
  },
  computed: {
    esUltimaPregunta() {
      return this.preguntaActual === this.preguntas.length - 1;
    },
  },
  methods: {
    comenzarTest(event) {
      event.preventDefault();
      this.testIniciado = true;
    },
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

      const respuestasEnviadas = this.preguntas.map((pregunta, index) => ({
        pregunta: pregunta.pregunta,
        respuestaSeleccionada:
          this.respuestas[index] !== undefined
            ? pregunta.opciones[this.respuestas[index]].texto
            : "Sin respuesta",
      }));

      db.collection("respuestas")
        .add({
          respuestas: this.respuestas,
          puntaje: this.puntaje,
          correo: this.correo,
          edad: this.edad,
          genero: this.genero,
          respuestasEnviadas: respuestasEnviadas,
        })
        .then((docRef) => {
          console.log("Respuestas guardadas en Firebase con ID:", docRef.id);
        })
        .catch((error) => {
          console.error("Error al guardar las respuestas en Firebase:", error);
        });
    },
    reiniciarTest() {
      this.correo = "";
      this.edad = 0;
      this.genero = "";
      this.preguntaActual = 0;
      this.respuestas = [];
      this.puntaje = 0;
      this.mostrarPuntaje = false;
      this.testIniciado = false;
      this.preguntasRespondidas = false;
    },
    guardarDatos(event) {
      event.preventDefault();
      this.preguntasRespondidas = true;
    },
  },
};
</script>
<style scoped>
.quiz-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.start-form {
  text-align: center;
}

.start-button {
  display: block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.question {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.2; /* Ajusta el valor según tus preferencias */
}

.option-container {
  margin-bottom: 10px;
}

.option-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.option-button:hover {
  background-color: #e0e0e0;
}

.option-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  object-fit: cover;
}

.option-text {
  flex-grow: 1;
}

.next-button {
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.show-results-button {
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.quiz-completed {
  margin-top: 20px;
  margin-bottom: 10px;
}

.final-score {
  margin-bottom: 10px;
}

.correct-answers {
  font-weight: bold;
}

.answers-list {
  margin-top: 10px;
  margin-bottom: 20px;
  list-style-type: none;
}

.question-answer {
  margin-bottom: 10px;
}

.selected-answer {
  background-color: #ffcc00;
}

.correct-answer {
  background-color: #00cc00;
}

.incorrect-answer {
  background-color: #ff3333;
}

.restart-button {
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
