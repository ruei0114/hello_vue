<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="catalog"></div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="toggleMenu">
                <span class="material-symbols-outlined">keyboard_double_arrow_right</span>
            </button>
        </div>
        
    </aside>
</template>

<script setup>
    import { ref } from 'vue';
    const is_expanded = ref(false);
    const toggleMenu = () => {
        is_expanded.value = !is_expanded.value;
    };
</script>

<style lang="scss" scoped>
    aside {
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

        .catalog {
            width: 0;
            transition: 0.2s ease-out;
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

            .catalog {
                margin-top: -20rem;
                margin-left: -20rem;
                width: 16.5rem;
                padding: 1rem;
                background-color: #bfb7b7;
                border-radius: 0.5rem;
                box-shadow: 0 0 10px 0 #000000;
            }
            
            .menu-toggle-wrap{
                justify-content: flex-end;
                .menu-toggle {
                    .material-symbols-outlined {
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