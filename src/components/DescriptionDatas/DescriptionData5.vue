<template>
    <div>
        <h3>什麼是多型</h3>
        <p>在第四章的範例中，我們使用了 "覆寫" 的技巧。若是同一個方法在不同的類別中都進行覆寫，我們會用專有名詞"多型"來稱呼</p>
        <p>
            <CodeEditor
            width="100%"
            :languages="[['py', 'sample-code']]"
            :line-nums="true"
            :read-only="true"
            v-model="sampleCode"
            />
        </p>
        <h3>範例說明</h3>
        <p>在這個範例中，類別 <code>Triangel</code> 與 <code>Circle</code> 都繼承了 <code>Shape</code> ，且都具有 <code>perimeter()</code> 方法用來計算周長。由於三角型與圓形的周長計算公式並不相同，因此我們分別覆寫了兩個類別中的 <code>perimeter()</code> 方法，以得到正確的計算結果。</p>
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
                sampleCode: `class Shape:
    def __init__(self, length):
        self.length = length
    def perimeter(self):
        return self.length

class Triangle(Shape):
    def __init__(self, length):
        super().__init__(length)
    def perimeter(self):
        return 3 * self.length

class Circle(Shape):
    def __init__(self, length):
        super().__init__(length) #這邊的 length 指的是 radius
    def perimeter(self):
        return 2 * 3.14 * self.length`
            };
        },
    };
</script>

<style lang="scss" scoped>
code{
    color: #a5b8ba;
}
</style>