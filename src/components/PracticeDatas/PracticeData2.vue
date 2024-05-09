<template>
    <div>
        <h2>完成類別 Student</h2>
        <h3>
            <ol>
                <li>寫出建構函式初始化類別，物件創立時參數為 <code>("name", age)</code> <br/> 例如
                    <p>
                        <CodeEditor
                        width="100%"
                        :languages="[['py', 'sample-code']]"
                        :read-only="true"
                        v-model="sampleCode1"
                        />
                    </p>
                </li>
                <li>並在 <code>study()</code> 方法中輸出學生正在學習的課程
                    <p>
                        <CodeEditor
                        width="100%"
                        :languages="[['py', 'sampleCode']]"
                        :read-only="true"
                        v-model="sampleCode2"
                        />
                    </p>
                    <p>
                        <CodeEditor
                        width="100%"
                        :languages="[['shell', 'sample-output']]"
                        :read-only="true"
                        v-model="sampleOutput"
                        />
                    </p>
                </li>
            </ol>
        </h3>
        
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
                sampleCode1: `# 物件創立範例
s = Student("小明", 20)`,
                sampleCode2: `# study 使用範例
s = Student("Kevin", 20)
s.study("English")`,
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