<template>
  <div class="hello">
    <input type="text" ref="txt1" id="txt1" value="123">
    <input type="text" id="txt2" value="456">
    <h1 v-once>{{ msg }}</h1>
    <h1>{{ reversedText }}</h1>
    <h1>{{ reversedText22() }}</h1>
    <input type="text" v-model="msg" placeholder="Input your name">

    <a :href="baiduUrl" target="_blank">baidu</a>

    <button v-if="showButton" ref="button1">看到我了</button>
    <button @click="showOrHideButton">showOrHideButton</button>

    <label for="txt3x"></label>
    <input type="text" id="txt3x" v-focus v-if="status == 1"/>
    <input type="text" v-model="status"/>

    <ul>
      <li v-for="book in books" :key="book.id">{{ book.name }}</li>
    </ul>

    <button @click="addBook">加本书</button>

  </div>
</template>

<script src="../assets/js/index.js"></script>

<style>
</style>
