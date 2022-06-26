<script>
export default {
  props: ["isOpen", "showModal", "modal", "categories"],
};
</script>

<template>
  <!-- App header navigation links -->
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="
      font-general-regular
      m-0
      sm:ml-4
      mt-5
      sm:mt-3 sm:flex
      p-5
      sm:p-0
      justify-center
      items-center
      shadow-lg
      sm:shadow-none
    "
  >
    <NuxtLink
      to="/projects"
      class="
        block
        text-left text-lg text-primary-dark
        dark:text-ternary-light
        hover:text-secondary-dark
        dark:hover:text-secondary-light
        sm:mx-4
        mb-2
        sm:py-2
      "
      aria-label="Projects"
      >Project</NuxtLink
    >
    <NuxtLink
      to="/about"
      class="
        block
        text-left text-lg text-primary-dark
        dark:text-ternary-light
        hover:text-secondary-dark
        dark:hover:text-secondary-light
        sm:mx-4
        mb-2
        sm:py-2
        border-t-2
        pt-3
        sm:pt-2 sm:border-t-0
        border-primary-light
        dark:border-secondary-dark
      "
      aria-label="About Me"
      >Tentang saya</NuxtLink
    >
    <NuxtLink
      to="/contact"
      class="
        block
        text-left text-lg text-primary-dark
        dark:text-ternary-light
        hover:text-secondary-dark
        dark:hover:text-secondary-light
        sm:mx-4
        mb-2
        sm:py-2
        border-t-2
        pt-3
        sm:pt-2 sm:border-t-0
        border-primary-light
        dark:border-secondary-dark
      "
      aria-label="Contact"
      >kontak saya</NuxtLink
    >
  </div>
</template>

<style>
#nav .nuxt-link-exact-active,
#nav .nuxt-link-active {
  @apply text-indigo-700 dark:text-indigo-400;
}
</style>
