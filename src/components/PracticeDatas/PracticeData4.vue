<template>
    <div>
        <p>
            請創立兩個子類別 <code>Tank</code> 與
            <code>Garbage_truck</code> 繼承 <code>Car</code> 並分別完成以下要求
        </p>
        <h3>Garbage_truck:</h3>
        <ol>
            <li>繼承 <code>Car</code> 的建構函數</li>
            <li>
                覆寫 <code>start_engine</code> 方法，印出
                <code>Engine Started!</code>
            </li>
        </ol>
        <h3>Tank:</h3>
        <ol>
            <li>
                繼承 <code>Car</code> 的建構函數並加上屬性: 彈藥數(ammunition)
            </li>
            <li>
                一個屬於 <code>Tank</code> 的新方法: 開火(fire)
                <ul>
                    <li>
                        判斷彈藥數是否為 0 ，若為 0 印出
                        <code>The tank has no ammunition</code>
                    </li>
                    <li>
                        若不為 0 印出
                        <code>The tank is firing</code>
                        ，並且彈藥數減一後印出彈藥數
                    </li>
                </ul>
            </li>
        </ol>
        <h3>主程式:</h3>
        <p>
            <CodeEditor
                width="100%"
                :languages="[['py', 'sample-code']]"
                :line-nums="true"
                :read-only="true"
                v-model="sampleCode"
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
            sampleCode: `g = Garbage_truck("yellow", "benz", 3, "ggg123")
g.start_engine()

t = Tank("green", "volvo", 6, "ttt123", 3)
t.start_engine()
t.fire()
t.fire()
t.fire()
t.fire()`,
            sampleOutput: `Engine Started!
The 6 seat green volvo ttt123 is started
The Tank is firing
The Tank has 2 ammunition left
The Tank is firing
The Tank has 1 ammunition left
The Tank is firing
The Tank has 0 ammunition left
The Tank has no ammunition`,
        };
    },
};
</script>

<style lang="scss" scoped>
pre,
code {
    color: #a5b8ba;
}
</style>
