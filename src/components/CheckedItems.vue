<script>
    import ListItem from './ListItem.vue'

    export default {
        props: {
            deleteItem: Function,
            checkedItems: Array
        },
        components: { ListItem },
    }
</script>

<template>
    <div>
        <p>Checked items:</p>
        <ul>
            <li v-for="item in checkedItems">
                <!-- <input type="checkbox" :id="item.id" /> -->
                <span>&check;</span>
                <label :for="item.id">{{ item.inputValue }}</label>
                <!-- <button class="del-button" @click="deleteItem(item.id)">del</button> -->
            </li>
        </ul>
    </div>
</template>

<style scoped>
    p {
        margin: 10px 0 40px 0;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
    }

    ul {
        padding-left: 0;
    }

    ul li {
        justify-content: center;
    }

    li {
        display: block;
        position: relative;
    }

    li span {
        margin-right: 20px;
        color: rgb(71, 199, 71);
    }
</style>