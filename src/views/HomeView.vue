<!-- App.vue -->
<!-- axios -->
<!-- https://antoniandre.github.io/splitpanes/#do-your-own-style -->
<!-- https://simple-code-editor.vicuxd.com/ -->
<!-- 請求章節狀態(completed, in-progress, not-started) -->
<template>
  <div id="home">
    <div class="chapters-container">
      <div
        v-for="(chapterStatus, index) in chapterStatus"
        :key="index"
        class="chapter-box"
        :class="{ 'completed': chapterStatus === 'completed', 'in-progress': chapterStatus === 'in-progress', 'not-started': chapterStatus === 'not-started' }"
        @click="handleChapterClick(index)"
      >
        chapter {{ index+1 }} - {{ chapterName[index+1] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chapterStatus: [
        'completed',
        'completed',
        'completed',
        'completed',
        'completed',
        'completed',
        'in-progress',
        // Add more chapter status as needed
      ],
      chapterName : ["", "類別", "初始化物件", "封裝", "繼承", "多型", "Bank Practice", "Library Practice"],
    };
  },
  methods: {
    handleChapterClick(index) {
      const chapter = this.chapterStatus[index];

      if (chapter === 'not-started') {
        alert('未達進度 - 提示');
        // 可以添加其他處理未達進度的邏輯
      } else {
        // 跳轉到相應的章節頁面，可以使用 Vue Router 或 window.location.href 等方式
        // alert(`跳轉到 chapter ${index} 的網頁`);
        this.$router.push(`/chapter/${index+1}`);
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

#home {
  justify-content: center;
  height: 100vh; /* 使 #home 充滿整個視窗高度 */
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
