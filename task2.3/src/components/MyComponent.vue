<template>
    <div>
      <p>{{ item.msg }}</p>
      <p>Index: {{ index }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: Object, // Ensure it matches your data structure
      index: Number,
    },
  };
  </script>
  