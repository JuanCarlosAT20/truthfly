<template>
  <div class="blockInfo">
    <q-card
      flat
      class="blockInfo__card"
      v-for="(info, index) in infoBlock"
      :key="index"
    >
      <q-card-section class="blockInfo__description">
        <span>{{ info.textBlock }}</span>
      </q-card-section>
      <q-img class="blockInfo__img" :src="info.imgBlock"></q-img>

      <q-card-actions align="center">
        <base-button />
      </q-card-actions>
    </q-card>
  </div>
</template>

<style scoped>
.blockInfo {
  width: 100rem;
  display: flex;
  justify-content: center;
}

.blockInfo__card {
  max-width: 230px;
  margin: 0 3.5rem;
}
.blockInfo__description {
  width: 100%;
}
.blockInfo__img {
  width: 100%;
}
</style>

<script>
import BaseButton from "../components/BaseButton.vue";

export default {
  components: { BaseButton },
  props: {
    infoBlock: {
      type: Array,
      required: true,
    },
  },
};
</script>


