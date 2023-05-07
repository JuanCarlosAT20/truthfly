<template>
  <div>
    <q-btn @click="handleClick" class="question-block">
      <q-img :src="question.image" :alt="question.alt" />
      <h3>{{ question.text }}</h3>
      <p>
        <a :href="question.url">{{ question.credit }}</a>
        <a href="http://www.unsplash.com"> Unsplash</a>
      </p>
    </q-btn>
  </div>
</template>

<script>
export default {
  props: {
    question: {},
    setChosenAnswerItems: {},
  },
  methods: {
    handleClick() {
      this.setChosenAnswerItems((prevState) => [...prevState, this.question]);
    },
  },
};
</script>

<style scoped>
.question-block {
  width: 286px;
  height: auto;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: rgb(0, 0, 0, 0.07) 0 0 0 1px;
  text-align: center;
  margin-bottom: 15px;
  overflow: hidden;
}
</style>
