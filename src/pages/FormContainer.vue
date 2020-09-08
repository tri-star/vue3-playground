<template>
<div>
  <Form :user="user"/>
  <div>
    <p>Container side user:</p>
    {{ user }}
  </div>
</div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import Form from './Form'
import { User } from '../domain/User'

export default defineComponent({
  components: {
    Form
  },
  setup() {

    const user = reactive(new User())

    return {
      user
    }
  }

})

</script>