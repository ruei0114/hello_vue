<!-- ChapterView.vue -->
<!-- 請求:題目說明, code -->

<template>
    <div class="chapter-view">
        <Sidebar />
        <main>
            <splitpanes>
                <pane class="left-pane">
                    <div class="top-bar">
                        <div style="display: flex;">
                            <h1 style="margin-right: 20px;">Chapter {{ chapterId }}</h1>
                            <h1>{{ chapterName[chapterId] }}</h1>
                        </div>
                        <div v-show="chapterId<6">
                            <button @click="showDescriptionComponent" class="Description-btn">Description</button>
                            <button @click="showAnotherComponent" class="Description-btn">Practice</button>
                        </div>
                    </div>
                    <component :is="currentComponent" />
                    <!-- 另一個 component -->
                </pane>
                <pane>
                    <codeData />
                </pane>
            </splitpanes>
        </main>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Sidebar from "../components/SideBar.vue";
// import descriptionData from "../components/DescriptionData.vue";
import codeData from "../components/CodeData.vue";
import { defineAsyncComponent } from "vue";

const route = useRoute();
const chapterId = ref(route.params.id);
const chapterName = ["", "類別", "初始化物件", "封裝", "繼承", "多型", "Bank Practice", "Library Practice"];

// Determine the appropriate DescriptionData component based on chapterId

var descriptionComponent = defineAsyncComponent(() =>
    import(`../components/DescriptionDatas/DescriptionData${chapterId.value}.vue`)
);
var AnotherComponent = defineAsyncComponent(() =>
    import(`../components/PracticeDatas/PracticeData${chapterId.value}.vue`)
);

var currentComponent = ref(descriptionComponent);
function showDescriptionComponent() {
    currentComponent.value = descriptionComponent;
}

function showAnotherComponent() {
    // Replace "AnotherComponent" with the appropriate component name
    currentComponent.value = AnotherComponent;
}

watch(() => route.params.id, (newChapterId) => {
    chapterId.value = newChapterId;
    descriptionComponent = defineAsyncComponent(() =>
        import(`../components/DescriptionDatas/DescriptionData${chapterId.value}.vue`)
    );
    AnotherComponent = defineAsyncComponent(() =>
        import(`../components/PracticeDatas/PracticeData${chapterId.value}.vue`)
    );
    currentComponent = ref(descriptionComponent);

});
</script>

<script>
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
export default {
    components: { Splitpanes, Pane },
    data() {
        return {
            chapterId: 0,
        };
    },
    // beforeRouteUpdate(to) {
    //     // const route = useRoute();
    //     this.chapterId = to.params.id; 
    //     console.log(this.chapterId);
    //     console.log("ChapterView mounted");
    // }
};
</script>

<style>
.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.splitpanes {
    align-items: center;
}

.splitpanes__pane {
    background-color: #2f2f2f;
    height: 91.5vh;
    margin-right: 10px;
    padding: 20px;
    min-width: 510px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2) inset;
    justify-content: center;
    align-items: center;
    /* display: flex; */
}

.splitpanes--vertical > .splitpanes__splitter {
    min-width: 5px;
    background: #2f2f2f;
    height: 10vh;
    margin-right: 4px;
    margin-left: -6px;
}
</style>

<style scoped>
.chapter-view {
    /* 註解調，爆版消失 (overflow)*/
    /* display: flex;
    overflow-wrap: break-word; */

    main {
        display: flex;
        flex: 1 1 0;
        margin-left: 50px;
        height: 100vh;
        color: bisque;
        align-items: center;

        @media (max-width: 768px) {
            padding-left: 6rem;
        }
    }
}
.left-pane {
    overflow-y: auto; /* 讓左邊的 pane 在 y 方向上能夠捲動 */
}
.left-pane::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    cursor: default;
}
.left-pane::-webkit-scrollbar-thumb {
    background-color: #3a4040;
    cursor: default;
    border-radius: 5px;
    opacity: 0.2;
}
.Description-btn {
    background-color: #3a4040;
    border-bottom: none ;
}
</style>
