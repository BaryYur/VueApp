<script>
    // export default {
    //     props: {
    //         counter: Number,
    //         increment: Function,
    //         decrement: Function
    //     }
    // }
</script>

<template>
  <div class="header">
    <h1>My first Vue App</h1>
    <hr />
    <!-- <div class="counter-container">
    <button @click="increment">-</button>
    <p>Counter {{ counter }}</p>
    <button @click="decrement">+</button> 
    </div> -->
  </div>
</template>

<style>
  body .header {
    padding: 0 10px;
  }

  hr {
    margin: 5px 0 10px 0;
  }

  input, 
  button {
    outline: none;
  }

  .counter-container {
    display: flex;
    height: 40px;
    align-items: center;
  }

  .counter-container p {
    margin: 0 10px;
    font-size: 25px;
  }

  .counter-container button {
    padding: 5px 10px;
  }
</style>