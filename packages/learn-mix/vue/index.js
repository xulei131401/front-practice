const { createApp, ref } = Vue;

createApp({
  setup() {
    const message = ref("Hello vue!123");
    return {
      message,
    };
  },
}).mount("#app");
