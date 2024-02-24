<script setup>
import axios from 'axios';
import {onMounted, ref} from "vue"
 
const apiDomain = "https://api.slingacademy.com/v1/sample-data/users";
let config = {
  method: "GET",
  url: apiDomain,
};
const results = ref([]);

// onMounted(async () => {
//   await axios(config)
//     .then((response) => {
//     const responseJson = response.data;
//     const { success, message } = responseJson;
//     if (success !== true) {
//       throw new Error(message);
//     }

//     const { users } = responseJson;
//     results.value = users;
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// })

axios(config)
  .then((response) => {
    const responseJson = response.data;
    const { success, message } = responseJson;
    if (success !== true) {
      throw new Error(message)
    }

    const { users } = responseJson;
    // console.log(users);
    results.value = users;
  })
  .catch((error) => {
    console.log(error);
  });

function formattedDate(date) {
  let newDate = new Date(date);
  let day = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  let formattedDate = `${day} / ${month+1} / ${year}`;
  console.log(formattedDate);
  return formattedDate;
}

</script>

<template>
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
        <!-- <td>{{ item.gender }}</td>
        <td>{{ item.city }}</td>
        <td>{{ item.zipcode }}</td>
        <td>{{ item.latitude }}</td>
        <td>{{ item.first_name }}</td>
        <td>{{ item.last_name }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.street }}</td>
        <td>{{ item.state }}</td>
        <td>{{ item.longitude }}</td> -->
        <td class="px-4 py-4">
          <div class="flex gap-3">
            <button class="font-medium rounded-lg text-sm px-3.5 py-1.5 me-2 mb-2 text-black border border-gray-200 shadow-lg">Select</button>
            <button class="font-medium rounded-lg text-sm px-3.5 py-1.5 me-2 mb-2 text-black border border-gray-200 shadow-lg">View Detail</button>
          </div>
        </td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<style scoped></style>
