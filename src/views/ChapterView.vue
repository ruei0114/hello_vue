<!-- ChapterView.vue -->
<!-- 請求:題目說明, code -->

<template>
  <div class="chapter-view">
    <Sidebar />
    <main>
      <splitpanes>
        <pane>
          <div></div>
        </pane>
        <pane>
          <div></div>
        </pane>
      </splitpanes>
      <!-- <div class="wrapper"></div> -->
    </main>
  </div>
</template>

<script setup>
import Sidebar from "../components/SideBar.vue";
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
  height: 97vh;
  margin-right: 10px;
  min-width: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2) inset;
  justify-content: center;
  align-items: center;
  display: flex;
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

    .wrapper {
      display: flex;
      height: 97vh;
      width: 100%;

      /* .splitpanes--horizontal > .splitpanes__splitter {
        min-height: 6px;
        background: linear-gradient(0deg, #ccc, #111);
      } */

      .description {
        background-color: #2f2f2f;
        margin-right: 4px;
        border-radius: 5px;
        width: 50%;
        padding: 2rem;
        color: bisque;
      }

      /* .navigation-bar {
        display: flex;
        align-items: center;
        cursor: ew-resize;

        .navigation-button {
          background-color: #2f2f2f;
          height: 2rem;
          width: 5px;
          border-radius: 3px;
          cursor: ew-resize;

          /* &:mousedown {
          } 
        }
      } */

      .code-view {
        background-color: #2f2f2f;
        margin: 0px 10px 0px 4px;
        border-radius: 5px;
        width: 50%;
        padding: 2rem;
        color: bisque;
      }
    }

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
</style>
