<!-- ChapterView.vue -->
<!-- 請求:題目說明, code -->

<template>
  <div class="chapter-view">
    <Sidebar />
    <main>
      <div class="wrapper">
        <splitpanes class="default-theme">
          <pane>
            <div>{{ i }}</div>
          </pane>
          <pane>
            <div>{{ i }}</div>
          </pane>
        </splitpanes>
        <!-- <div class="description">description</div>
        <div class="navigation-bar" @mousedown="onMousedown">
          <div class="navigation-button"></div>
        </div>
        <div class="code-view">code</div> -->
      </div>
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
// export default {
//   data() {
//     return {
//       isDragging: false,
//       x: 0,
//       y: 0,
//       resizer: document.querySelector(".navigation-bar"),
//       leftSide: resizer.previousElementSibling,
//       reghtSide: resizer.nextElementSibling,
//       leftWidth: 0,
//     };
//   },
//   methods: {
//     onMousedown(e) {
//       this.isDragging = true;
//       console.log("mousedown");
//       // Get the current mouse position

//       this.resizer = e.target;
//       this.leftSide = resizer.previousElementSibling;
//       this.rightSide = resizer.nextElementSibling;

//       this.x = e.clientX;
//       this.leftWidth = this.leftSide.getBoundingClientRect().width;
//       window.addEventListener("mousemove", this.onMousemove);
//       window.addEventListener("mouseup", this.onMouseup);
//     },
//     onMousemove(e) {
//       if (this.isDragging) {
//         console.log("dragging");
//         // How far the mouse has been moved
//         const dx = e.clientX - this.x;

//         const newLeftWidth =
//           ((this.leftWidth + dx) * 100) /
//           resizer.parentNode.getBoundingClientRect().width;
//         leftSide.style.width = newLeftWidth + "%";
//       }
//     },
//     onMouseup() {
//       this.isDragging = false;
//       window.removeEventListener("mousemove", this.onMousemove);
//       window.removeEventListener("mouseup", this.onMouseup);
//     },
//   },

// };
</script>

<style scoped>
.splitpanes {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
}

.splitpanes__pane {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2) inset;
  justify-content: center;
  align-items: center;
  display: flex;
}

.splitpanes--vertical > .splitpanes__splitter {
  min-width: 6px;
  background: linear-gradient(90deg, #ccc, #111);
}

.splitpanes--horizontal > .splitpanes__splitter {
  min-height: 6px;
  background: linear-gradient(0deg, #ccc, #111);
}
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

      .navigation-bar {
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
          } */
        }
      }

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
