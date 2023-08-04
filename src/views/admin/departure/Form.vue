<template>
  <div class="row">
    <div class="col-12">
      <label for="departure_date">Waktu Pemberangkatan: </label>
      <input type="date" name="departure_date" id="departure_date" class="form-control" v-model="time"/>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-12">
      <button type="button" class="btn btn-light float-start" data-bs-dismiss="modal">
        <i class="bx bx-x"></i> Batal
      </button>
      <button class="btn btn-info float-end" type="button"  data-bs-dismiss="modal" @click="save" :disabled="!meta.valid">
        <i class="bx bx-navigation"></i> Atur
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { watch, computed } from "vue";

const schema = yup.object().shape({
  time: yup.string().required(),
});

const { meta } = useForm({
  validationSchema: schema,
  initialValues: {
    time: "",
  }
});

const { value: time } = useField<string>("time");
const emit = defineEmits(["save"]);

const props = defineProps({
  waktu: {
    type: String,
    default: "",
  }
});

const watchProps = computed(() => props.waktu);

watch(watchProps, (value) => {
  if(value) {
    time.value = value;
  }
});
const save = () => {
  emit("save", time.value);
}

</script>