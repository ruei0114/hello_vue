<template>
    <div>
        <p>請創立兩個子類別 <code>tank</code> 與 <code>garbage_truck</code> 繼承 <code>car</code> 並分別完成以下要求</p>
        <h3>garbage_truck:</h3>
        <ol>
            <li>繼承 <code>car</code> 的建構函數</li>
            <li>覆寫 <code>start_engine</code> 方法，印出 <code>engine started!</code></li>
        </ol>
        <h3>tank:</h3>
        <ol>
            <li>繼承 <code>car</code> 的建構函數並加上屬性: 彈藥數(ammunition)</li>
            <li>一個屬於 <code>tank</code> 的新方法: 開火(fire)
                <ul>
                    <li>判斷彈藥數是否為 0 ，若為 0 印出 <code>The tank has no ammunition</code></li>
                    <li>若不為 0 印出 <code>The tank is firing</code> ，並且彈藥數減一後印出彈藥數</li>
                </ul>
            </li>
        </ol>
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
                sampleOutput: `engine started!
The 6 seat green volvo ttt123 is started
The tank is firing
The tank has 2 ammunition left
The tank is firing
The tank has 1 ammunition left
The tank is firing
The tank has 0 ammunition left
The tank has no ammunition`
            };
        },
    }
</script>

<style lang="scss" scoped>
pre,code{
    color: #a5b8ba;
}
</style>