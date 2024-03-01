<!-- App.vue -->
<template>
  <div id="app">
    <div class="chapters-container">
      <div
        v-for="(chapter, index) in chapters"
        :key="index"
        class="chapter-box"
        :class="{ 'completed': chapter.status === 'completed', 'in-progress': chapter.status === 'in-progress', 'not-started': chapter.status === 'not-started' }"
        @click="handleChapterClick(index)"
      >
        {{ chapter.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chapters: [
        { name: 'Chapter 1', status: 'completed' },
        { name: 'Chapter 1', status: 'completed' },
        { name: 'Chapter 1', status: 'completed' },
        { name: 'Chapter 1', status: 'completed' },
        { name: 'Chapter 1', status: 'completed' },
        { name: 'Chapter 3', status: 'in-progress' },
        { name: 'Chapter 4', status: 'not-started' },
        { name: 'Chapter 4', status: 'not-started' },
        { name: 'Chapter 4', status: 'not-started' },
        { name: 'Chapter 4', status: 'not-started' },
        { name: 'Chapter 4', status: 'not-started' },
        { name: 'Chapter 4', status: 'not-started' },
        // Add more chapters as needed
      ],
    };
  },
  methods: {
    handleChapterClick(index) {
      const chapter = this.chapters[index];

      if (chapter.status === 'not-started') {
        alert('未達進度 - 提示');
        // 可以添加其他處理未達進度的邏輯
      } else {
        // 跳轉到相應的章節頁面，可以使用 Vue Router 或 window.location.href 等方式
        alert(`跳轉到 ${chapter.name} 的網頁`);
      }
    },
  },
};
</script>

<style>
body {
  background-color: #2b2626;
  margin: 0; /* 移除 body 的預設 margin */
}

#app {
  justify-content: center;
  height: 100vh; /* 使 #app 充滿整個視窗高度 */
}

.chapters-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 800px;
  margin: 20px auto;
  overflow-y: auto;
  
}

.chapter-box {
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  border-radius: 10px; /* 加上 10px 的圓角 */
}

.completed {
  background-color: #308853;
  color: white;
}

.in-progress {
  background-color: #a02534;
  color: white;
}

.not-started {
  background-color: #888489;
  color: white;
}

</style>
