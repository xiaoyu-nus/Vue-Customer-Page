<script>
import PromotionCard from "./PromotionCard.vue";

export default {
  name: "PromotionList",
  props: {
    promotions: Array,
  },
  components: {
    PromotionCard,
  },
};
</script>

<template>
  <div class="flex-container">
    <div v-bind:key="promotion.title" v-for="promotion in promotions">
      <PromotionCard :promotion="promotion" />
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .flex-container {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
