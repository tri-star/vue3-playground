<template>
<div>
  <Form :user="user" @update="updateUserHandler"/>
  <div>
    <p>Container side user:</p>
    {{ user }}
  </div>
</div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import Form from './Form'
import { User } from '../domain/User'

export default defineComponent({
  components: {
    Form
  },
  setup() {

    const user = reactive(new User())
    // この方法だと型で制限できない
    const updateUserHandler = (payload) => {
      user[payload.key] = payload.value
    }

    return {
      user,
      updateUserHandler
    }
  }

})

</script>