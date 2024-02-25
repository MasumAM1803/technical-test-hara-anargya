<script setup>
import axios from 'axios';
import {onMounted, ref} from "vue"
import Modal from '../components/Modal.vue';

let isModalVisible = ref(false);
 
const apiDomain = "https://api.slingacademy.com/v1/sample-data/users";
let config = {
  method: "GET",
  url: apiDomain,
};
const results = ref([]);
const dataModal = ref({});

onMounted(async () => {
  await axios(config)
    .then((response) => {
    const responseJson = response.data;
    const { success, message } = responseJson;
    if (success !== true) {
      throw new Error(message);
    }

    const { users } = responseJson;
    results.value = users;
  })
  .catch((error) => {
    console.log(error);
  });
})

function showModal(id) {
  let datas = results.value;
  dataModal.value = datas.filter(result => result.id == id)
  isModalVisible.value = true;
}
function closeModal() {
  dataModal.value = [];
  isModalVisible.value = false;
}

function formattedDate(date) {
  let newDate = new Date(date);
  let day = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  let formattedDate = `${day} / ${month+1} / ${year}`;
  return formattedDate;
}

</script>

<template>
    <Modal
        v-show="isModalVisible"
        @close="closeModal"
        v-for="(item, index) in dataModal" :key=index
        >
        <template v-slot:body>
            <div class="flex flex-col gap-3">
                <div class="flex items-center gap-8">
                    <img :src=item.profile_picture :alt=item.first_name class="w-[150px] h-[150px] rounded-full">
                    <div>
                        <p>{{ item.first_name }} {{ item.last_name }}</p>
                        <p>{{ item.email }}</p>
                        <p>{{ item.phone }}</p>
                    </div>
                </div>
                <div>
                    <p><span class="font-bold">Gender: </span> {{ item.gender }}</p>
                    <p><span class="font-bold">Job: </span> {{ item.job }}</p>
                    <p><span class="font-bold">Street: </span> {{ item.street }}, {{ item.country }}</p>
                </div>
            </div>
        </template>
    </Modal>
  <div class="text-lg font-bold text-black text-left mb-4">User List</div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-gray-500 dark:text-gray-400">
      <thead class="text-gray-700 bg-[#fafbfc]">
        <tr>
          <th class="p-4">ID</th>
          <th class="p-4">User</th>
          <th class="p-4">Date Of Birth</th>
          <th class="p-4">Email</th>
          <th class="p-4">Job</th>
          <th class="p-4">Country</th>
          <th class="p-4">Action</th>
        </tr>
      </thead>
      <tbody class="bg-[#FFF]">
        <tr v-for="(item, index) in results" :key=index class="text-[#686868]">
        <td class="px-4 py-4">{{ item.id }}</td>
        <td class="px-4 py-4">
          <div class="flex items-center gap-2 text-black">
            <img :src=item.profile_picture :alt=item.first_name class="w-[24px] h-[24px] rounded-full">
            <p>{{ item.first_name }} {{ item.last_name }}</p>
          </div>
        </td>
        <td class="px-4 py-4">{{ formattedDate(item.date_of_birth) }}</td>
        <td class="px-4 py-4 text-black">{{ item.email }}</td>
        <td class="px-4 py-4">{{ item.job }}</td>
        <td class="px-4 py-4 text-black">{{ item.country }}</td>
        <td class="px-4 py-4">
          <div class="flex gap-3">
            <button class="font-medium rounded-lg text-sm px-3.5 py-1.5 me-2 mb-2 text-black border border-gray-200 shadow-lg">Select</button>
            <button @click="showModal(item.id)" class="font-medium rounded-lg text-sm px-3.5 py-1.5 me-2 mb-2 text-black border border-gray-200 shadow-lg">
                View Detail
            </button>
          </div>
        </td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<style scoped></style>
