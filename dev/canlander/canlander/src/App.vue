<template>
  <div id="app">
    <img src="./assets/logo.png">

    <calendar-input :limit="limit"></calendar-input>
  </div>
</template>

<script>
import Hello from './components/Hello'
import calendarInput from '../node_modules/calendar-plugin/calendar-input.vue';

export default {
  name: 'app',
  components: {
    Hello,
    calendarInput
  },
  data() {
    return {
      limit: {  //日期可选范围
        type: Object,
        default() {
          return {
            minYear: 1900,
            minMonth: 1,
            minDay: 1,
            maxYear: 2030,
            maxMonth: 3,
            maxDay: 20
          }
        }
      }
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
  margin-top: 60px;
}
</style>
