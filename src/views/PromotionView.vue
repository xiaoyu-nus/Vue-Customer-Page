<script>
import PromotionList from "@/components/PromotionList.vue";

export default {
  name: "PromotionView",
  components: {
    PromotionList,
  },
  props: {
    promotions: Array,
  },
};
</script>

<template>
  <main>
    <PromotionList :promotions="promotions" />
  </main>
</template>
