<template>
    <div>
        <h3>什麼是繼承</h3>
        <p>
            "繼承"能夠讓一個新建類別(子類別)重複使用父類別中已存在的屬性與方法，能夠減少重複性程式碼，從而影響開發效率與可維護性。
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
                :languages="[['shell', 'sample-output']]"
                :read-only="true"
                v-model="sampleOutput"
            />
        </p>
        <h3>範例說明</h3>
        <p>
            上方的範例中，子類別 <code>Dog</code> 與 <code>Bird</code> 同時繼承了父類別
            <code>Animal</code> ，其中有幾點需要特別注意
            <ol>
                <li>python 的繼承語法 <pre> class 子類別名稱(父類別):</pre></li>
                <li>子類別若要繼承父類別的建構函式，必須使用 <code>super.__init__()</code></li>
                <li>子類別中可以自訂屬性與方法，例如 <code>Dog</code> 中自定義了方法 <code>wagging_tail()</code> ， <code>Bird</code> 中 則定義了方法 <code>fly()</code></li>
                <li>若是子類別中使用了與父類別相同的方法名稱，該方法將被覆寫(原方法被覆蓋)。例如 <code>Dog</code> 中覆寫了 <code>eat()</code> 方法，使輸出內容與父類別不同</li>
                <li><code>bird1.wagging_tail()</code> 產生了錯誤，因為 <code>wagging_tail()</code> 指被定義在 <code>Dog</code> 中 <code>Bird</code> 無法存取此方法</li>
            </ol>
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
            sampleCode: `class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def eat(self):
        print(f"{self.name} is eating.")

    def sleep(self):
        print(f"{self.name} is sleeping.")

class Dog(Animal):
    def __init__(self, name, species):
        super.__init__(name, species)
    def eat(self):
        print(f"Dog {self.name} is eating meat")
    def wagging_tail(self):
        print(f"Happy dog {self.name} is wagging its tail.")
class Bird(Animal):
    def __init__(self, name, species):
        super.__init__(name, species)
    def fly(self):
        print(f"Happy bird {self.name} is flying around .")

dog1 = Dog("小白", "馬爾濟斯")
dog1.eat()
dog1.sleep()
dog1.wagging_tail()

bird1= Bird("啾啾", "麻雀")
bird1.eat()
bird1.sleep()
bird1.wagging_tail()
bird1.fly()`,
            sampleOutput: `Dog 小白 is eating meat
小白 is sleeping
Happy dog 小白 is wagging its tail.
啾啾 is eaing
啾啾 is sleeping
error
Happy bird 啾啾 is flying around .`,
        };
    },
};
</script>

<style lang="scss" scoped>
pre,code{
    color: #a5b8ba;
}
</style>
