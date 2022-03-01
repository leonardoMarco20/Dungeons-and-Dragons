<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',

  created() {
    if(localStorage.getItem('token') === null) {
      this.$router.push('/login')
    }
  }
})
</script>
