<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from "@/components/Layout/TheHeader";

export default {
  name: 'App',
  components: {
    TheHeader

  }
}
</script>

<style>
body {
  background-color: #F8F8F8;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all .3s ease-out;
}
.route-leave-active {
  transition: all .3s ease-in;
}
.route-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
