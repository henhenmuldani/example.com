<script setup>
import { ref, computed } from 'vue'
let count = ref(0)

const increase = () => {
  count.value++
  console.log(count)
}

const decrease = () => {
  count.value--
  console.log(count)
}

const reset = () => {
  count.value = 0
  console.log(count)
}

//computed
const cars = ref(['BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda'])
const search = ref('')

const filteredCars = computed(() => {
  return cars.value.filter((car) => car.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
  <main class="min-h-screen p-20 bg-gray-300">
    <div class="container max-w-2xl p-12 mx-auto space-y-4 bg-white rounded-lg shadow-md">
      <h1 class="text-3xl font-bold">Example Domain</h1>
      <p>
        This domain is for use in illustrative examples in documents. You may use this domain in
        literature without prior coordination or asking for permission.
      </p>
      <p class="text-indigo-600 hover:text-indigo-800">
        <a href="https://www.henhenmuldani.com">More information...</a>
      </p>
    </div>

    <div class="container max-w-2xl p-12 mx-auto mt-3 space-y-4 bg-white rounded-lg shadow-md">
      <h3 class="font-bold">Vue Counter App</h3>
      <p>{{ count }}</p>
      <div class="space-x-3">
        <button @click="increase" class="p-2 text-white bg-blue-700 rounded-none">+</button>
        <button @click="decrease" class="p-2 text-white bg-blue-700 rounded-none">-</button>
        <button @click="reset" class="p-2 text-white bg-blue-700 rounded-none">reset</button>
      </div>
    </div>

    <div class="container max-w-2xl p-12 mx-auto mt-3 space-y-4 bg-white rounded-lg shadow-md">
      <input type="text" v-model="search" />
      <ul>
        <li v-for="car in filteredCars" :key="car">{{ car }}</li>
      </ul>
    </div>
  </main>
</template>
