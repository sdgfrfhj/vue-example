<template>
  <div id="app">
  <head-info></head-info>
  </div>
</template>

<script>
import HeadInfo from './components/HeadInfo'

export default {
  name: 'app',
  components: {
    'head-info': HeadInfo
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
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to{
  opacity: 0;
}
</style>
