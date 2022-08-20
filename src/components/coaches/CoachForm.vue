<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstname" class="input-label">Firstname</label>
      <input type="text" id="firstname" class="form-input"
             v-model.trim="firstName">
    </div>

    <div class="form-control">
      <label for="lastname" class="input-label">Lastname</label>
      <input type="text" id="lastname" class="form-input" v-model.trim="lastName">
    </div>

    <div class="form-control">
      <label for="description" class="input-label">Description</label>
      <textarea id="description" rows="4" class="textarea-input"
                v-model.trim="description">
      </textarea>
    </div>

    <div class="form-control">
      <label for="rate" class="input-label">Hourly Rate</label>
      <input type="number" id="rate" class="form-input" v-model.number="rate">
    </div>

    <div class="form-control">
      <h3 class="input-label">Area of Expertise</h3>
      <div class="flex gap-2 items-center mb-1">
        <input type="checkbox" id="frontend" value="frontend"
               class="checkbox-input"
               v-model="areas"
        >
        <label for="frontend" class="checkbox-label">Frontend</label>
      </div>
      <div class="flex gap-2 items-center mb-1">
        <input type="checkbox" id="backend" value="backend"
               class="checkbox-input"
               v-model="areas"
        >
        <label for="frontend" class="checkbox-label">Backend</label>
      </div>
      <div class="flex gap-2 items-center mb-1">
        <input type="checkbox" id="design" value="design"
               class="checkbox-input"
               v-model="areas"
        >
        <label for="frontend" class="checkbox-label">Design</label>
      </div>
      <div class="flex gap-2 items-center mb-1">
        <input type="checkbox" id="career" value="career"
               class="checkbox-input"
               v-model="areas"
        >
        <label for="frontend" class="checkbox-label">Career Advisory</label>
      </div>

      <div class="form-control">
        <label for="frontend" class="input-label">Photo</label>
        <input type="file" class="file-input" @change="onFile">
        <img :src="photo" alt="" v-if="photo"
             class="mt-3 rounded-xl h-32 py-2 object-contain border border-dashed border-blue-500 bg-blue-50">
      </div>
    </div>
    <base-button mode="flat" class="w-full mt-3">Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['input-data'],
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: '',
      areas: [],
      photo: ''
    }
  },

  methods: {
    onFile(e) {
      const files = e.target.files
      if (!files.length) return

      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => (this.photo = reader.result)
    },
    submitForm() {
      const formData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        rate: this.rate,
        areas: this.areas,
        img: this.photo
      }
      console.log(formData);

      this.$emit('input-data', formData);
    }
  }
}
</script>

<style scoped>
.form-control {
  @apply flex flex-col py-2.5;
}
.form-input, .textarea-input {
  @apply bg-white border border-slate-300 rounded-md focus:outline-none
  focus:border-blue-500 focus:ring-1 text-base text-slate-600;
}
.input-label {
  @apply text-sm text-slate-400 mb-1;
}
.checkbox-label {
  @apply text-sm text-slate-700;
}
.checkbox-input {
  @apply border border-slate-400 checked:bg-green-500 focus:bg-green-200
  text-green-500 outline-0 rounded-sm h-4 w-4 focus:ring-0;
}
.file-input {
  @apply block text-sm text-slate-500 file:mr-2 file:py-2 file:px-4
  file:rounded-full file:rounded-full file:border-0 file:text-sm
  file:font-semibold file:bg-blue-50 file:text-primary-blue
  hover:file:bg-blue-100 focus:outline-none;
}
</style>
