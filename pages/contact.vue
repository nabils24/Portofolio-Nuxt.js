<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Jalan Warinoi 5/No 2, Bunulrejo, Kota Malang, Jawa Timur, Indonesia",
          icon: "map-pin",
        },
        {
          id: 2,
          name: "nabilsahsadacode@gmail.com",
          icon: "mail",
        },
        {
          id: 3,
          name: "+62 859-3025-8437",
          icon: "phone",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact form -->
   

    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>
