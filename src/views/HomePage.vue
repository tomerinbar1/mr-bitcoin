<template>
  <div class="home-wrapper">
    <div class="user-info" v-if="user">
      <h2>Hello {{ user.name }}!</h2>
      <h3>Your balance is: {{ user.balance }} coins</h3>
      <h3>BTC/USD rate: {{ rate }}$</h3>
    </div>
    <div v-else>Loading user data...</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: ['user', 'rate'],
}
</script>

<style lang="scss"></style>
