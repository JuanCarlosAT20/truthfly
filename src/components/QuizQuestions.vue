<template>
  <div class="quiz-container">
    <form v-if="!testIniciado" @submit="comenzarTest">
      <label>
        Correo electrónico:
        <input type="email" v-model="correo" required />
      </label>
      <q-btn type="submit" outline rounded class="start-button right-align">Comenzar el test</q-btn>
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
        <q-btn type="submit" outline rounded class="start-button right-align">Guardar</q-btn>
      </form>
    </div>
    <div v-else>
      <div v-if="!mostrarPuntaje">
        <h1 class="question">{{ preguntas[preguntaActual].pregunta }}</h1>
      <div
        class="container"
            style="
              background-color: rgba(233, 239, 253, 1);
              height: 2px;
            "
      ></div>

      <div class="option-container">
        <div v-for="(opcion, index) in preguntas[preguntaActual].opciones" :key="'option-' + index">
          <template v-if="opcion.imagen===''">
            <div class="grid-item">
              <q-btn
              outline
              rounded
              align="center"
              style="color: rgba(14, 6, 114, 1); height: 250px; width: 250px; justify-content: space-between"
              @click="seleccionarRespuesta(index)"
              :disabled="
                respuestas[preguntaActual] !== undefined &&
                respuestas[preguntaActual] !== index
              "
              class="option-button right-align"
            >
              <span class="option-text">{{ opcion.texto }}</span>
            </q-btn>
            </div>
          </template>
          <template v-else>
          <div class="grid-item">
            <q-btn
              outline
              rounded
              align="center"
              style="color: rgba(14, 6, 114, 1); height: 250px; width: 250px; justify-content: space-between"
              @click="seleccionarRespuesta(index)"
              :disabled="
                respuestas[preguntaActual] !== undefined &&
                respuestas[preguntaActual] !== index
              "
              class="option-button right-align"
            >
              <q-img
                v-if="opcion.imagen"
                :src="opcion.imagen"
                alt="imagen"
                class="option-image"
                style="height: 200px; width: 200px"
              ></q-img>
              <span class="option-text">{{ opcion.texto }}</span>
            </q-btn>
          </div>
        </template>
        </div>
      </div>
      <q-btn
        v-if="!esUltimaPregunta"
        @click="siguientePregunta"
        label="Siguiente"
        outline
        rounded
        class="next-button right-align"
      />
      <q-btn
          v-if="!mostrarPuntaje && esUltimaPregunta"
          @click="mostrarResultados"
          label="Mostrar resultados"
          outline 
          rounded
          class="show-results-button right-align"
        />
      </div>
      <div v-else>
          <h5 class="quiz-completed">¡Terminaste el quiz!</h5>
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
            outline 
            rounded
            class="restart-button right-align"
          />
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
  width:100%;
  margin: 0 auto;
  padding: 5%;
  font-family: Arial, sans-serif;
}

.container{
 margin-bottom: 20px;
}

.start-form {
  text-align: center;
  width:100%;
}

.start-button {
  text-transform:none;
  display: flex;
  margin-top: 20px;
  padding: 10px 10px;
  color: rgba(233, 95, 90, 1);
  cursor: pointer;
  font-size: 14px;
}

.question {
  font-size: 18px;
  font-weight: bold;
  line-height: 1.2; /* Ajusta el valor según tus preferencias */
}

.option-container {
  margin-bottom: 10px;
}

.option-button {
  text-transform:none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  background-color: rgba(14, 6, 114, 1);
  border: 1px solid rgba(14, 6, 114, 1);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 14px;
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
  font-size: 16px;
}

.next-button {
  text-transform:none;
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  color: rgba(233, 95, 90, 1);
  cursor: pointer;
  font-size: 14px;
}

.show-results-button {
  text-transform:none;
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  color: rgba(233, 95, 90, 1);
  cursor: pointer;
  font-size: 14px;
}

.quiz-completed {
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
  text-transform:none;
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  color: rgba(233, 95, 90, 1);
  cursor: pointer;
  font-size: 14px;
}
.right-align {
  margin-left: auto; /* Alinear a la derecha */
}
.option-container {
  display: flex;
  flex-wrap: wrap;
}

.option-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

.grid-item {
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.clearfix {
  clear: both;
}
</style>
