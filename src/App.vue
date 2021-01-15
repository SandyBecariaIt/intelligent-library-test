<template>
  <div id="app">
    <Sidebar>
      <router-view></router-view>
    </Sidebar>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>
