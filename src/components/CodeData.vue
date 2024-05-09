<template>
    <div>
        <button class="submit" @click="submit">Submit</button>
        <CodeEditor
            width="100%"
            v-model="editorContent"
            :languages="[['py', 'python']]"
            :line-nums="true"
        />
        <div
            :class="
                if_ac === 'Failed'
                    ? 'red-text'
                    : if_ac === 'Passed'
                    ? 'green-text'
                    : ''
            "
            style="font-size: 30px"
        >
            Result: {{ if_ac }}
        </div>
    </div>
</template>

<script>
// import hljs from "highlight.js";
import CodeEditor from "simple-code-editor";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
const if_ac = ref("");
export default {
    // data() {
    //     return {
    //         if_ac: "",
    //     };
    // },
    components: {
        CodeEditor,
        // hljs,
    },
    // data() {

    //     return {
    //         editorContent: "console.log(13)", // 用來儲存CodeEditor的內容
    //     };
    // },
    setup() {
        const editorContent = ref("");
        const route = useRoute();
        const chapterId = route.params.id;

        async function fetchData(id){
            try{
                const response = await axios.get(
                    `http://140.115.214.29:3000/chapter${id}`
                    // "https://randomuser.me/api/"
                );
                editorContent.value = response.data;
                console.log("response:");
            }catch(error){
                console.error("CodeArea Error fetching data:", error);
            }
            
        }

        watch(() => route.params.id, (newChapterId) => {
            console.log("newChapterId:", newChapterId);
            fetchData(newChapterId);
            if_ac.value = "";
        });

        onMounted(async () => {
            fetchData(chapterId);
            // try {
                //https://randomuser.me/api/
                //https://140.115.214.29:3000
                // const response = await axios.get("https://randomuser.me/api/");
                
                
                // const response = await axios.get(
                // `http://140.115.214.29:3000/chapter${chapterId}`
                // // "https://randomuser.me/api/"
                // );
                // editorContent.value = response.data;
                //                 editorContent.value = `class car:
                //     def __init__(self, color, brand, seat, plate_number):
                //         self.color = color
                //         self.brand = brand
                //         self.seat = seat
                //         self.plate_number = plate_number

                //     def start_engine(self):
                //         print(f"The {self.seat} seat yellow toyota {self.plate_number} is started")

                //     def accelerate(self):
                //         print("The car is accelerating")

                //     def stop(self):
                //         print("The car is stopped")

                // #class tank:

                // #class garbage_truck:
                // `;
            //     console.log("response:", response.data);
            // } catch (error) {
            //     console.error("CodeArea Error fetching data:", error);
            // }
        });

        return {
            if_ac,
            editorContent,
        };
    },
    methods: {
        async submit() {
            console.log("Content:", this.editorContent);
            try {
                const chapterId = this.$route.params.id;
                const response = await axios.post(
                    `http://140.115.214.29:3000/chapter${chapterId}`,
                    // {
                    //     content: this.editorContent,
                    // }
                    this.editorContent,
                    {
                        headers: {
                            "Content-Type": "text/plain",
                        },
                    }
                );
                this.if_ac = response.data === "Passed" ? "Passed" : "Failed";
                console.log("Response:", response.data);
            } catch (error) {
                console.error("Error sending data:", error);
            }
        },
    },
};
</script>

<style>
.code-editor .code-area > pre {
    max-height: 600px;
    max-width: 760px;
}
.code-editor .code-area > textarea {
    /* background-color: aqua; */
    /* color: black; */

    max-height: 650px;
    max-width: 780px;
    overflow: scroll;
}

/* https://css-tricks.com/almanac/properties/s/scrollbar/ */
.code-editor .code-area > textarea::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    cursor: default;
}
.code-editor .code-area > textarea::-webkit-scrollbar-track {
    cursor: default;
    border-radius: 5px;
}
.code-editor .code-area > textarea::-webkit-scrollbar-thumb {
    background-color: #202020;
    cursor: default;
    border-radius: 5px;
}
.code-editor .code-area > textarea::-webkit-scrollbar-corner {
    background-color: #0d1117;
}

.submit {
    background-color: #3a4040;
    border-bottom: none;
    height: 30px;
    border-radius: 5px;
    margin-bottom: 10px;

    &:hover {
        transform: translatey(-0.1rem);
        cursor: pointer;
    }
}

.red-text {
    color: red;
}

.green-text {
    color: green;
}
</style>
