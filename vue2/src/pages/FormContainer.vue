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
import Form from './Form'

export default {
  components: {
    Form
  },
  data() {
    return {
      user: {
        name: ''
      }
    }
  }

}

</script>