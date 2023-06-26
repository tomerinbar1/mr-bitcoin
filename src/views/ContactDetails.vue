<template>
  <div class="contact-details" v-if="contact">
    <img :src="contactImage" alt="img" />
    <h2>{{ contact.name }}</h2>
    <h3>{{ contact.email }}</h3>
    <h3>{{ contact.phone }}</h3>
    <router-link to="/contact">Back</router-link>
  </div>
</template>

<script>
import { contactService } from '../services/contactService.js'
import maleImage from '../assets/img/contactsImgs/male/1.jpg'
import femaleImage from '../assets/img/contactsImgs/female/1.jpg'

export default {
  name: 'ContactDetails',
  data() {
    return {
      contact: null,
      contactImage: null,
    }
  },
  created() {
    const contactId = this.$route.params.id
    this.fetchContactDetails(contactId)
  },
  methods: {
    async fetchContactDetails(contactId) {
      try {
        this.contact = await contactService.getContactById(contactId)
        this.loadContactImage()
      } catch (error) {
        console.error(error)
      }
    },
    loadContactImage() {
      this.contactImage =
        this.contact.gender === 'male' ? maleImage : femaleImage
    },
  },
}
</script>

<style lang="scss"></style>
