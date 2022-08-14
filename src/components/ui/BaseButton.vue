<template>
  <button v-if="!link" :class="mode" class="btn">
    <slot></slot>
  </button>

  <router-link v-else :to="to" :class="mode" class="btn">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>

<style scoped>
.btn {
  @apply text-sm text-primary-blue px-4 py-2 inline-block text-center border
  border-primary-blue outline-0 rounded-lg transition-all;
}

.outline {
  @apply bg-blue-50 hover:bg-blue-100;
}

.flat {
  @apply text-white bg-primary-blue hover:bg-blue-800;
}
</style>