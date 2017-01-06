<template>
    <div id="app">
        <img src="../assets/logo.png">
        <h1>{{ msg }}</h1>
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            msg: '开始使用Vue开发单页面应用'
        }
    }
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.nav-bar-text {
    font-size: 22px;
    margin-right: 35px;
}
</style>
