<template>
  <header class="app-header">
    <div class="logo">
      <router-link to="/">
        <img src="../assets//img/icons/bitcoin-btc-logo.svg" alt="logo" />
      </router-link>
    </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/contact">Contacts</router-link> |
      <router-link to="/statistic">Statistic</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <div class="user-info" v-if="user">
      <h2>{{ user.name }}</h2>
      <h3>BTC/USD: {{ rate }}$</h3>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: ['user', 'rate'],
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: #f5f5f5;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  height: 3rem;
  .logo {
    img {
      height: 30px;
    }
  }
  nav {
    a {
      margin: 0 0.5rem;
      text-decoration: none;
      color: #333;
      padding: 0.7em;
      &:hover {
        background-color: #838383;
        color: #fff;
        border: none;
        border-radius: 8px;
        opacity: 0.9;
        transition: all 0.3s ease-in-out;
      }
    }
  }
  .user-info {
    h2 {
      font-size: 1.2rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
}
</style>
