<template>
<li>
  <div class="card">
    <img :src="img" alt="">

    <div>
      <h5>{{ fullName }}</h5>
      <span>${{ rate }}</span>
    </div>

    <div class="">
      <span>Skills</span>
      <div>
        <span v-for="area in areas" :key="area">{{ area }}</span>
      </div>
    </div>

    <div>
      <router-link :to="coachDetailsLink">Contact</router-link>
      <router-link :to="coachContactLink">View Details</router-link>
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