<template>
  <div class="flex gap-5 justify-center my-20">
    <!--    Coach Details-->
    <div
        class="bg-white max-w-[352px] min-h-[650px] flex flex-col gap-2 px-3 py-3 shadow-detail-shadow rounded-lg">
      <div>
        <img
            :src="coachImg"
            alt="Coach Image"
            class="w-full h-[288px] object-cover object-fit rounded-lg block"
        >
      </div>

      <div class="flex flex-col justify-between py-2">
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
      </div>
    </div>

    <!--  Contact Coach Form-->
    <form
        class="bg-white shadow-detail-shadow rounded-lg w-[480px] rounded-lg px-4 py-3"
        @submit.prevent="submitForm"
    >
      <div class="mb-4 mt-2">
        <h3 class="text-lg font-bold text-primary-blue">Reach Out to Coach</h3>
        <p class="text-sm text-slate-500">Connect with this coach and send a message</p>
      </div>

      <div class="form-control">
        <label for="name" class="input-label">Name</label>
        <input
            type="text"
            id="name"
            class="form-input"
            :class="{ invalid: !formIsValid }"
            v-model.trim="name"
        >
        <p class="text-xs text-red-400 mt-1" v-if="!formIsValid">Please enter your name</p>
      </div>
      <div class="form-control">
        <label for="email" class="input-label">Email</label>
        <input
            type="email"
            id="email"
            class="form-input"
            :class="{ invalid: !formIsValid }"
            v-model.trim="email"
        >
        <p class="text-xs text-red-400 mt-1" v-if="!formIsValid">Please enter a valid email</p>
      </div>
      <div class="form-control">
        <label for="mobile" class="input-label">Mobile Number</label>
        <input
            type="tel"
            id="mobile"
            class="form-input"
            :class="{ invalid: !formIsValid }"
            v-model.trim="mobile"
        >
        <p class="text-xs text-red-400 mt-1" v-if="!formIsValid">Please enter a valid mobile
          number</p>
      </div>
      <div class="form-control">
        <label for="message" class="input-label">Message</label>
        <textarea
            rows="4"
            id="message"
            class="form-input"
            :class="{ invalid: !formIsValid }"
            v-model.trim="message"
        />
        <p class="text-xs text-red-400 mt-1" v-if="!formIsValid">Please enter your message</p>
      </div>

      <div class="flex">
        <base-button mode="flat" class="mt-4 ml-auto">Send Message</base-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['id'], //id gotten from route
  data() {
    return {
      selectedCoach: null,
      name: '',
      email: '',
      mobile: '',
      message: '',
      formIsValid: true
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
  },
  methods: {
    submitForm() {
      this.formIsValid = true;

      if(
          this.email === '' ||
          !this.email.includes("@") ||
          this.mobile === '' ||
          this.message === ''
      ) {
        this.formIsValid = false;
      }
    }
  }
}
</script>

<style scoped>
.form-control {
  @apply flex flex-col py-2.5;
}

.form-input, textarea {
  @apply bg-white border border-slate-300 rounded-md focus:outline-none
  focus:border-blue-500 focus:ring-1 text-base text-slate-600
  ;
}

.input-label {
  @apply text-sm text-slate-400 mb-1;
}

.invalid {
  @apply border-red-400;
}
</style>