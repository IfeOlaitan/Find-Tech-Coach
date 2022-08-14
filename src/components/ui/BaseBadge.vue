<template>
  <span
      class="text-xs py-1 px-3 rounded-full capitalize mt-1 inline-block"
      :class="type"
  >
    {{title }}
  </span>
</template>

<script>
export default {
  props: ['title', 'type']
}
</script>

<style scoped>
.frontend {
  @apply text-orange-600 bg-orange-50;
}

.backend {
  @apply text-slate-900 bg-slate-100;
}

.career {
  @apply text-green-600 bg-green-50;
}

.design {
  @apply text-purple-600 bg-purple-50;
}
</style>