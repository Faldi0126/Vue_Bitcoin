<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'Navbar'
}
</script>


<template>
  <nav
    class="bg-[#EDC707] px-2 sm:px-4 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div class="container flex flex-wrap items-center justify-between mx-auto">


      <div class="items-center justify-between w-full" id="navbar-sticky">
        <ul class="flex flex-row p-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
          <li>
            <RouterLink to="/" href="#"
              class=" pl-3 pr-4 py-2 text-[#086788] font-semibold md:bg-transparent md:p-0 dark:text-white"
              aria-current="page">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/btc" href="#"
              class=" pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              BTC
              to IDR</RouterLink>
          </li>
          <li>
            <RouterLink to="/idr" href="#"
              class=" pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:border-gray-700">
              IDR
              to BTC</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


