<template>
  <section>
    Filter
  </section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
<!--      <li v-for="coach in filteredCoaches" :key="coach.id">-->
<!--        <p class="text-base">{{ coach.firstName }}</p>-->
<!--        <img :src="coach.img" alt="">-->
<!--      </li>-->
      <coach-card
          v-for="coach in filteredCoaches" :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
          :img="coach.img"
      ></coach-card>
    </ul>
    <h3 v-else>No coaches found</h3>
  </section>
</template>

<script>

import CoachCard from "@/components/coaches/CoachCard";
export default {
  components: {CoachCard},
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    }
  }
}
</script>
