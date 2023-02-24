<script>
import axios from 'axios'

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      price: {}
    }
  },
  methods: {
    async getData() {
      try {
        let { data } = await axios.get('https://blockchain.info/ticker')
        this.price = data
      } catch (error) {
        console.log(error);
      }

    }
  },
  created() {
    this.getData()
  }
}

</script>

<template>
  <div class="flex flex-col p-1 my-5 lg:p-5 lg:m-5 justify-center">
    <!-- title-->
    <div class="flex flex-col justify-center py-5 items-center">
      <h1 class="text-2xl font-bold text-gray-800 md:text-3xl dark:text-white">Harga Bitcoin Hari Ini</h1>
    </div>

    <!-- table -->

    <div class="flex justify-center items-center my-5">
      <table class="w-3/4 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-[#FBE888] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Mata Uang
            </th>
            <th scope="col" class="px-6 py-3">
              Harga Beli Bitcoin
            </th>
            <th scope="col" class="px-6 py-3">
              Harga Jual Bitcoin
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Dollar Australia
            </th>
            <td class="px-6 py-4">
              {{ price.AUD.buy }}
            </td>
            <td class="px-6 py-4">
              {{ price.AUD.sell }}
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Euro Eropa
            </th>
            <td class="px-6 py-4">
              {{ price.EUR.buy }}
            </td>
            <td class="px-6 py-4">
              {{ price.EUR.sell }}
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Poundsterling Inggris
            </th>
            <td class="px-6 py-4">
              {{ price.GBP.buy }}
            </td>
            <td class="px-6 py-4">
              {{ price.GBP.sell }}
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Yen Jepang
            </th>
            <td class="px-6 py-4">
              {{ price.JPY.buy }}
            </td>
            <td class="px-6 py-4">
              {{ price.JPY.sell }}
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Dollar Amerika
            </th>
            <td class="px-6 py-4">
              {{ price.USD.buy }}
            </td>
            <td class="px-6 py-4">
              {{ price.USD.sell }}
            </td>
          </tr>

        </tbody>
      </table>
    </div>


  </div>
</template>


