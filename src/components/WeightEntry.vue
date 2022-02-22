<template>
  <div class="weight-entry">
    <input type="number" :value="amount">
    <button @click="$emit('incrementWeight')">Increase</button>
    <button @click="$emit('decrementWeight')">Decrease</button>
  </div>
</template>

<script>
export default {
  props: [
      'amount'
  ],
  emits: ['incrementWeight', 'decrementWeight']
}
</script>
