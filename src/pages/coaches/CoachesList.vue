<template>
  <div class="container max-w-default-max mx-auto">
    <div>
      <h2
          class="capitalize text-primary-blue text-xl font-bold text-center pt-8 pb-5"
      >
        Find your perfect tech coach
      </h2>
      <div
          class="flex justify-between border-b border-b-slate-200 pb-4 mb-5"
      >
        <base-button mode="outline">Refresh</base-button>
        <base-button
            link
            mode="flat"
            to="/register"
        >
          Register as Coach
        </base-button>
      </div>
    </div>
    <div>
      <div class="mb-9">
        <button>Filter Coaches</button>
      </div>
      <div class="mb-12">
        <h3 class="text-base font-semibold text-primary-blue mb-5">Available
          Coaches</h3>
        <ul v-if="hasCoaches" class="grid grid-cols-4 gap-x-8 gap-y-12">
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
      </div>
    </div>
  </div>
</template>

<script>
import CoachCard from "@/components/coaches/CoachCard";
import BaseButton from "@/components/ui/BaseButton";

export default {
  components: {
    BaseButton,
    CoachCard
  },
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
