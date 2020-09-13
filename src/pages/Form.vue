<template>
<div>
  <div class="row">
    <p>Name:</p>
    <input type="text" v-model="userName">
  </div>
</div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { User } from '../domain/User'

export default defineComponent({

  props: {
    user: User
  },

  setup(props, context) {

    const userName = computed({
      get: () => props.user!.name,
      set: (newValue) => context.emit('update', {key: 'name', value: newValue})
    })

    return {
      userName
    }
  }

})

</script>