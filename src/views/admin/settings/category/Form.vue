<template>
  <div class="row">
    <div class="col-12">
      <label for="saving_type">Jenis Tabungan:</label>
      <input type="text" class="form-control" name="saving_type" id="saving_type" placeholder="Contoh: Blue"
        v-model="saving_type">
    </div>
    <div class="col-12 my-3">
      <label for="limit">Batas Pembayaran:</label>
      <input type="text" class="form-control" name="limit" id="limit" placeholder="Contoh: 2000000" v-model="limit"  @keyup="convertNominal()">
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-light float-start" data-bs-dismiss="modal">
      <i class="bx bx-x"></i> Batal
    </button>
    <button class="btn btn-info float-end" :disabled="!meta.valid" @click="addSavingType" data-bs-dismiss="modal">
      <i class="bx bx-send"></i> Simpan
    </button>
  </div>
</template>


<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import useApi from "../../../../composables/api";
import Notify from "../../../../helpers/notify";
const { postResource, putResource } = useApi();

const props = defineProps(['data']);
const id = ref<number>(0);
const schema = yup.object().shape({
  saving_type: yup.string().required(),
  limit: yup.string().required(),
});

const { meta } = useForm({
  validationSchema: schema,
  initialValues: {
    saving_type: '',
    limit: '',
  }
});

const { value: saving_type } = useField<string>("saving_type");
const { value: limit } = useField<string>("limit");

const emit = defineEmits(['loadData']);

const convertNominal = () => {
  limit.value = limit.value.replace(/\D/g, '');
  limit.value = limit.value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  limit.value = 'Rp. ' + limit.value;
};

const convertToNumber = () => {
  return limit.value.replace(/\D/g, '');  
};


const addSavingType = async () => {
  let response = null;
  if (id.value) {
    response = await putResource(`/saving-categories/${id.value}`, {
      name: saving_type.value,
      limit: convertToNumber(),
    });
  } else {
    response = await postResource('/saving-categories', {
      name: saving_type.value,
      limit: convertToNumber(),
    });
  }
  if (response) {
    Notify.success(response.message);
    emit('loadData', response.data);
  }
  clearData();
};

const getProps = computed(() => props.data);

watch(getProps, (value) => {
  if (value) {
    saving_type.value = value.name;
    limit.value = value.limit;
    id.value = value.saving_category_id;
  }
});

function clearData() {
  saving_type.value = '';
  limit.value = '';
}

</script>