<template>
    <div>
        <div class="submit-result">
            <button class="submit" @click="submit">Submit</button>
            <div
                v-show="if_ac !== ''"
                style="margin-bottom: 10px; margin-right: 5px; font-size: 20px"
            >
                <code :class="if_ac === 'Passed' ? 'green-text' : 'red-text'">{{
                    if_ac === "Passed" ? "Passed" : "Failed"
                }}</code>
            </div>
        </div>
        <CodeEditor
            width="100%"
            v-model="editorContent"
            :languages="[['py', 'python']]"
            :line-nums="true"
        />

        <div class="error" style="margin-top: 15px">
            <CodeEditor
                width="100%"
                v-model="if_ac"
                :languages="[['shell', 'ERROR']]"
                :line-nums="false"
                v-show="if_ac !== '' && if_ac !== 'Passed'"
            />
        </div>
    </div>
</template>

<script>
// import hljs from "highlight.js";
import CodeEditor from "simple-code-editor";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
const if_ac = ref("");
export default {
    components: {
        CodeEditor,
    },
    setup() {
        const editorContent = ref("");
        const route = useRoute();
        const chapterId = route.params.id;

        async function fetchData(id) {
            try {
                const response = await axios.get(
                    `http://140.115.214.29:3000/chapter${id}`
                    // "https://randomuser.me/api/"
                );
                editorContent.value = response.data;
                console.log("connection success");
            } catch (error) {
                console.error("CodeArea Error fetching data:", error);
            }
        }

        watch(
            () => route.params.id,
            (newChapterId) => {
                console.log("newChapterId:", newChapterId);
                fetchData(newChapterId);
                if_ac.value = "";
            }
        );

        onMounted(async () => {
            fetchData(chapterId);
        });

        return {
            if_ac,
            editorContent,
        };
    },
    methods: {
        async submit() {
            console.log("Content:", this.editorContent);
            try {
                const chapterId = this.$route.params.id;
                const response = await axios.post(
                    `http://140.115.214.29:3000/chapter${chapterId}`,
                    this.editorContent,
                    {
                        headers: {
                            "Content-Type": "text/plain",
                        },
                    }
                );
                // console.log("Response:", Array.isArray(response.data));
                if (!Array.isArray(response.data)) {
                    this.if_ac = "Passed";
                    return;
                }
                const functionError = response.data[0];
                const dataError = response.data[1];
                console.log("functionError", functionError);
                console.log("dataError", dataError);
                let formattedData = "";

                if (Object.keys(functionError).length > 0) {
                    formattedData += "Function Error:";
                    for (
                        let i = 0;
                        i < Object.keys(functionError).length;
                        i += 1
                    ) {
                        // Construct the Expected and Actual pair with a blank line in between
                        formattedData += `\n${functionError[i]}`;
                    }
                }

                if (Object.keys(dataError).length > 0) {
                    if (formattedData !== "") {
                        formattedData +=
                            "\n==================================================\n";
                    }
                    formattedData += "Data Error:\n";
                    for (let i = 0; i < Object.keys(dataError).length; i += 2) {
                        // Construct the Expected and Actual pair with a blank line in between
                        formattedData += `${dataError[i]}\n${
                            dataError[i + 1]
                        }\n\n`;
                    }
                }

                this.if_ac = formattedData.trim();
                // console.log("Response:", data);
            } catch (error) {
                console.error("Error sending data:", error);
            }
        },
    },
};
</script>

<style>
.code-editor .code-area > pre {
    max-height: 600px;
    max-width: 760px;
}
.code-editor .code-area > textarea {
    max-height: 650px;
    max-width: 780px;
    overflow: scroll;
}

/* https://css-tricks.com/almanac/properties/s/scrollbar/ */
.code-editor .code-area > textarea::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    cursor: default;
}
.code-editor .code-area > textarea::-webkit-scrollbar-track {
    cursor: default;
    border-radius: 5px;
}
.code-editor .code-area > textarea::-webkit-scrollbar-thumb {
    background-color: #202020;
    cursor: default;
    border-radius: 5px;
}
.code-editor .code-area > textarea::-webkit-scrollbar-corner {
    background-color: #0d1117;
}

.submit {
    background-color: #3a4040;
    border-bottom: none;
    height: 30px;
    border-radius: 5px;
    margin-bottom: 10px;

    &:hover {
        transform: translatey(-0.1rem);
        cursor: pointer;
    }
}

.error .title {
    color: red;
}

.submit-result {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.red-text {
    color: red;
}

.green-text {
    animation: showResult 2s ease-in-out infinite alternate;
    color: green;
}

@keyframes showResult {
    0%,
    100% {
        text-shadow: 0 0 20px #0f0, 0 0 100px #0f0, 0 0 20px #0f0;
    }
    50% {
        text-shadow: 0 0 50px #0f0, 0 0 150px #0f0, 0 0 50px #0f0;
    }
}
</style>
