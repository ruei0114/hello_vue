<template>
    <div>
        <p>
            物件導向程式設計（OOP）是一種程式設計模式，它允許開發者通過類別和物件來組織和結構化程式。類別是定義物件屬性和行為的藍圖，定義了一組相關的屬性和方法，而物件是這些類別的具體實例。類別所定義的屬性和方法可以被物件實例化後的實體所繼承和使用。
        </p>
        <p>
            透過類別和物件，我們的程式碼更加模組化，易於理解和維護。因為一旦定義了一個類別，就可以創建任意數量的實例，每個物件都具有其獨特的屬性。這種方法不僅提高了開發效率，還增強了軟體的靈活性和可擴充性。
        </p>
        <p>
            例如，我們可以創建一個名為Animal的類別，它包含屬性如name（名字）和species（物種），以及方法如eat()和sleep()。當我們創建一個Animal類別的物件時，我們可以給予它特定的屬性值，如一隻名叫Nico的狗或一隻名叫Nana的貓。這些物件將擁有Animal類別定義的屬性和方法。
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
            sampleCode: `# 定義Animal類別
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def eat(self):
        print(f"{self.name} is eating.")

    def sleep(self):
        print(f"{self.name} is sleeping.")

# 使用Animal類別創建的物件
nico = Animal("Nico", "狗")
nana = Animal("Nana", "貓")

# 使用物件的方法
nico.eat()
nico.sleep()

nana.eat()
nana.sleep()`,
            sampleOutput: `Nico is eating.
Nico is sleeping.
Nana is eating.
Nana is sleeping.`,
        };
    },
};
</script>

<style lang="scss" scoped></style>
