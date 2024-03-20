<template>
    <div>
        <CodeEditor
            width="auto"
            theme="github-dark"
            :tab-spaces="4"
            :wrap="true"
        />
    </div>
</template>

<script>
// import hljs from "highlight.js";
import CodeEditor from "simple-code-editor";
// import { ref, watch } from "vue";
// import debounce from "lodash.debounce";
export default {
    components: {
        CodeEditor,
        // hljs,
    },
    // setup() {
    //     const value = ref("");
    //     const debouncedValue = ref("");

    //     const debouncedUpdate = debounce((newValue) => {
    //         debouncedValue.value = newValue;
    //     }, 500);

    //     watch(value, (newValue) => {
    //         debouncedUpdate(newValue);
    //     });

    //     return {
    //         value,
    //         debouncedValue,
    //     };
    // },
};
</script>
