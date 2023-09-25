<template>
  <h3>Events Component</h3>
  <button @click="emitEvent">Click me</button>
</template>

<script>
import { defineEmits } from 'vue';

const emit = defineEmits(['myEvent']);

export default {
  methods: {
    emitEvent() {
      emit('myEvent', 'Hello from Events');
    },
  },
};
</script>
