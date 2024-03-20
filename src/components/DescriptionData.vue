<template>
    <div id="description">{{ desContent }}</div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const desContent = ref("");

    onMounted(async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/");
        desContent.value = JSON.stringify(response.data, null, 2);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      desContent,
    };
  },
};
</script>
