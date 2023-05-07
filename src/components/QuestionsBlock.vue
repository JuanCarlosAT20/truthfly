<template>
  <div>
    <h2 :id="quizItem.id">{{ quizItem.text }}</h2>
    <div class="questions-container">
      <question-block
        v-for="(question, _index) in quizItem.questions"
        :key="_index"
        :question="question"
        :setChosenAnswerItems="setChosenAnswerItems"
      />
    </div>
  </div>
</template>

<script>
import QuestionBlock from "./QuestionBlock.vue";
export default {
  components: { QuestionBlock },
  name: "QuestionsBlock",
  props: {
    quizItem: {},
    setChosenAnswerItems: {},
  },
};
</script>

<style>
.question-container {
  margin: 16px 0 23px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
