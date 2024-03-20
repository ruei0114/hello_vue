<!-- ChapterView.vue -->
<!-- 請求:題目說明, code -->

<template>
  <div class="chapter-view">
    <Sidebar />
    <main>
      <div class="wrapper" ref="box" @mousemove="Dragging" @mouseup="stopDrag">
        <div
          class="description"
          ref="description"
          :style="{ width: descriptionWidth + 'px' }"
        >
          description
        </div>
        <div class="navigation-bar">
          <div
            class="navigation-button"
            ref="navigation"
            @mousedown.prevent="startDrag"
          ></div>
        </div>
        <div
          class="code-view"
          ref="codeView"
          :style="{ width: codeViewWidth + 'px' }"
        >
          code
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Sidebar from "../components/SideBar.vue";
</script>

<script>
export default {
  data() {
    return {
      isDragging: false,
      startX: 0,
      left: 0
    };
  },
  methods: {
    startDrag(event) {
      this.isDragging = true;
      this.startX = event.clientX;
      this.left = this.$refs.navigation.offsetLeft;
    },
    dragging(event) {
      if (this.isDragging) {
        var endX = event.clientX;
        var moveLen = this.left+ (endX - this.startX);
        var maxT = this.$refs.box.clientWidth - this.$refs.navigation.offsetWidth;

        if (moveLen < 32) moveLen = 32; // 左边区域的最小宽度为32px
        if (moveLen > maxT - 150) moveLen = maxT - 150; //右边区域最小宽度为150px

        this.$refs.navigation.style.left = moveLen + "px";
      }
    },
    stopDrag() {
      this.isDragging = false;
    },
  },
};
</script>

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
