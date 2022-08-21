<template>
  <section
      class="bg-white max-w-[630px] mx-auto px-8 py-3 my-16 shadow-detail-shadow rounded-lg"
  >
    <h3 class="font-bold text-lg text-primary-blue text-center">
      Requests Received
    </h3>

    <ul v-if="hasRequests">
      <request-item
          v-for="request in receivedRequests" :key="request.id"
          :name="request.userName"
          :email="request.userEmail"
          :mobile="request.userMobile"
          :message="request.message"
      >
      </request-item>
    </ul>

    <div v-else>
      <p class="text-center text-sm text-slate-700 py-4">
        You have not received any requests yet
      </p>
    </div>
  </section>
</template>

<script>
import RequestItem from "@/components/requests/RequestItem";

export default {
  name: 'RequestsReceived',
  components: {
    RequestItem
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    }
  }
}
</script>