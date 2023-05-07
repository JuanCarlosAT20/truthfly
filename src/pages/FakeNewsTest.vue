<template>
  <q-page>
    <div class="row">
      <div style="max-width: 901px" class="container">
        <div class="q-mt-xl q-ml-xl">
          <div
            style="
              background-color: rgba(14, 6, 114, 1);
              width: 70px;
              height: 8px;
            "
          ></div>
          <div class="headerBlock">
            <!-- AQUI EMPIEZA TEST -->
            <title-question
              :title="quiz?.title"
              :subtitle="quiz?.subtitle"
            ></title-question>
            <div v-for="contentItem in quiz?.content" :key="contentItem.id">
              <questions-block
                :quizItem="contentItem"
                :setChosenAnswerItems="setChosenAnswerItems"
              />
            </div>
            <!-- AQUI TERMINA TEST -->
            <span>Test de las noticias falsas</span>
          </div>
          <div>
            <span
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Pariatur nesciunt provident sed at autem debitis, temporibus iusto
              vero in cumque laborum dicta explicabo! Explicabo, repudiandae
              maxime libero esse error deleniti!</span
            >
          </div>
        </div>
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card flat bordered>
            <q-card-section>
              <div>
                <span style="color: rgba(14, 6, 114, 1)"
                  >1.¿Cual consideras que es una pagina de noticias
                  sospechosa?</span
                >
              </div>
            </q-card-section>
            <q-card-section>
              <div
                style="
                  width: 798px;
                  height: 4px;
                  background-color: rgba(233, 239, 253, 1);
                "
              ></div>
            </q-card-section>
            <q-card-actions>
              <div style="margin-left: 100px">
                <q-img class="selects" src="../assets/rectangle.png"></q-img>
                <q-img class="selects" src="../assets/rectangle.png"></q-img>
                <q-img class="selects" src="../assets/rectangle.png"></q-img>
                <q-img class="selects" src="../assets/rectangle.png"></q-img>
              </div>
            </q-card-actions>

            <q-card-section>
              <div class="answerSection">
                <div class="q-ml-md q-mt-md answerSection_text">
                  <div>
                    <span>Correcto!</span>
                  </div>
                  <div class="q-mt-md">
                    <span
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </span>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import TitleQuestion from "src/components/TitleQuestion.vue";
import QuestionsBlock from "src/components/QuestionsBlock.vue";
export default {
  components: {
    TitleQuestion,
    QuestionsBlock,
  },
  async created() {
    try {
      const response = await fetch("http://localhost:8000/quiz");
      const json = await response.json();
      this.setQuiz(json);
      console.log(this.chosenAnswerItems);
    } catch (error) {
      console.log(error);
    }
  },
  setup() {
    const quiz = ref(false);
    const chosenAnswerItems = ref([]);

    function setChosenAnswerItems(value) {
      chosenAnswerItems.value = value;
    }
    function setQuiz(value) {
      quiz.value = value;
    }
    return {
      quiz,
      setQuiz,
      chosenAnswerItems,
      setChosenAnswerItems,
      expanded: ref(false),
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  methods: {
    fetchData() {},
    useEffect() {},
  },
};
</script>

<style scoped>
.container {
  margin: auto;
}

.q-card {
  width: 990px;
  height: 1644px;
}

.headerBlock {
  color: rgba(14, 6, 114, 1);
  font-weight: 400;
  font-size: 48px;
}

.selects {
  width: 231px;
  height: 237px;
  margin: 148px 46px;
}

.answerSection {
  width: 647px;
  height: 269px;
  margin-left: 100px;

  border: 5px solid #67fe76;
  border-radius: 20px;
}

.answerSection_text {
  width: 568px;
  height: 134px;

  font-weight: 400;
  font-size: 24px;
}
</style>
