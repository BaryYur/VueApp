import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            listData: JSON.parse(localStorage.getItem("items")) || [],
            checkedListData: JSON.parse(localStorage.getItem("items")).filter(item => item.checked === true) || [],
            notCheckedListData: JSON.parse(localStorage.getItem("items")).filter(item => item.checked === false) || [],
        }
    }
})

export default store