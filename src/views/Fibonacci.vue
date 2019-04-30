<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Fibonacci/>
  </div>
</template>

<script>
// @ is an alias to /src
import Fibonacci from '@/components/Fibonacci.vue'

export default {
  name: 'fibonacci',
  components: {
    Fibonacci
  }
}
</script>