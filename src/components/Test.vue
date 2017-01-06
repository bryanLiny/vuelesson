<template>
    <div>
        <ul class="test" id="test">
            <li>1111111111111111</li>
        </ul>
        <p>{{msg}}</p>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
        <br>
        <span>Message is: {{ message }}</span>
        <br>
        <input type="text" v-model="message" placeholder="edit me">
        <br>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
        <br>
        <!-- @click 为 v-on:click 的简写形式 -->
        <button class="index" type="button" v-on:click.stop='greet'>点击弹窗</button>
        <br>
        <!-- @keyup.enter 为 v-on:keyup.enter 的简写形式 -->
        <input type="text" @keyup.enter='inputText' />
    </div>
</template>

<script src="../js/test.js"></script>

<style scopped src='../css/test.css'></style>
