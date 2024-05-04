<template>
    <div>
        <p>
            在c++中，若是不想讓外部存取某些屬性變數可以將其宣告為private，而在python中若要達成類似的效果，則會在屬性名稱前加上兩個底線(__)，如以下範例
        </p>
        <p>
            <CodeEditor
                width="100%"
                :languages="[['py', 'sample-code']]"
                :line-nums="true"
                :read-only="true"
                v-model="sampleCode1"
            />
        </p>
        <p>
            可看到由外部是無法存取的，只能由內部存取，實際上，在python中他並沒有真正的把屬性私有化，他是通過將其重新命名的方式來實現此功能，若是能得知其真實的命名還是可以對屬性做存取，如以下範例
        </p>
        <p>
            <CodeEditor
                width="100%"
                :read-only="true"
                :line-nums="true"
                :languages="[['py', 'sample-code']]"
                v-model="sampleCode2"
            />
        </p>
        <p>
            若是要由外部來存取私密屬性，可以寫兩個公友方法來提供外部存取資料的方法，範例如下
        </p>
        <p>
            <CodeEditor
                width="100%"
                :read-only="true"
                :line-nums="true"
                :languages="[['py', 'sample-code']]"
                v-model="sampleCode3"
            />
        </p>
        <p>由此，外部也可以安全的存取物件的屬性</p>
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
            sampleCode1: `class Book:
    # 建構式
    def __init__(self):
        self.__author = "Jack"  
        self.__title = "線性代數"      
    def Print_information(self):
        print(self.__title)

b = Book()
#AttributeError: 'Book' object has no attribute '__author'
print(b.__author)
#印出結果 : 線性代數
b.Print_information()`,
            sampleCode2: `b = Book()
#{'_Book__author': 'Jack', '_Book__title': '線性代數'}
print(b.__dict__)
#可看到屬性真正的名稱
print(b._Book__author)

#輸入正確屬性名稱即可印出作者名稱`,
            sampleCode3: `#回傳作者名
def get_author(self):
    return self.__author
# 設定作者名
def set_author(self, author):
    self.__author = author`,
        };
    },
};
</script>

<style lang="scss" scoped></style>
