<script>
import { stringifyQuery } from "vue-router";
export default {
  name: "PromotionCard",
  props: {
    promotion: Object,
  },
  computed: {
    quantitySize() {
      var str = this.promotion.quantity + "";
      if (str.length <= 0) {
        return "2em";
      }
      return 1.6 - 0.2 * (str.length - 1) + "em";
    },
    capitalize() {
      return (
        this.promotion.type.charAt(0).toUpperCase() +
        this.promotion.type.substring(1)
      );
    },
  },
};
</script>

<template>
  <div :class="'clickable wrapper ' + promotion.type">
    <div class="text-wrapper">
      <h1>{{ promotion.title }}</h1>
      <h3 v-show="promotion.type == 'discount'">
        {{ capitalize }}: {{ promotion.discount * 100 }}%
      </h3>
      <h3 v-show="promotion.type == 'redeem'">
        {{ capitalize }}
      </h3>
      <div class="space-sm"></div>
      <p class="small grey">March 25th 2022 12:15PM</p>
    </div>
    <div class="quantity-wrapper">
      <p :style="{ fontSize: quantitySize }" id="quantity">
        {{ promotion.quantity }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  border-radius: 1em;
  background-color: #f6f9fa;
  box-shadow: rgba(85, 125, 188, 0.2) 0px 1px 6px 0px;
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  margin: 1em 1em;
}

h1 {
  font-weight: 600;
  font-size: 1.6em;
}

h3 {
  font-weight: 500;
  font-size: 1.1em;
}

.small {
  font-size: 0.8em;
}

.grey {
  color: #9a9a9a;
}

.space-sm {
  height: 1em;
}

.quantity-wrapper {
  float: right;
  background-color: white;
  border-radius: 10em;
  height: 3em;
  width: 3em;
  text-align: center;
  overflow: hidden;
  line-height: 3em;
  border: 1px solid #557dbc;
}

#quantity {
  font-weight: 600;
  color: #557dbc;
}

.text-wrapper {
  float: left;
}

.redeem {
  background-color: #e9f1ee;
}

.discount {
  background-color: #c2d1e2;
}

.discount:hover {
  background-color: #a0b8d3;
  box-shadow: rgba(85, 125, 188, 0.4) 0px 1px 6px 0px;
  transition: 400ms;
}

.redeem:hover {
  background-color: #cce4db;
  box-shadow: rgba(85, 125, 188, 0.4) 0px 1px 6px 0px;
  transition: 400ms;
}

@media (min-width: 1024px) {
  .wrapper {
    width: 90%;
    min-width: 280px;
  }
}
</style>
