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
            v-if="!isCoach"
        >
          Register as Coach
        </base-button>
      </div>
    </div>
    <div>
      <div class="mb-9">
        <coach-filter @change-filter="setFilters"></coach-filter>
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
import CoachFilter from "@/components/coaches/CoachFilter"

export default {
  components: {
    BaseButton,
    CoachCard,
    CoachFilter
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        design: true,
        career: true
      }
    }
  },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];

      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }

        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }

        if (this.activeFilters.design && coach.areas.includes('design')) {
          return true;
        }

        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }

        return false;
      })
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    }
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters
    }
  }
}
</script>
