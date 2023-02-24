<script>
import axios from 'axios'

export default {
  name: 'BtcIdr',
  data() {
    return {
      price: {},
      btc: 0
    }
  },
  methods: {
    async getData() {
      try {
        let { data } = await axios.get('https://blockchain.info/ticker')
        this.price = data.USD.last
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
      <h1 class="text-2xl font-bold text-gray-800 md:text-3xl">Konversi BTC ke Rupiah</h1>
      <p class="font-light mt-5 ">Kurs 1 USD = 14.000 IDR</p>
    </div>


    <div class="flex flex-col justify-center items-center mt-5">
      <input v-model="btc" type="number"
        class="flex w-2/3 md:w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Masukan nilai dalam rupiah" required>


    </div>

    <div v-if="this.btc" class="flex flex-col justify-center items-center mt-10">
      <h1 class="text-xl font-bold text-gray-800 md:text-3xl"> {{ this.btc }} BTC = {{ (this.btc *
        this.price * 14000).toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR',
        })
      }} </h1>
    </div>
  </div>
</template>



