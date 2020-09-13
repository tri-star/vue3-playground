<template>
<div>
  <div class="row">
    <p>Name:</p>
    <input type="text" v-model="store.user.name">
  </div>
</div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useUserFormStore } from "./userFormStore";

export default defineComponent({

  setup(props, context) {

    const store = useUserFormStore()

    return {
      store
    }
  }

})

</script>