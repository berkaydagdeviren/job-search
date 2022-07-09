<template>
  <img
    :src="imageLink"
    alt="profile-pic"
    class="w-8 h-8 object-contain rounded-3xl"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
    };
  },
};
</script>
