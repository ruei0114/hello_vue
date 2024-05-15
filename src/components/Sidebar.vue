<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="chapter-container">
            <div
                v-for="(chapterStatus, index) in chapterStatus"
                :key="index"
                class="chapter-choice"
                :class="{
                    completed: chapterStatus === 'completed',
                    'in-progress': chapterStatus === 'in-progress',
                    'not-started': chapterStatus === 'not-started',
                }"
                @click="handleChapterClick(index)"
            >
                chapter {{ index + 1 }} - {{ chapterName[index + 1] }}
            </div>
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="toggleMenu">
                <span class="material-symbols-outlined"
                    >keyboard_double_arrow_right</span
                >
            </button>
        </div>
        <!-- <div class="chapter-container"></div> -->
    </aside>
</template>

<script setup>
import { ref } from "vue";
const is_expanded = ref(false);
const toggleMenu = () => {
    is_expanded.value = !is_expanded.value;
};
</script>

<script>
export default {
    data() {
        return {
            chapterStatus: [
                "completed",
                "completed",
                "completed",
                "completed",
                "completed",
                "completed",
                "in-progress",
            ],
            chapterName: [
                "",
                "類別",
                "初始化物件",
                "封裝",
                "繼承",
                "多型",
                "Bank Practice",
                "Library Practice",
            ],
        };
    },
    methods: {
        handleChapterClick(index) {
            const chapter = this.chapterStatus[index];

            if (chapter === "not-started") {
                alert("未達進度 - 提示");
                // 可以添加其他處理未達進度的邏輯
            } else {
                // 跳轉到相應的章節頁面，可以使用 Vue Router 或 window.location.href 等方式
                // alert(`跳轉到 chapter ${index} 的網頁`);
                this.$router.push(`/chapter/${index + 1}`);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
aside {
    z-index: 99;
    display: flex;
    justify-content: end;
    min-height: 100vh;
    // #bfb7b7
    background-color: transparent;
    width: 0;
    overflow: hidden;
    position: fixed;
    padding: 1rem;
    transition: 0.2s ease-out;

    .chapter-container {
        margin-top: -20rem;
        margin-left: -20rem;
        width: 17rem;
        padding-top: 20rem;
        padding-left: 20rem;
        padding-right: 1rem;
        background-color: #656565;
        border-radius: 0.5rem;
        box-shadow: 0 0 10px 0 #000000;
    }

    .chapter-choice {
        width: 100%;
        height: 5.9rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-weight: bold;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .menu-toggle-wrap {
        display: flex;
        margin-bottom: 1rem;
        margin-top: -20px;
        margin-right: -15px;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;
            font-size: 2rem;
            background-color: transparent;
            color: #888489;
            border: none;

            .material-symbols-outlined {
                font-size: 1.5rem;
                cursor: pointer;
            }

            &:hover {
                .material-symbols-outlined {
                    color: #bfb7b7;
                    transform: translatex(0.1rem);
                }
            }
        }
    }

    &.is-expanded {
        width: 300px;
        z-index: 99;

        .chapter-container {
            margin-top: -20rem;
            margin-left: -20rem;
            width: 17rem;
            padding-top: 20rem;
            padding-left: 20rem;
            padding-right: 1rem;
            background-color: #656565;
            border-radius: 0.5rem;
            box-shadow: 0 0 10px 0 #000000;
        }

        .chapter-choice {
            width: 100%;
            height: 5.9rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-weight: bold;
            border-radius: 0.5rem;
            margin-bottom: 0.5rem;
            &:hover {
                transform: translatex(0.1rem);
            }
        }

        .menu-toggle-wrap {
            justify-content: flex-end;
            .menu-toggle {
                margin-right: 25px;
                .material-symbols-outlined {
                    background-color: #545454;
                    border-radius: 5px;
                    transform: rotate(-180deg);
                }
            }

            &:hover {
                .material-symbols-outlined {
                    color: #bfb7b7;
                    transform: rotate(-180deg) translatex(0.1rem);
                }
            }
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }
}
</style>
