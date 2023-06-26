<template>
  <AppHeader :user="user" :rate="rate"/>
  <main>
    <RouterView :user="user" :rate="rate"/>
  </main>
  <AppFooter />
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { userService } from './services/userService'
import { bitcoinService } from './services/bitcoinService'

export default {
  name: 'App',
  data() {
    return {
      user: null,
      rate: null,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        this.user = await userService.getUser()
        const rateResponse = await bitcoinService.getRate()
        this.rate = rateResponse.data
      } catch (error) {
        console.error(error)
      }
    },
  },
  computed: {
    btcRate() {
      return this.rate
    },
  },
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<style lang="scss">

</style>
