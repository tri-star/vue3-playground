<template>
<div>
  <Form />
  <div>
    <p>Container side user:</p>
    {{ store.user }}
  </div>
  <div class="row">
    <button @click="store.loadUser">ロード</button>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, inject, provide } from "vue";
import Form from './Form.vue'
import userFormStore, { userFormStoreKey } from './userFormStore'

export default defineComponent({
  components: {
    Form
  },
  setup() {

    const store = userFormStore()
    provide(userFormStoreKey, store)
    
    return {
      store
    }
  }

})

</script>