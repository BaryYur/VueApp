<script>
  import ListItem from './ListItem.vue'
  import store from '../store/store'

  export default {
    data() {
        return {
            visibleItems: store.state.visibleItems
        }
    },
    methods: {
        deleteAllItemsHandler() {
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
        <p class="all-title">All items:</p>
        <div class="btns-container">
            <button @click="deleteAllItemsHandler" class="delete-all-btn">Delete all</button>
            <button @click="checkAllItemsHandler" class="check-all-btn">Check all</button>
        </div>
        <ul> 
            <ListItem />
        </ul>
    </div>
</template>

<style  scoped>
    .all-title {
        text-align: center;
        margin: 10px 0;
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

    .btns-container {
        display: flex;
        justify-content: center;
    }
</style>