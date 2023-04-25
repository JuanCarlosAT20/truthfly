<template>
  <div v-if="text !== ''" class="q-pd-md 1-gutter-sm">
    <q-btn
      :to="primaryRoute"
      align="center"
      outline
      rounded
      :style="{ color: !isPrimary ? 'rgba(233, 95, 90, 1)' : 'white' }"
      >{{ text }}</q-btn
    >
  </div>
  <div v-else class="q-pd-md 1-gutter-sm">
    <q-btn
      :to="route"
      align="center"
      outline
      rounded
      :style="{ color: !isPrimary ? 'rgba(233, 95, 90, 1)' : 'white' }"
      >Saber más</q-btn
    >
  </div>
</template>
<script>
export default {
  props: {
    isPrimary: {
      type: Boolean,
      required: false,
      default: false,
    },
    route: {
      type: String,
    },
    primaryRoute:{
      type: String,
    },
    text: {
      type: String,
      required: false,
      default: "",
    },
  },
  created() {
    console.log(this.route);
    console.log(this.primaryRoute);
  },
};
</script>
<style scoped>
.q-btn {
  color: rgba(233, 95, 90, 1);
}
</style>
