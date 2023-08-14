<template>
  <table class="table table-hover table-bordered">
    <thead class="align-middle">
      <tr>
        <th class="col" rowspan="2" style="width: 17%;">Tanggal Pembayaran</th>
        <th class="col text-center" colspan="2">Jamaah</th>
        <th class="col text-center" colspan="2">Pembayaran</th>
      </tr>
      <tr>
        <th>Kode</th>
        <th>Nama Jamaah</th>
        <th class="text-end">Debit</th>
        <th class="text-end">Saldo</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, i) in result" :key="i">
        <td>{{ data.created_at.slice(0, 10) }}</td>
        <td>{{ data.kode }}</td>
        <td>{{ data.username }}</td>
        <td class="text-end">{{ convertToRp(data.nominal) }}</td>
        <td class="text-end">
          {{ convertToRp(data.saldo) }}
        </td>
      </tr>
      <tr v-if="result.length == 0">
        <td colspan="5" class="text-center">Data tidak ditemukan</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { convertToRp, isDisableLayer, isEnableLayer } from '../../helpers/handleEvent';
import { useRoute } from 'vue-router';
import axios from 'axios';
const result = ref<any[]>([]);
const route = useRoute();
onMounted(async () => {
  isEnableLayer();
  await loadData();
});

const loadData = async () => {
  const query = route.fullPath;
  const { data: response } = await axios.get(import.meta.env.VITE_API_KMW + query);
  result.value = response.data;
  isDisableLayer();
  if (result.value) {
    setTimeout(() => {
      window.print();
      window.close();
    }, 300);
  }
}

</script>