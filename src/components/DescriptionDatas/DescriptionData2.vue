<template>
    <div class="">
        <p>
            在宣告物件時，可以透過建構式（Constructor）來實現快速給定物件屬性的動作
        </p>
        <p>
            在上一關的範例程式中，我們能夠看到有一個函式(方法)
        <pre>
            def __init__(self, name, species):
                self.name = name
                self.species = species
        </pre>
            <code>__init__()</code> 方法在 Python 中扮演的就是 Constructor 的角色，在創建新物件時會自動被呼叫，為這個物件設定需要具備的屬性資訊。在例子中，當創建一個 Animal 物件時，我們提供了名字與物種的參數，這些參數將被透過 <code>self.name = name</code> 和 <code>self.species = species</code> 兩行程式給定到物件的屬性，而關鍵字 <code>self</code> 的概念是指這個物件本體。
        </p>
        <p>
            當我們建立物件 <code>nico</code> 
            <pre>
            nico = Animal("Nico", "狗")
            </pre>
            傳入的參數 <code>("Nico", “狗”)</code> 設定了 nico 這個物件的 name 與 species 資訊，相當於
            <pre>
            nico = Animal()
            nico.name = “Nico”
            nico.species = “狗”
            </pre>
            相比這樣的寫法省下了不少步驟
        </p>
        <p>
            python在存取物件資料時，通常使用
            <pre>           物件名.屬性名</pre>
            這樣的語法來對物件屬性作存取，就如上面的 <code>nico.name</code> ，可以使用 <code>print(nico.name)</code> 來印出原本存在裡面的動物名稱，又或是使用 <code>nico.name = “Jack"</code> 來修改動物的名稱，也可以透過<pre>           物件名.方法名</pre>來使用存在物件中的方法，例如
        </p>
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
                sampleCode: `Class Circle:
    def __init__(self, radius):
            self.radius = radius
    def Calculate_Area(self):
        print("Area of this Circle is : ", self.radius ** 2 * 3.14)

c1 = Circle(10)
c1. Calculate_Area()`,
                sampleOutput: `Area of this Circle is : 314`,
            };
        },
    }
</script>

<style lang="scss" scoped>
pre,code{
    color: #a5b8ba;
}

</style>