<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a href="/" class="flex items-center text-xl"> {{ company }} </a>

        <nav class="ml-12 h-full">
          <ul class="flex p-0 m-0 list-none h-full">
            <li class="h-full">
              <a href="" class="flex items-center h-full py-2.5">Teams</a>
            </li>
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="h-full ml-9"
            >
              <a href="" class="flex items-center h-full py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "MainNav",
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
    };
  },
};
</script>
