<template>
  <div class="contacts">
    <ContactList
      v-if="contacts"
      :contacts="filteredContacts"
      @remove="onRemoveContact"
      @filter="onSetFilterBy"
    />
  </div>
</template>

<script>
import { contactService } from '../services/contactService.js'
import ContactList from '../components/ContactList.vue'
export default {
  name: 'Contacts',
  data() {
    return {
      contacts: null,
      filterBy: {
        term: '',
        filterBy: 'name',
      },
    }
  },
  async created() {
    try {
      this.contacts = await contactService.getContacts(this.filterBy)
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    async onRemoveContact(contactId) {
      await contactService.deleteContact(contactId)
      this.contacts = this.contacts.filter(contact => contact._id !== contactId)
    },
    onSetFilterBy(filterBy) {
      this.filterBy = filterBy
    },
  },
  computed: {
    filteredContacts() {
      if (!this.filterBy) return this.contacts
      const searchStr = this.filterBy.term.toLowerCase()
      const filteredContacts = this.contacts.filter(contact => {
        return (
          contact.name.toLowerCase().includes(searchStr) ||
          contact.phone.toLowerCase().includes(searchStr) ||
          contact.email.toLowerCase().includes(searchStr)
        )
      })
      return filteredContacts
    },
  },
  components: {
    ContactList,
  },
}
</script>

<style lang="scss"></style>
