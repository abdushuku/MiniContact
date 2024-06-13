<template>
  <div>
    <Header />
    <main>
      <MainContent />
    </main>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import Header from "../components/Header.vue";
import MainContent from "../components/MainContent.vue";
export default {
  setup() {
    const state = reactive({
      isDarkMode: false,
    });

    // Check user preference from local storage on component mount
    if (localStorage.getItem("darkMode")) {
      state.isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    }

    const toggleDarkMode = () => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("darkMode", state.isDarkMode); // Store user preference
    };

    return {
      ...toRefs(state),
      toggleDarkMode,
    };
  },
  components: {
    Header,
    MainContent,
  },
};
</script>

<style scoped>
.dark {
  background-color: #333;
  color: #fff;
}
</style>