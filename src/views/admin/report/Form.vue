<template>
  <div class="row">
    <div class="col-12">
      <label for="start_date">Tanggal Mulai:</label>
      <input type="date" class="form-control" name="start_date" id="start_date" v-model="start_date">
    </div>
    <div class="col-12 my-3">
      <label for="end_date">Tanggal Selesai:</label>
      <input type="date" class="form-control" name="end_date" id="end_date" v-model="end_date">
    </div>
    <div class="col-12 mb-3">
      <label for="category">Kategori:</label>
      <select class="form-select" v-model="category" id="kategori">
        <option value="" disabled>-- Pilih Kategori --</option>
        <option value="semua">Semua</option>
        <option v-for="data in categories" :key="data.saving_category_id" :value="data.saving_category_id">
          {{ data.name }}
        </option>
      </select>
    </div>
    <div class="col-12 mb-3">
      <label for="end_date">Status:</label>
      <select class="form-select" v-model="status">
        <option value="">-- Pilih Status --</option>
        <option value="1">Semua</option>
        <option value="2">Lunas</option>
        <option value="3">Belum Lunas</option>
      </select>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-light float-start waves-node node-light" data-bs-dismiss="modal">
      <i class="bx bx-x"></i> Batal
    </button>
    <button class="btn btn-info float-end" :disabled="!meta.valid" @click="tryFilter" data-bs-dismiss="modal">
      <i class="bx bx-filter"></i> Filter
    </button>

  </div>
</template>

<script lang="ts">
declare const Choices: any;
</script>


<script setup lang="ts">
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import { onMounted, ref } from 'vue';
import useApi from '../../../composables/api';
const { getResource } = useApi();

const schema = yup.object().shape({
  start_date: yup.string().required(),
  end_date: yup.string().required(),
  category: yup.string().required(),
  status: yup.string().required()
});

const { meta } = useForm({
  initialValues: {
    start_date: '',
    end_date: '',
    category: '',
    status: ''
  },
  validationSchema: schema
});

const { value: start_date } = useField<string>('start_date');
const { value: end_date } = useField<string>('end_date');
const { value: category } = useField<string>('category');
const { value: status } = useField<string>('status');

const emit = defineEmits(['filter']);
const tryFilter = () => {
  const data = {
    start_date: start_date.value,
    end_date: end_date.value,
    category: category.value,
    status: status.value
  };
  emit('filter', data);
};

onMounted(async () => {
  await loadCategories();
  new Choices("#kategori", {
    searchEnabled: true,
    allowHTML: true,
  });
});

const categories = ref<any[]>([]);
const loadCategories = async () => {
  const response = await getResource('/saving-categories?limit=10000');
  categories.value = response.data.data;
};
</script>