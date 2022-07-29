import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            listData: JSON.parse(localStorage.getItem("items")) || [],
        }
    }
})

export default store