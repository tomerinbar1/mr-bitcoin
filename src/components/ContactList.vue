<template>
  <div class="contact-list">
    <ContactFilter @filter="onSetFilterBy" />
    <table>
      <thead>
        <tr>
          <th>Contact Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact._id">
          <ContactPreview :contact="contact" @remove="onRemoveContact" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ContactFilter from './ContactFilter.vue'
import ContactPreview from './contactPreview.vue'
export default {
  name: 'ContactList',
  props: ['contacts'],
  methods: {
    onRemoveContact(contactId) {
      this.$emit('remove', contactId)
    },
    onSetFilterBy(filterBy) {
      this.$emit('filter', filterBy)
    },
  },
  components: {
    ContactPreview,
    ContactFilter,
  },
}
</script>

<style lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-1000px);
}
</style>
