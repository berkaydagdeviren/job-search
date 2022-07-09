<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 border-b border-solid border-brand-gray-1"
      >
        <a href="/" class="flex items-center text-xl"> {{ company }} </a>

        <nav class="ml-12 h-full">
          <ul class="flex p-0 m-0 list-none h-full">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="h-full first:ml-0 ml-9"
              data-test="main-nav-list-item"
            >
              <a href="" class="flex items-center h-full py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            text="Sign in"
            type="primary"
            data-test="login-button"
            @click="loginUser"
          />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import ActionButton from "./ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";

export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage },
  data() {
    return {
      company: "Radical Careers",
      menuItems: [
        "Teams",
        "Locations",
        "Life at Radical",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
