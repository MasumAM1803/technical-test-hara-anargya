<script setup>
import { ref } from 'vue';
import provinces from '../assets/js/province';
import cities from '../assets/js/city';

const listCity = ref([]);
const listProvinceName = ref([]);
const tabPaneListCity = ref(true);
const tabPaneProvince = ref(false);

function getListCity(idProvince) {
    listCity.value = cities.filter(city => city.provinsi_id == idProvince.target.value)
}

function getProvinceName(idCity) {
    listProvinceName.value = provinces.filter(province => province.wilayah_id == idCity.target.value)
}

function clearList(id) {
    switch (id) {
        case 1:
            listCity.value = [];
            break;
        case 2:
            listProvinceName.value = [];
            break;
        default:
            listCity.value = [];
            listProvinceName.value = [];
            break;
    }
}

function showPane(id) {
    switch (id) {
        case 1:
            tabPaneListCity.value = true
            tabPaneProvince.value = false
            break;
        case 2:
            tabPaneListCity.value = false
            tabPaneProvince.value = true
            break;
        default:
            tabPaneListCity.value = true
            tabPaneProvince.value = false
            break;
    }
}

</script>

<template>
    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-8">
        <ul class="flex flex-wrap -mb-px">
            <li class="me-2">
                <a @click="showPane(1)" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Search List City by ID Province</a>
            </li>
            <li class="me-2">
                <a @click="showPane(2)" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" aria-current="page">Search Province Name by ID City</a>
            </li>
        </ul>
    </div>
    <div v-show="tabPaneListCity" class="text-black">
        <h2 class="mb-6 font-extrabold text-3xl">Search List City</h2>
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input :value="idProvince" @change="getListCity" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type id Province..." required />
        </div>
        <button v-if="listCity.length !== 0" @click="clearList(1)" class="font-medium rounded-lg text-sm px-3.5 py-1.5 me-2 mt-3 mb-1 text-black border border-gray-200 shadow-lg">Clear</button>
        <table v-if="listCity.length !== 0" class="w-full text-sm text-gray-500 dark:text-gray-400 mt-6">
            <thead class="text-gray-700 bg-[#fafbfc]">
                <tr>
                    <th class="p-4">ID</th>
                    <th class="p-4">Name</th>
                    <th class="p-4">REF ID</th>
                    <th class="p-4">Province ID</th>
                </tr>
            </thead>
            <tbody class="bg-[#FFF] text-center">
                <tr v-for="(item, index) in listCity" :key=index class="text-[#686868]">
                    <td class="px-4 py-4">{{ item.id }}</td>
                    <td class="px-4 py-4">{{ item.name }}</td>
                    <td class="px-4 py-4">{{ item.ref_id }}</td>
                    <td class="px-4 py-4">{{ item.provinsi_id }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div v-show="tabPaneProvince" class="text-black">
        <h2 class="mb-6 font-extrabold text-3xl">Search Name Province</h2>
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input :value="idCity" @change="getProvinceName" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type id City..." required />
        </div>
        <button v-if="listProvinceName.length !== 0" @click="clearList(2)" class="font-medium rounded-lg text-sm px-3.5 py-1.5 me-2 mt-3 mb-1 text-black border border-gray-200 shadow-lg">Clear</button>
        <table v-if="listProvinceName.length !== 0" class="w-full text-sm text-gray-500 dark:text-gray-400 mt-6">
            <thead class="text-gray-700 bg-[#fafbfc]">
                <tr>
                    <th class="p-4">ID</th>
                    <th class="p-4">Name</th>
                    <th class="p-4">Wilayah ID</th>
                </tr>
            </thead>
            <tbody class="bg-[#FFF] text-center">
                <tr v-for="(item, index) in listProvinceName" :key=index class="text-[#686868]">
                    <td class="px-4 py-4">{{ item.id }}</td>
                    <td class="px-4 py-4">{{ item.name }}</td>
                    <td class="px-4 py-4">{{ item.wilayah_id }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>