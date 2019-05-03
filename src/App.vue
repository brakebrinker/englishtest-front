<template>
    <div id="app">
        <div class="container">
            <app-header></app-header>
            <img src="./assets/logo.png">
            <router-view/>
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
