<template>
  <div id="app">

    <div id="sidebar-wrapper">
      <h3>Side Menu</h3>
      <ul class="sidebar-nav">
        <navBar/>
      </ul>
    </div>

    <div slot="page-content-wrapper" id="page-content-wrapper">
      <img src="./assets/logo.png">
      <h1>Brett X Vue</h1>
      <router-view/>
    </div>
  </div>
  
</template>

<script>
import navBar from './components/common/NavBar';
export default {
  name: 'App',
  components: {
    navBar
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
    margin-top: 60px;
  }

  #header {
    width: 100%;
    padding: 20px;
    font-size: x-large;
  }

  #sidebar-wrapper {
    padding-top: 20px;
    display: table-cell;
    vertical-align: middle;
    position: fixed;
    width: 170px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .sidebar-nav {
    width: 170px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #page-content-wrapper {
    padding: 20px;
    margin-left: 170px;
  }
</style>