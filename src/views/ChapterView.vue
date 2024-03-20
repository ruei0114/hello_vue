<!-- ChapterView.vue -->
<!-- 請求:題目說明, code -->

<template>
    <div class="chapter-view">
        <Sidebar />
        <main>
            <splitpanes>
                <pane>
                    <h1>Chapter {{ chapterId }}</h1>
                    <descriptionData />
                </pane>
                <pane>
                    <codeData />
                </pane>
            </splitpanes>
        </main>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import Sidebar from "../components/SideBar.vue";
import descriptionData from "../components/DescriptionData.vue";
import codeData from "../components/CodeData.vue";
const route = useRoute();
const chapterId = route.params.id;
</script>

<script>
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
export default {
    components: { Splitpanes, Pane },
};
</script>

<style>
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
    display: flex;
    overflow-wrap: break-word;

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
</style>
