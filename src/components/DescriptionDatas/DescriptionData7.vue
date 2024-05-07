<template>
    <div>
        <h3>屬性說明：</h3>
        <p>
            <code>Library</code>:
            <ul>
                <li><code>book_list</code> 一個列表，存放所有書</li>
                <li><code>member_list</code> 一個列表，存放所有會員</li>
            </ul>
        </p>
        <p>
            <code>Book</code>:
            <ul>
                <li><code>title</code> 書名</li>
                <li><code>author</code> 作者名</li>
                <li><code>ISBN</code> ISBN 編號</li>
                <li><code>is_available</code> 顯示書籍是否可被出借(預設為True)</li>
            </ul>
        </p>
        <p>
            <code>Member</code>:
            <ul>
                <li><code>name</code> 會員名稱</li>
                <li><code>member_id</code> 會員id</li>
                <li><code>books_borrowed</code> 一個list，紀錄已借書籍</li>
            </ul>
        </p>
        <h3>方法說明：</h3>
        <p>
            <code>Library</code>:
            <ul>
                <li><code>add_book(self, book)</code> 將一本書添加到 <code>book_list</code> 。</li>
                <li><code>remove_book(self, book)</code> 從 <code>book_list</code> 移除一本書。</li>
                <li><code>check_book_status(self, book)</code> 檢查一本書是否可供借閱。</li>
                <li><code>add_member(self, member)</code> 將一位新會員添加到 <code>member_list</code> 。</li>
                <li><code>remove_member(self, member)</code> 從 <code>member_list</code> 移除一位會員。</li>
            </ul>
        </p>
        <p>
            <code>Book</code>:
            <ul>
                <li><code>get_info(self)</code> 印出有關書籍的信息，包括標題、作者、ISBN 和可用性狀態。<br/>(ex : 線性代數 Nika ISBN 978-957-678-431-6 Yes)
</li>
                <li><code>change_availability(self, status)</code> 更新書籍的 is_available 狀態。</li>
            </ul>
        </p>
        <p>
            <code>Member</code>:
            <ul>
                <li><code>borrow_book(self, book)</code> 如果書籍可供借閱，允許會員借閱一本書。</li>
                <li><code>return_book(self, book)</code> 允許會員歸還已借閱的書。</li>
                <li><code>display_borrowed_books(self)</code> 顯示已借閱書籍。<br/>(ex : Jack 借了 {線性代數，工程數學})</li>
            </ul>
        </p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
code{
    color: #a5b8ba;
    font-size: 16px;
}
</style>