<template>
<div>
  <div class="row">
    <p>Name:</p>
    <input type="text" v-model="user.name">
  </div>
</div>
</template>

<script>

export default {

  props: {
    user: {
      type: Object,
      required: true
    }
  },


}

</script>