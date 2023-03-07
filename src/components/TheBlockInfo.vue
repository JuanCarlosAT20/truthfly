<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      flat
      class="block-card"
      v-for="(info, index) in infoBlock"
      :key="index"
    >
      <q-card-section>
        <span>{{ info.textBlock }}</span>
      </q-card-section>

      <q-img :src="info.imgBlock"></q-img>
      <div>
        <q-card-actions align="center">
          <base-button />
        </q-card-actions>
      </div>
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
      required: true,
    },
  },
};
</script>

<style>
.block-card {
  width: 100%;
  max-width: 250px;
}
</style>
