<template>
<div>
  <div class="row">
    <p>Name:</p>
    <input type="text" v-model="innerUser.name">
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { User } from '../domain/User'

export default defineComponent({

  props: {
    user: User
  },

  setup(props) {
    return {
      innerUser: props.user!
    }
  }

})

</script>