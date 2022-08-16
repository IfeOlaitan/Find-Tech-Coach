<template>
<!--  Coach Details-->
<!--  <router-view></router-view>-->
<!--  <router-link to="/coaches/c1/contact">Contact</router-link>-->

  <div class="container max-w-default-max mx-auto my-20">
    <div class="bg-white max-w-4xl mx-auto flex gap-6 px-3 py-3 shadow-detail-shadow rounded-lg">
      <div class="w-2/3">
        <img
            :src="coachImg"
            alt="Coach Image"
            class="w-full h-detail-img-height object-cover object-fit rounded-lg block"
        >
      </div>

      <div class="flex flex-col justify-between py-5">
        <div>
          <div>
            <h5 class="text-2xl font-bold text-primary-blue mb-2">{{ fullName }}</h5>
            <span class="text-base text-slate-500">${{ rate }}</span>
          </div>

          <div class="mt-5 mb-5">
            <span class="uppercase text-xs text-slate-400">Skills</span>
            <div class="flex gap-2 flex-wrap">
              <base-badge
                  v-for="area in areas" :key="area"
                  :title="area"
                  :type="area"
              ></base-badge>
            </div>
          </div>

          <div class="mt-5">
            <span class="uppercase text-xs text-slate-400">Bio</span>
            <p class="text-slate-600">{{ description }}</p>
          </div>
        </div>

        <div>
          <base-button
              link mode="flat"
              :to="contactLink"
              class="w-full"
          >
            Contact Coach
          </base-button>
          <!--        <router-view></router-view>-->
        </div>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  components: {},

  props: ['id'], //id gotten from route
  data() {
    return {
      selectedCoach: null
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach => coach.id === this.id);
  },
  computed: {
    coachImg() {
      return this.selectedCoach.img;
    },
    fullName() {
      return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return `${this.id}/contact`; //coaches/c1/contact
    }
  }
}
</script>