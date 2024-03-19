<!-- ChapterView.vue -->
<!-- 請求:題目說明, code -->

<template>
  <div class="chapter-view">
    <Sidebar />
    <main>chappppppppppppppppppppppppppppppppppppppppppppppppppppp</main>
  </div>
</template>

<script setup>
 import Sidebar from "../components/SideBar.vue";
</script>

<style scoped>
 .chapter-view {
   display: flex;
   main{
    flex: 1 1 0;
    margin-left: 2rem;
    padding :2rem;
    color: bisque;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
   }
 }
</style>