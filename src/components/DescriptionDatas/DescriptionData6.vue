<template>
    <div>
        <h3>class Bank:</h3>
        <p><code>Bank</code> 類別用於模擬銀行帳戶。清閱讀以下說明並參考範例輸出完成程式</p>
        <p>初始化方法 <code>__init__()</code> 設定帳戶的初始存款金額(balance)（預設為 1000）。<br/>類別中有三個方法：
            <ol>
                <li><code>deposit_money(amount)</code> :用於存款，將存款金額 (amount) 加到帳戶餘額上。</li>
                <li><code>check_balance()</code> :用於查詢帳戶餘額。</li>
                <li><code>withdraw_money(amount)</code> :用於提款，將提款金額 (amount) 從帳戶餘額中扣除。</li>
            </ol>
        </p>
        <h3>主程式：</h3>
        <p>
            在 <code>class Bank</code> 外寫一個主程式。
            使用一個 <code>Bank</code> 物件<br/>
            使用者可以輸入不同的模式 (mode)（0、1、2 或 3） 來執行不同的操作。<br/>
            如果輸入的模式不在範圍內，會顯示錯誤訊息。(執行錯誤，請輸入正確數字)<br/>
            如果輸入的模式是 0，會顯示目前的存款餘額。<br/>
            如果輸入的模式是 1，會詢問存入的金額並顯示存入後的存款餘額。<br/>
            如果輸入的模式是 2，會詢問欲提款的金額並顯示提款後的餘額。<br/>
            如果輸入的模式是 3，會結束程式並顯示感謝惠顧的訊息，否則使用者能夠進行下一次選擇。
        </p>
        <p>
            <CodeEditor
            width="100%"
            :languages="[['shell', 'sample-output']]"
            :read-only="true"
            v-model="sampleOutput"
             />
        </p>
    </div>
</template>

<script>
    import CodeEditor from "simple-code-editor";
    export default {
        components: { CodeEditor },
        data() {
            return {
                sampleOutput: `檢查餘額輸入0, 存款輸入1, 提款輸入2, 離開輸入3:0
目前存款餘額: 1000
檢查餘額輸入0, 存款輸入1, 提款輸入2, 離開輸入3:1
請輸入存入的金額:100
存入後的存款: 1100
檢查餘額輸入0, 存款輸入1, 提款輸入2, 離開輸入3:0
目前存款餘額: 1100
檢查餘額輸入0, 存款輸入1, 提款輸入2, 離開輸入3:2
請輸入欲提款的金額:500
提款後的餘額: 600
檢查餘額輸入0, 存款輸入1, 提款輸入2, 離開輸入3:3
謝謝惠顧`
            };
        },
    }
</script>

<style lang="scss" scoped>
code {
    color: #a5b8ba;
}
</style>