<template>
  <li class="my-4 py-2 bg-blue-50 border border-blue-200 rounded-xl">
    <div class="px-4 py-1">
      <span class="text-xs text-slate-400">Name</span>
      <p class="text-slate-800 text-base">{{ name }}</p>
    </div>
    <div class="px-4 py-1">
      <span class="text-xs text-slate-400">Email</span>
      <a
          class="text-green-500 text-base block "
          :href="emailLink"
      >luigi@test.com</a>
    </div>
    <div class="px-4 py-1">
      <span class="text-xs text-slate-400">Mobile Number</span>
      <p class="text-slate-800 text-base">{{ mobile }}</p>
    </div>
    <div class="px-4 py-1">
      <span class="text-xs text-slate-400">Message</span>
      <p class="text-slate-800 text-base">{{ message }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ['name', 'email', 'mobile', 'message'],
  computed: {
    emailLink() {
      return 'mailto:' + this.email;
    }
  }
}
</script>