<template>
  <teleport to="body">
    <div v-if="show"
         @click="tryClose"
         class="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-60 z-10"
    ></div>
    <transition name="dialog">
      <dialog
          open v-if="show"
          class="fixed w-2/5 mx-auto mt-28 inset-0 z-[100] rounded-xl border-0 shadow-2xl p-0 m-0
                 overflow-hidden bg-white"
      >
        <header class="bg-primary-blue text-white w-full p-4">
          <slot name="header">
            <h2 class="m-0">{{ title }}</h2>
          </slot>
        </header>
        <section class="p-4">
          <slot></slot>
        </section>
        <menu v-if="!fixed" class="p-4 flex justify-end m-0">
          <slot name="actions">
            <base-button @click="tryClose">Close</base-button>
          </slot>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['close'],
  methods: {
    tryClose() {
      if (this.fixed) return;
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.backdrop {
  @apply fixed top-0 left-0 h-screen w-full bg-slate-400 z-10;
}

/*Before opening and after closing*/
.dialog-enter-from,
.dialog-leave-to {
  @apply opacity-0 scale-75
  /*opacity: 0;*/
  /*transform: scale(0.8);*/
}

/*When opening*/
.dialog-enter-active {
  @apply transition-all duration-300 ease-out;
  /*transition: all .3s ease-out;*/
}

/*When closing*/
.dialog-leave-active {
  @apply transition-all duration-300 ease-out;
  /*transition: all .3s ease-out;*/
}

/*After opening and before closing*/
.dialog-enter-to,
.dialog-leave-from{
  @apply opacity-100 scale-100;
  /*opacity: 1;*/
  /*transform: scale(1);*/
}
</style>