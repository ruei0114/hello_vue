<template>
    <div>
        <h2>請參考已存在的程式碼完成類別 car</h2>
        <h3>請為car 加上以下屬性:</h3>
        <ul>
            <li>座位數(seat)</li>
            <li>車牌號(plate_number)</li>
        </ul>
        <h3>請為car 加上以下方法:</h3>
        <ul>
            <li>加速(accelerate)</li>
            <li>停止(stop)</li>
        </ul>
        <p>
            <CodeEditor
            width="100%"
            :read-only="true"
            :languages="[['shell', 'sample-output']]"
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
                sampleOutput: `This 2 seat yellow toyota 8888-nt is started.
The car is accelerating!
The car is stoped.`
            };
        },
    }
</script>

<style lang="scss" scoped>

</style>