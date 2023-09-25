<template>
    <header>
      <nav>
        <router-link to="/">Task List</router-link>
        <router-link to="/About">About Us</router-link>
        <router-link to="/TaskForm">Task Form</router-link>
        <router-link to="/Components">Components</router-link>
        <router-link to="/ListRendering">List Rendering</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  header {
    background-color: #333;
    color: white;
    padding: 1rem;
  }
  
  nav {
    display: flex;
    justify-content: space-around;
  }
  
  nav a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: 0.5rem 1rem;
  }
  
  nav a:hover {
    background-color: #555;
    border-radius: 4px;
  }
  </style>
  