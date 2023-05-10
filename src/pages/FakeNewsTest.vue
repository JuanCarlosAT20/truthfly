<template>
  <q-page>
    <div>
      <!-- AQUI EMPIEZA TEST -->
      <quiz-questions />
      <!-- AQUI TERMINA TEST -->
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import QuizQuestions from "src/components/QuizQuestions.vue";

export default {
  components: { QuizQuestions },
  data() {
    return {};
  },
  async created() {
    try {
      const response = await fetch("http://localhost:8000/quiz");
      const json = await response.json();
      this.setQuiz(json);
    } catch (error) {
      console.log(error);
    }
    console.log(this.unansweredQuestionIds);
  },
  setup() {
    const quiz = ref(false);
    const chosenAnswerItems = ref([]);
    const unansweredQuestionIds = ref([]);

    function setUnansweredQuestionIds(value) {
      unansweredQuestionIds.value = value;
    }

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
      unansweredQuestionIds,
      setUnansweredQuestionIds,
      expanded: ref(false),
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  methods: {},
  mounted() {
    const unanserredIds =
      this.quiz && this.quiz.content
        ? this.quiz.content.map(({ id }) => id)
        : [];
    this.setUnansweredQuestionIds(unanserredIds);
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
