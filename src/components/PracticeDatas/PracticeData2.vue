<template>
    <div>
        <h2>完成類別別 Student</h2>
        <h3>1. 寫出建構函式初始化類別，物件輸入時參數為 <code>("名字", 年齡)</code></h3>
        <h3>2. 並在 <code>study()</code> 方法中輸出學生正在學習的課程</h3>
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
code{
    color: #a5b8ba
}
</style>