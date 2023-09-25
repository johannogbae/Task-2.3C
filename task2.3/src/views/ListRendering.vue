<template>
  <div>
    <h2>List Rendering Concepts</h2>

    <!-- 6.a. v-for with an Object -->
    <h3>a. v-for with an Object</h3>
    <ul>
      <li v-for="(value, key) in myObject" :key="key">
        {{ key }}: {{ value }}
      </li>
    </ul>

    <!-- 6.b. v-for with a Range -->
    <h3>b. v-for with a Range</h3>
    <span v-for="n in 10" :key="n">{{ n }}</span>

    <!-- 6.c. v-for on <template> -->
    <h3>c. v-for on</h3>
    <ul>
      <template v-for="item in items">
        <li>{{ item.msg }}</li>
        <li class="divider" role="presentation"></li>
      </template>
    </ul>

    <!-- 6.d. v-for with v-if -->
    <h3>d. v-for with v-if</h3>
    <ul>
      <template v-for="todo in todos">
        <li v-if="!todo.isComplete">{{ todo.name }}</li>
      </template>
    </ul>

    <!-- 6.e. v-for with a Component -->
    <h3>e. v-for with a Component</h3>
    <MyComponent
      v-for="(item, index) in items"
      :item="item"
      :index="index"
      :key="item.id"
    />
  </div>
</template>

<script>
import MyComponent from '../components/MyComponent.vue'; // Import your component here

export default {
  components: {
    MyComponent,
  },
  data() {
    return {
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10',
      },
      items: [
        { msg: 'Item 1' },
        { msg: 'Item 2' },
        { msg: 'Item 3' },
        { msg: 'Item 4' },
      ],
      todos: [
        { name: 'Task 1', isComplete: false },
        { name: 'Task 2', isComplete: true },
        { name: 'Task 3', isComplete: false },
      ],
    };
  },
};
</script>
