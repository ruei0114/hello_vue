<template>
    <div>
        <button class="submit" @click="submit">Submit</button>
        <CodeEditor
            width="100%"
            v-model="editorContent"
            :languages="[['py', 'python']]"
            :line-nums="true"
        />
    </div>
</template>

<script>
// import hljs from "highlight.js";
import CodeEditor from "simple-code-editor";
import { ref, onMounted } from "vue";
import axios from "axios";
export default {
    components: {
        CodeEditor,
        // hljs,
    },
    // data() {

    //     return {
    //         editorContent: "console.log(13)", // 用來儲存CodeEditor的內容
    //     };
    // },
    setup() {
        const editorContent = ref("");

        // 在 setup 函式外部使用 onMounted 鉤子
        onMounted(async () => {
            try {
                //https://randomuser.me/api/
                //https://140.115.214.29:3000
                // const response = await axios.get("https://randomuser.me/api/");
                const response = await axios.get(
                    // "http://140.115.214.29:3000/"
                    "https://randomuser.me/api/"
                );
                editorContent.value = JSON.stringify(response, null, 4);
                console.log("response");
            } catch (error) {
                console.error("CodeArea Error fetching data:", error);
            }
        });

        return {
            editorContent,
        };
    },
    methods: {
        async submit() {
            console.log("Content:", this.editorContent);
            try {
                const response = await axios.post(
                    "http://140.115.214.29:3000/",
                    // {
                    //     content: this.editorContent,
                    // }
                    this.editorContent,
                    {
                        headers: {
                            "Content-Type": "text/plain",
                        },
                    }
                );

                console.log("Response:", response.data);
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
    /* background-color: aqua; */
    /* color: black; */

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
    border-bottom: none ;
    height: 30px;
    border-radius: 5px;
    margin-bottom: 10px;

    &:hover {
        transform: translatey(-0.1rem);
        cursor: pointer;
    }
}
</style>
