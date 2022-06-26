<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  data: () => {
    return {
      // @todo
      imgabaoutme: "",
    };
  },
  computed: {
    ...mapState(["aboutMe"]),
  },
  function: {
    postdata() {
      axios
        .get(
          "https://api.lolhuman.xyz/api/meme/memeindo?apikey=1938409d3a21b38cebb15c63"
        )
        .then((response) => {
          alert(response);
        });
    },
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img
         src="https://api.lolhuman.xyz/api/meme/memeindo?apikey=1938409d3a21b38cebb15c63"
        class="rounded-lg w-96"
        alt=""
      />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in aboutMe"
        :key="bio.id"
        class="
          font-general-regular
          mb-4
          text-ternary-dark
          dark:text-ternary-light
          text-lg
        "
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
