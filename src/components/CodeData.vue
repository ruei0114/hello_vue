<template>
    <div>
        <button @click="submit">Submit</button>
        <CodeEditor
            width="100%"
            v-model="editorContent"
            :languages="[['py', 'python']]"
        />
    </div>
</template>

<script>
// import hljs from "highlight.js";
import CodeEditor from "simple-code-editor";
import axios from "axios";
export default {
    components: {
        CodeEditor,
        // hljs,
    },
    data() {
        return {
            editorContent: "", // 用來儲存CodeEditor的內容
        };
    },
    methods: {
        async submit() {
            console.log("Content:", this.editorContent);
            try {
                const response = await axios.post(
                    "http://140.115.214.29:3000/",
                    {
                        content: this.editorContent,
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
    max-height: 660px;
    max-width: 850px;
}
.code-editor .code-area > textarea {
    /* background-color: aqua; */
    /* color: black; */

    max-height: 660px;
    max-width: 850vh;
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
</style>
