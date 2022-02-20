<template>
  <div class="weight-entry">
    <input type="number" :value="amount">
    <button @click="incrementWeight">Increase</button>
    <button @click="decrementWeight">Decrease</button>
  </div>
</template>

<script>
export default {
  props: [
      'amount'
  ],
  emits: [
      'increment-weight',
      'decrement-weight',
  ],
  methods: {
    incrementWeight() {
      console.log('Incrementing weight...');
      this.$emit('increment-weight');
    },
    decrementWeight() {
      // this.amount--;
      console.log('Decrementing weight...');
      this.$emit('decrement-weight');
    }
  }
}
</script>
