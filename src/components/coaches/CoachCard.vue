<template>
<li>
  <div
      class="px-3 py-3 rounded-lg bg-white drop-shadow-xl hover:-translate-y-1 transition-all hover:drop-shadow-2xl h-card-height flex flex-col justify-between"
  >
    <div>
      <img
          :src="img"
          alt="Coach Image"
          class="w-full h-60 object-cover object-fit rounded-lg"
      >

      <div class="mt-2 mb-4">
        <h5 class="text-lg font-bold text-primary-blue">{{ fullName }}</h5>
        <span class="text-sm text-slate-500">${{ rate }}</span>
      </div>

      <div class="mb-5">
        <span class="uppercase text-xs text-slate-400">Skills</span>
        <div class="flex gap-2 flex-wrap">
          <base-badge
              v-for="area in areas" :key="area"
              :title="area"
              :type="area"
          ></base-badge>
        </div>
      </div>
    </div>

    <div class="flex justify-between gap-2">
      <base-button
          link
          mode="outline"
          :to="coachDetailsLink"
          class="w-1/2"
      >
        View Details
      </base-button>
      <base-button
          link
          mode="flat"
          :to="coachContactLink"
          class="w-1/2"
      >
        Contact
      </base-button>
    </div>
  </div>
</li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas', 'img'],
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    coachContactLink() {
      //return `/coaches/${this.id}/contact`;
      return `${this.$route.path}/${this.id}/contact`;
    },
    coachDetailsLink() {
      // return `/coaches/${this.id}`;
      return `${this.$route.path}/${this.id}`;
    }
  }
}
</script>