<template>
  <header class="bg-nav-dark">
    <nav
        class="container mx-auto max-w-default-max flex justify-between py-6"
    >
      <h1
          class="text-white text-xl font-bold"
      >
        <router-link to="/">Find a Coach</router-link>
      </h1>
      <ul class="flex items-center">
        <li class="text-white">
          <router-link to="/coaches" class="link-btn">All
            Coaches</router-link>
        </li>
        <li class="text-white">
          <router-link to="/requests" class="link-btn">All
            Requests</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style scoped>
.link-btn {
  @apply text-sm px-3 py-2 ml-3 border border-transparent rounded-lg
  hover:border hover:border-blue-500 hover:text-blue-500 transition
  duration-300;
}
.link-btn.router-link-active {
  @apply border-blue-500 text-blue-500
}
</style>