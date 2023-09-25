<template>
  <!-- 10.Component section -->
  <div>
    <h1>Component</h1>
    <!-- 10.a Props usage -->
    <Props title="Hello" content="This is custom content." />
  </div>
  <div>
    <!-- 10.b Events usage -->
    <Events @myEvent="handleMyEvent" />
    <p>{{ message }}</p>
  </div>
  <div>
    <!-- 10.c Slots usage -->
    <Slots>
      <p>This will be placed inside the SlotComponent.</p>
    </Slots>
  </div>
</template>

<script>
import Props from '../components/Props.vue';
import Events from '../components/Events.vue';
import Slots from '../components/Slots.vue';

export default {
  components: {
    Props,
    Events,
    Slots,
  },
  data() {
    return {
      message: '',
    };
  },
  methods: {
    // Event handler for the 'myEvent' event
    handleMyEvent(message) {
      this.message = message;
    },
  },
};
</script>
