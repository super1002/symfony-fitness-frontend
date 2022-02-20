<template>
  <img alt="Vue logo" src="./assets/logo.png"><br>
  <WeightEntry
      v-for="(weight, index) in weights"
      :key="index"
      :amount="weight"
      @increment-weight="incrementWeight(index)"
      @decrement-weight="decrementWeight(index)"
  />
  <button @click="addWeightEntry">Add weight</button>
  <button @click="removeWeight">Remove weight</button>
  <EquipmentList />
</template>

<script>
import WeightEntry from './components/WeightEntry';
import EquipmentList from "./components/EquipmentList";

export default {
  name: 'App',
  data() {
    return {
      weights: [
          4, 4, 4, 4
      ]
    }
  },
  components: {
    WeightEntry,
    EquipmentList
  },
  methods: {
    addWeightEntry() {
      this.weights.push(Math.round(Math.random() * (50 - 20) + 20));
    },
    removeWeight() {
      this.weights.pop();
    },
    incrementWeight(index) {
      this.weights[index]++;
    },
    decrementWeight(index) {
      this.weights[index]--;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
