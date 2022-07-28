<script>
  // import data from '../data/data.json'
  import Header from './components/Header.vue'
  import store from './store/store'

  export default {
    data() {
        return {
          // data: data,
          inputValue: "",
          listData: store.state.listData,
          checkedItems: store.state.listData.filter(item => item.checked === true) || [],
          notCheckedItems: store.state.listData.filter(item => item.checked === false) || []
        }
    },
    methods: {
      inputChangeHandler(event) {
        this.inputValue = event.target.value
      },
      submitHandler(event) {
        event.preventDefault()

        if (this.inputValue === "") return
        store.state.visibleItems = true

        const itemData = {
          id: Math.random(),
          inputValue: this.inputValue,
          checked: false
        }

        this.listData.push(itemData)
        localStorage.setItem("items", JSON.stringify(this.listData))
        this.inputValue = ""
      },
      updatingCheckedItems() {
        this.checkedItems = store.state.listData.filter(item => item.checked === true)
      },
      updatingNotCheckedItems() {
        this.notCheckedItems = store.state.listData.filter(item => item.checked === false)
      }
    },
    components: { Header },
  }
</script>

<template>
  <div class="body">
    <Header></Header>
    <div class="to-do-list-container">
      <form action="" @submit="submitHandler">
        <input type="text" placeholder="Enter text" :value="inputValue" @change="inputChangeHandler" />
        <button>Add</button>
      </form>

      <div class="nav-links-container">
        <div class="links-box">
          <router-link to="/all">All</router-link> |
          <router-link to="/checked" @click="updatingCheckedItems">Checked</router-link> |
          <router-link to="/not-checked"  @click="updatingNotCheckedItems">Not checked</router-link>
        </div>
        <router-view 
          :checkedItems="checkedItems" 
          :notCheckedItems="notCheckedItems" 
        ></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
  * {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .to-do-list-container {
    padding-top: 20px;
    width: 400px;
    margin: auto;
  }

  .to-do-list-container input[type="text"] {
    padding: 10px;
    border: 1px solid black;
    border-radius: 3px;
    margin-right: 5px;
    font-size: 18px;
    margin-bottom: 15px;
    width: 83.5%;
  }

  .to-do-list-container form button {
    padding: 10px 13px;
    border-radius: 3px;
    cursor: pointer; 
    font-size: 18px;
    border: 1px solid black;
    background-color: rgb(104, 91, 189);
    color: white;
  }

  .nav-links-container a {
    font-weight: 600;
    text-decoration: none;
  }

  .nav-links-container .links-box {
    text-align: center;
  }
</style>
