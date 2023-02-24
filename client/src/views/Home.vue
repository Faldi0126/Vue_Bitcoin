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
      <h1 class="text-2xl font-bold text-gray-800 md:text-3xl">Harga Bitcoin Hari Ini</h1>
    </div>

    <!-- table -->

    <div class="flex justify-center items-center">
      <div class="flex md:w-4/5 flex-col justify-center items-center my-5 m-3">

        <table class="text-sm text-left text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-[#FBE888]">
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
            <tr class="bg-white border-b">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Dollar Australia
              </th>
              <td class="px-6 py-4">
                {{ price.AUD.buy }}
              </td>
              <td class="px-6 py-4">
                {{ price.AUD.sell }}
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Euro Eropa
              </th>
              <td class="px-6 py-4">
                {{ price.EUR.buy }}
              </td>
              <td class="px-6 py-4">
                {{ price.EUR.sell }}
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Poundsterling Inggris
              </th>
              <td class="px-6 py-4">
                {{ price.GBP.buy }}
              </td>
              <td class="px-6 py-4">
                {{ price.GBP.sell }}
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Yen Jepang
              </th>
              <td class="px-6 py-4">
                {{ price.JPY.buy }}
              </td>
              <td class="px-6 py-4">
                {{ price.JPY.sell }}
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
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


  </div>
</template>


