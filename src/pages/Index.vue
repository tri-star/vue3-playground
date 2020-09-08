<template>
  <div>
    <h1>Menu</h1>
    <ul>
      <li><router-link :to="{ path: '/Object' }">Object</router-link></li>
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