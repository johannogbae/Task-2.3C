<template>
  <div>
    <h3>Props Component</h3>
    <h4>{{ title }}</h4>
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  content: String,
});
</script>
