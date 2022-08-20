<template>
  <div>
    <h6 class="text-slate-400 text-base mb-2">Filter Coaches</h6>
   <div class="flex gap-4">
      <span class="flex items-center gap-1">
      <label for="frontend" class="text-slate-7 00">Frontend</label>
      <input
          type="checkbox"
          id="frontend"
          checked
          class="checked:bg-green-500 focus:bg-green-200 text-green-500 outline-0 rounded-sm h-4 w-4 focus:ring-0"
          @change="setFilter"
      >
    </span>
     <span class="flex items-center gap-1">
      <label for="backend" class="text-slate-7 00">Backend</label>
      <input
          type="checkbox"
          id="backend"
          checked
          class="checked:bg-green-500 focus:bg-green-200 text-green-500 outline-0 rounded-sm h-4 w-4 focus:ring-0"
          @change="setFilter"
      >
    </span>
     <span class="flex items-center gap-1">
      <label for="design" class="text-slate-7 00">Design</label>
      <input
          type="checkbox"
          id="design"
          checked
          class="checked:bg-green-500 focus:bg-green-200 text-green-500 outline-0 rounded-sm h-4 w-4 focus:ring-0"
          @change="setFilter"
      >
    </span>
     <span class="flex items-center gap-1">
      <label for="career" class="text-slate-7 00">Career</label>
      <input
          type="checkbox"
          id="career"
          checked
          class="checked:bg-green-500 focus:bg-green-200 text-green-500 outline-0 rounded-sm h-4 w-4 focus:ring-0"
          @change="setFilter"
      >
    </span>
   </div>
  </div>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        design: true,
        career: true
      }
    }
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id; //frontend, backend, design, career
      const isActive = event.target.checked; //true, false

      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      }

      this.filters = updatedFilters;

      //Send event and data to parent component
      this.$emit('change-filter', updatedFilters);
    }
  }

}
</script>