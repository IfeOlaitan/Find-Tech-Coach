<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !firstName.isValid}">
      <label for="firstname" class="input-label">Firstname</label>
      <input
          type="text"
          id="firstname"
          class="form-input"
          :class="{ inputInvalid: !firstName.isValid }"
          v-model.trim="firstName.val"
          @blur="clearInputValidityError('firstName')"
      >
      <p v-if="!firstName.isValid" class="mt-1">Kindly enter First name</p>
    </div>

    <div class="form-control" :class="{invalid: !lastName.isValid}">
      <label for="lastname" class="input-label">Lastname</label>
      <input
          type="text"
          id="lastname"
          class="form-input"
          :class="{ inputInvalid: !lastName.isValid }"
          v-model.trim="lastName.val"
          @blur="clearInputValidityError('lastName')"
      >
      <p v-if="!lastName.isValid" class="mt-1">Kindly enter Last name</p>
    </div>

    <div class="form-control" :class="{invalid: !description.isValid}">
      <label for="description" class="input-label">Description</label>
      <textarea
          id="description"
          rows="4"
          class="textarea-input"
          :class="{ inputInvalid: !description.isValid }"
          v-model.trim="description.val"
          @blur="clearInputValidityError('description')"
      >
      </textarea>
      <p v-if="!description.isValid" class="mt-1">Kindly enter description</p>
    </div>

    <div class="form-control" :class="{invalid: !rate.isValid}">
      <label for="rate" class="input-label">Hourly Rate</label>
      <input
          type="number"
          id="rate"
          class="form-input"
          :class="{ inputInvalid: !rate.isValid }"
          v-model.number="rate.val"
          @blur="clearRateValidityError"
      >
      <p v-if="!rate.isValid" class="mt-1">Kindly enter rate more than 0</p>
    </div>

    <div class="form-control" :class="{invalid: !areas.isValid}">
        <h3 class="input-label">Area of Expertise</h3>
        <div class="flex gap-2 items-center mb-1">
          <input
              type="checkbox" id="frontend"
              value="frontend"
              class="checkbox-input"
              v-model="areas.val"
              @blur="clearAreasValidityError"
          >
          <label for="frontend" class="checkbox-label">Frontend</label>
        </div>
        <div class="flex gap-2 items-center mb-1">
          <input
              type="checkbox"
              id="backend"
              value="backend"
              class="checkbox-input"
              v-model="areas.val"
              @blur="clearAreasValidityError"
          >
          <label for="frontend" class="checkbox-label">Backend</label>
        </div>
        <div class="flex gap-2 items-center mb-1 ">
          <input
              type="checkbox"
              id="design"
              value="design"
              class="checkbox-input"
              v-model="areas.val"
              @blur="clearAreasValidityError"
          >
          <label for="frontend" class="checkbox-label">Design</label>
        </div>
        <div class="flex gap-2 items-center mb-1">
          <input
              type="checkbox"
              id="career"
              value="career"
              class="checkbox-input"
              v-model="areas.val"
              @blur="clearAreasValidityError"
          >
          <label for="frontend" class="checkbox-label">Career Advisory</label>
        </div>
        <p v-if="!areas.isValid" class="mt-1">
          At least one expertise must be selected
        </p>
    </div>

    <div class="form-control" :class="{invalid: !photo.isValid}">
      <label for="frontend" class="input-label">Photo</label>
      <input
          type="file"
          class="file-input"
          @change="onFile"
          @blur="clearInputValidityError('photo')"
      >
      <p v-if="!photo.isValid" class="mt-1">Kindly add a photo</p>
      <img :src="photo.val" alt="" v-if="photo.val"
           class="mt-3 rounded-xl h-32 py-2 object-contain border border-dashed border-blue-500 bg-blue-50"
      >
    </div>

    <base-button mode="flat" class="w-full mt-3">Register</base-button>
    <p v-if="!formIsValid"
       class="mt-2 text-center"
       :class="{ invalid: !formIsValid }"
    >Please fill all form fields and submit again
    </p>
  </form>
</template>

<script>
export default {
  emits: ['input-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true
      },
      lastName: {
        val: '',
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      rate: {
        val: null,
        isValid: true
      },
      areas: {
        val: [],
        isValid: true
      },
      photo: {
        val: '',
        isValid: true
      },
      formIsValid: true
    }
  },

  methods: {
    onFile(e) {
      const files = e.target.files
      if (!files.length) return

      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => (this.photo.val = reader.result)
    },
    clearInputValidityError(input) {
      if (this[input].val !== '') this[input].isValid = true;
    },
    clearRateValidityError() {
      if (this.rate.val && this.rate.val > 0) this.rate.isValid = true;
    },
    clearAreasValidityError() {
      if (this.areas.val.length !== 0) this.areas.isValid = true;
    },
    validateForm() {
      this.formIsValid = true

      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
      if (this.photo.val === '') {
        this.photo.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) return;

      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
        img: this.photo.val
      }
      // console.log(formData);

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
  focus:border-blue-500 focus:ring-1 text-base text-slate-600 invalid:border-pink-500
  ;
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

.invalid {
  @apply text-red-500 text-xs border-red-400;
}

.inputInvalid {
  @apply border-red-300;
}
</style>
