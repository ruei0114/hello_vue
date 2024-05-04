<template>
    <div>
        <h2>完成類別別 Student</h2>
        <h3>1. 初始化類別，並在study方法中輸出學生正在學習的課程</h3>
        <h3>2. 修改物件的屬性name為"Kevin"</h3>
        <p>
            <CodeEditor
            width="100%"
            :languages="[['shell', 'sample-output']]"
            :read-only="true"
            v-model="sampleOutput"
            />
        </p>
    </div>
</template>

<script>
    import CodeEditor from "simple-code-editor";
    export default {
        components: {
            CodeEditor,
        },
        data() {
            return {
                sampleOutput: `Kevin is studying English!`
            };
        },
    }
</script>

<style lang="scss" scoped>

</style>