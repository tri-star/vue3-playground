<template>
  <div>
    <h1>Menu</h1>
    <ul>
      <li><router-link :to="{ path: '/Object' }">Object</router-link></li>
      <li><router-link :to="{ path: '/form-emit' }">FormContainer(emit)</router-link></li>
      <li><router-link :to="{ path: '/form-provider' }">FormContainer(Provider)</router-link></li>
      <li><router-link :to="{ path: '/store'}">Store</router-link></li>
      <li>Effect</li>
      <li>Computed</li>
      <li>Provider</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
  }
})

</script>