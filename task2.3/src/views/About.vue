<template>
  <div class="about-page">
    <h1>About Us</h1>
    <div class="about-content">
      <p>
        Welcome to our task management website! We are dedicated to helping you stay organized
        and manage your tasks efficiently.
      </p>
      <p>
        With our website, you can easily add, complete, and delete tasks. Stay on top of your
        to-do list and achieve your goals effortlessly.
      </p>
      <p>
        We are committed to delivering the best task management experience. Feel free to
        reach out to us if you have any questions or feedback.
      </p>
    </div>

    <h2>Our Team</h2>
    <div class="team-member" v-for="(member, index) in team" :key="index">
      <div class="team-member-info">
        <h3>{{ member.name }}</h3>
        <p>{{ member.position }}</p>
      </div>
      <button @click="toggleDescription(index)">Toggle Description</button>
      <p :class="{ 'show-description': member.showDescription }">{{ member.description }}</p>
    </div>

    <h2>Our Mission</h2>
    <div class="mission">
      <p :style="missionStyle">{{ mission }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: 'John Doe',
          position: 'CEO',
          description: 'John is our visionary leader.',
          showDescription: false,
        },
        {
          name: 'Jane Smith',
          position: 'Designer',
          description: 'Jane creates beautiful user interfaces.',
          showDescription: false,
        },
        {
          name: 'Bob Johnson',
          position: 'Developer',
          description: 'Bob loves coding and solving problems.',
          showDescription: false,
        },
      ],
      mission: 'Our mission is to provide a user-friendly platform that simplifies task management, making your life easier.',
      missionStyle: {
        color: 'green',
        fontSize: '18px',
        fontWeight: 'bold',
      },
    };
  },
  methods: {
    toggleDescription(index) {
      this.team[index].showDescription = !this.team[index].showDescription;
    },
  },
};
</script>

<style scoped>
.about-page {
  text-align: center;
  padding: 20px;
}

.team-member {
  margin: 20px auto;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  max-width: 300px;
  margin-bottom: 20px;
}

.team-member button {
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  margin-top: 10px;
}

.team-member p {
  display: none;
}

.team-member p.show-description {
  display: block;
}

.mission {
  margin: 20px auto;
  max-width: 600px;
}

/* Class Binding */
.show-description {
  color: blue;
  font-weight: bold;
}

/* Style Binding */
</style>
