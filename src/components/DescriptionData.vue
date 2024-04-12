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
                //https://randomuser.me/api/
                //https://140.115.214.29:3000
                // const response = await axios.get("https://randomuser.me/api/");
                const response = await axios.get(
                    "http://140.115.214.29:3000/"
                );
                desContent.value = response;
                console.log("response");
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
