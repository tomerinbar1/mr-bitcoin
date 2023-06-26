<template>
  <td>
    <h2>{{ contact.name }}</h2>
  </td>
  <td>
    <h3>{{ contact.email }}</h3>
  </td>
  <td>
    <h3>{{ contact.phone }}</h3>
  </td>
  <td>
    <button @click="onRemoveContact(contact._id)">X</button>
    <router-link :to="'/contact/' + contact._id">Details</router-link>
  </td>
</template>

<script>
export default {
  name: 'ContactPreview',
  props: ['contact'],
  emits: ['remove'],
  methods: {
    onRemoveContact(contactId) {
      this.$emit('remove', contactId)
    },
  },
}
</script>

<style lang="scss"></style>
