<script>
  import store from '../store/store'

  export default {
    data() {
      return {
        data: store.state.listData
      }  
    },
    methods: {
      checkingItemHandler(id) {
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].id === id) {
            localStorage.setItem("items", JSON.stringify(this.data))
          }
        }
      },
      deleteItemHandler(id) {
        store.state.listData = store.state.listData.filter(item => item.id !== id)
        localStorage.setItem("items", JSON.stringify(this.data.filter(item => item.id !== id)))
        this.data = this.data.filter(item => item.id !== id)
      },
    }
  }
</script>

<template>
    <li v-for="item in data">
      <input type="checkbox" v-model="item.checked" v-bind:id="item.id" @change="checkingItemHandler(item.id)" />
      <label :for="item.id">{{ item.inputValue }}</label>
      <button class="del-button" @click="deleteItemHandler(item.id)">&#x2716;</button>
    </li>
</template>

<style>
  li {
    padding: 10px 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li label {
    font-size: 19px;
  }

  li input {
    width: 18px;
    height: 18px;
  }

  .del-button {
    border-radius: 4px;
    background-color: indianred;
    color: white;
    font-size: 13px;
    font-weight: 500;
    padding: 2px 6px 4px 6px;
    border: none;
    cursor: pointer;
  }

   .del-button:hover {
    background-color: rgb(243, 122, 122);
   }

  li input:checked + label {
    color: grey;
    text-decoration: line-through;
    transition: all 0.3s ease-in-out;
    font-style: italic;
  }
</style>