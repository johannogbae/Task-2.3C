<template>
  <div>
    <h2>Task Management Form</h2>

    <!-- 8a. Form Input Bindings -->
    <!-- Task Title Input with .trim modifier -->
    <div class="form-group">
      <label for="task-title">Task Title:</label>
      <!-- v-model with .trim modifier -->
      <input type="text" id="task-title" v-model.trim="task.title" />
    </div>

    <!-- Task Description Input with .trim modifier -->
    <div class="form-group">
      <label for="task-description">Task Description:</label>
      <!-- v-model with .trim modifier -->
      <textarea id="task-description" v-model.trim="task.description"></textarea>
    </div>

    <!-- Task Priority Input -->
    <div class="form-group">
      <label for="task-priority">Task Priority:</label>
      <!-- v-model with select element -->
      <select id="task-priority" v-model="task.priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>

    <!-- Task Due Date Input -->
    <div class="form-group">
      <label for="task-due-date">Due Date:</label>
      <!-- v-model with input type="date" -->
      <input type="date" id="task-due-date" v-model="task.dueDate" />
    </div>

    <!-- Task Completion Status Input with .lazy modifier -->
    <div class="form-group">
      <label>
        <!-- v-model with .lazy modifier -->
        <input type="checkbox" v-model.lazy="task.isComplete" />
        Task Completed
      </label>
    </div>

    <!-- Radio Input with v-model -->
    <div class="form-group">
      <label for="task-priority">Task Priority:</label>
      <label>
        <input type="radio" value="low" v-model="task.priority" />
        Low
      </label>
      <label>
        <input type="radio" value="medium" v-model="task.priority" />
        Medium
      </label>
      <label>
        <input type="radio" value="high" v-model="task.priority" />
        High
      </label>
    </div>

    <!-- 8b. v-model modifiers -->
    <!-- Display v-model modifiers -->
    <div class="form-group">
      <p><strong>v-model Modifiers:</strong></p>
      <p><strong>Task Title (with .trim):</strong> {{ task.title }}</p>
      <p><strong>Task Description (with .trim):</strong> {{ task.description }}</p>
      <p><strong>Task Completion Status (with .lazy):</strong> {{ task.isComplete }}</p>
    </div>

    <!-- Submit Button -->
    <div class="form-group">
      <button @click="addTask">Add Task</button>
    </div>

    <!-- Display Task Information -->
    <div v-if="taskAdded">
      <h3>Task Added:</h3>
      <p><strong>Title:</strong> {{ task.title }}</p>
      <p><strong>Description:</strong> {{ task.description }}</p>
      <p><strong>Priority:</strong> {{ task.priority }}</p>
      <p><strong>Due Date:</strong> {{ task.dueDate }}</p>
      <p><strong>Completed:</strong> {{ task.isComplete ? 'Yes' : 'No' }}</p>
    </div>

    <!-- 9. Watchers Section -->
    <div>
      <h2>Watchers</h2>

      <!-- Watch for changes in task.title -->
      <p><strong>Task Title Watcher:</strong> {{ titleWatcherResult }}</p>

      <!-- Watch for changes in task.description -->
      <p><strong>Task Description Watcher:</strong> {{ descriptionWatcherResult }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {
        title: '',
        description: '',
        priority: 'medium',
        dueDate: '',
        isComplete: false,
      },
      taskAdded: false,
      titleWatcherResult: '',
      descriptionWatcherResult: '',
    };
  },
  methods: {
    addTask() {
      // Handle task submission logic (e.g., save to database)
      // For this example, we'll just display the task information
      this.taskAdded = true;
    },
  },
  watch: {
    'task.title'(newTitle, oldTitle) {
      // 9. Watchers - Watcher for task.title
      this.titleWatcherResult = `Title changed from "${oldTitle}" to "${newTitle}"`;
    },
    'task.description'(newDescription, oldDescription) {
      // 9. Watchers - Watcher for task.description
      this.descriptionWatcherResult = `Description changed from "${oldDescription}" to "${newDescription}"`;
    },
  },
};
</script>

<style>
.form-group {
  margin-bottom: 20px;
}
</style>
