<template>
  <div class="blockInfo" :style="{'flex-wrap': $q.screen.gt.sm ? '' : 'wrap'}">
    <q-card
      flat
      class="blockInfo__card"
      v-for="(info, index) in infoBlock"
      :key="index"
    >
      <q-card-section class="blockInfo__description" style="font-size: 20px">
        <span>{{ info.textBlock }}</span>
      </q-card-section>
      <q-img class="blockInfo__img" :style="{'height': $q.screen.gt.xs ? '250px' : '150'}" :src="info.imgBlock"></q-img>

      <q-card-actions align="center">
        <base-button :route="info.route" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";

export default {
  components: { BaseButton },
  props: {
    infoBlock: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.blockInfo {
  width: 100rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.blockInfo__card {
  width: 40%;
  max-width: 230px;
  margin: 0 3.5rem;
  margin-bottom: 3rem;
}

.blockInfo__description {
  width: 100%;
  height: 100px;
}
.blockInfo__img {
  width: 100%;
  align-items: center;
  
}

</style>


