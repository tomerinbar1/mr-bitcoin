<template>
  <section class="contact-filter">
    <form @submit.prevent="emitFilter">
      <input type="text" v-model="filterBy.term" placeholder="Search contact" />
      <select v-model="filterBy.filterBy">
        <option value="name">Name</option>
        <option value="phone">Phone</option>
        <option value="email">Email</option>
      </select>
      <button type="submit">Search</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactFilter',
  data() {
    return {
      filterBy: {
        term: '',
        filterBy: 'name',
      },
    }
  },
  methods: {
    emitFilter() {
      this.$emit('filter', this.filterBy)
    },
  },
}
</script>
