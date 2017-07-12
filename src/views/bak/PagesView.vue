<template>
  <div class="pages-view">
    <header-bar></header-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'

export default {
  name: 'pages-view',
  components: { HeaderBar },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
