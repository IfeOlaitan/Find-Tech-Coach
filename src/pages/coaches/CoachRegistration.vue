<template>
  <div class="container max-w-xl mx-auto my-16">
    <section class="shadow-detail-shadow px-8 py-6 rounded-xl bg-white">
      <h2 class="text-xl text-primary-blue font-bold text-center mb-1">
        Register as a Coach Now!
      </h2>
      <p class="text-center text-sm text-slate-600">Become a Tech Coach Today</p>
      <coach-form @input-data="saveData"></coach-form>
    </section>
  </div>
</template>

<script>
import CoachForm from "@/components/coaches/CoachForm.vue";

export default {
  components: {
    CoachForm
  },
  methods: {
    saveData(data) {
      //Send form data to registerCoach data action
      this.$store.dispatch('coaches/registerCoachData', data);

      //Redirect page to All coaches page
      this.$router.replace('/coaches');
    }
  }
}
</script>