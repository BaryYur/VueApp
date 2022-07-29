<script>
  import ListItem from './ListItem.vue'
  import store from '../store/store'

  export default {
    data() {
        return {
            listData: store.state.listData
        }
    },
    methods: {
        deleteAllItemsHandler() {
            this.listData = []
            localStorage.setItem('items', JSON.stringify([]))
        },
        checkAllItemsHandler() {
            let newData = store.state.listData.filter(item => item.checked = true)
            localStorage.setItem('items', JSON.stringify(newData))
        }
    },
    components: { ListItem }
  }
</script>

<template>
    <div>
        <div class="all-header">
            <p class="all-title">All items:</p>
            <div class="btns-container">
                <button @click="deleteAllItemsHandler" class="delete-all-btn">Delete all</button>
                <button @click="checkAllItemsHandler" class="check-all-btn">Check all</button>
            </div>
        </div>
        <ul v-if="listData.length > 0">  
            <ListItem />
        </ul>
        <ul v-else></ul>
    </div>
</template>

<style  scoped>
    .all-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .all-title {
        font-size: 18px;
        font-weight: 600;
    }

    ul {
        padding-left: 0;
    }
 
   .delete-all-btn {
        background-color: red;
        padding: 8px 13px;
        border: none;
        color: white;
        font-weight: 600;
        border-radius: 3px;
        cursor: pointer;
    }

    .delete-all-btn:hover {
        background-color: rgb(250, 69, 69);
    }

    .check-all-btn {
        background-color: royalblue;
        padding: 8px 13px;
        border: none;
        color: white;
        font-weight: 600;
        border-radius: 3px;
        cursor: pointer;
        margin-left: 10px;
    }

    .check-all-btn:hover {
        background-color: rgb(113, 145, 243);
    }
</style>