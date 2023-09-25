<template>
  <div class="task-list">
    <!-- 1. Template Syntax -->
    <h1>Task List</h1>

    <!-- 1a. Text Interpolation -->
    <p>Add all your tasks below! {{ rawHtml }}</p>

    <!-- 1b. Raw HTML [v-html] -->
    <p>_________________________ <span v-html="rawHtml"></span></p>

    <!-- 1a. Text Interpolation -->
    <!-- Attribute binding for id -->
    <input
      type="text"
      v-model="newTask"
      placeholder="Add a new task..."
      @keyup.enter="addTask"
      v-bind:id="dynamicId"
    />
    <button @click="addTask">Add Task</button>

    <ul v-if="tasks.length > 0">
      <li v-for="(task, index) in tasks" :key="index">
        <!-- 1d. JavaScript expressions inside syntax {{ }} -->
        {{ index + 1 }}. {{ task.name }}

        <!-- 7. Event Handling: Listening to Events [v-on:click] -->
        <button @click="markTaskComplete(task)">Complete</button>
        <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>

    <p v-else>No tasks added</p>

    <!-- Display computed property for completed tasks -->
    <!-- 4. Computed Property -->
    <p>Total Completed Tasks: {{ completedTasksCount }}</p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

// 3. Reactivity Fundamentals [ref()]
const newTask = ref('');
const tasks = ref([]);

// 2. Methods
const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push({ name: newTask.value, completed: false });
    newTask.value = '';
  }
};

// 7b. Method Handlers
const markTaskComplete = (task) => {
  task.completed = true;
};

// 7b. Method Handlers
const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

// 4. Computed Property
const completedTasksCount = computed(() => {
  return tasks.value.filter((task) => task.completed).length;
});

// 1d. JavaScript expressions inside syntax {{ }}
const dynamicId = computed(() => {
  return `input-${tasks.value.length}`;
});

</script>

<style scoped>
.task-list {
  text-align: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

input[type="text"] {
  padding: 10px;
  border: none;
  border-bottom: 2px solid #3498db;
  font-size: 16px;
  margin-right: 10px;
}

button {
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
}

ul li button {
  background-color: #515754;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

</style>
